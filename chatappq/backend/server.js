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
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 8080;

app.use(cors());

// Generate public and private key pair (pk, sk) for Kyber
let pk_sk = kyber.KeyGen768();
let pk = pk_sk[0];
let sk = pk_sk[1];

// Generate a random 256-bit symmetric key (ss) and its encapsulation (c)
let c_ss = kyber.Encrypt768(pk);
let c = c_ss[0];
let ss1 = c_ss[1];

const iv = crypto.randomBytes(16); // 128-bit initialization vector

app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('new user', (username) => {
    console.log(`User ${username} connected`);
    socket.username = username;
  });

  socket.on('chat message', (message) => {
    const { username, text } = message; // Expecting message to be an object with username and text

    // Convert message text to string
    let messageStr = typeof text === 'string' ? text : JSON.stringify(text);

    // Encrypt the message
    const cipher = crypto.createCipheriv('aes-256-cbc', ss1, iv);
    let encrypted = cipher.update(messageStr, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    // Log the ciphertext to the console
    console.log(`Message is encrypted. Ciphertext: ${encrypted}`);

    // Decrypt the message
    let ss2 = kyber.Decrypt768(c, sk);
    const decipher = crypto.createDecipheriv('aes-256-cbc', ss2, iv);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    // Emit the decrypted message with username
    io.emit('chat message', { username, text: decrypted });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Listening on *:${port}`);
});
