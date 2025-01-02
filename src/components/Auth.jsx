import React from 'react';

function Auth({ setUser }) {
  const handleLogin = () => {
    setUser({ name: 'Test User' });
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Demo Account</button>
    </div>
  );
}

export default Auth;
