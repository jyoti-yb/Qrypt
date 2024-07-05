import React from 'react';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
    alert('Sign-up form submitted');
  };

  return (
    <div>
      <h2>Sign Up for Cryptify Chat</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
