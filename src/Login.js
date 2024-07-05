import React from 'react';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    alert('Login form submitted');
  };

  return (
    <div>
      <h2>Login to Cryptify Chat</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
