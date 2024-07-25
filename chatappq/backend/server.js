const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const crypto = require('crypto');
const kyber = require('crystals-kyber');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 8080;

app.use(cors());

// To generate a public and private key pair (pk, sk) for Kyber
let pk_sk = kyber.KeyGen768();
let pk = pk_sk[0];
let sk = pk_sk[1];

// To generate a random 256-bit symmetric key (ss) and its encapsulation (c)
let c_ss = kyber.Encrypt768(pk);
let c = c_ss[0];
let ss1 = c_ss[1];

const iv = crypto.randomBytes(16); // 128-bit initialization vector

app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('new user', (username) => {
    console.log(`User ${username} connected`);
    socket.username = username;
  });

  socket.on('chat message', (message) => {
    const username = socket.username;

    // Convert message to string if it's an object
    let messageStr = typeof message === 'string' ? message : JSON.stringify(message);

    const cipher = crypto.createCipheriv('aes-256-cbc', ss1, iv);

    let encrypted = cipher.update(messageStr, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    console.log('Encrypted:', encrypted);

    let ss2 = kyber.Decrypt768(c, sk);

    const decryptedCipher = crypto.createDecipheriv('aes-256-cbc', ss2, iv);
    let decrypted = decryptedCipher.update(encrypted, 'base64', 'utf8');
    decrypted += decryptedCipher.final('utf8');

    io.emit('chat message', { username: username, decrypted: decrypted });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
