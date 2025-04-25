import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const hardcodedUser = {
  email: "user@example.com",
  password: "password123",
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      alert("You have logged in successfully");
    } else {
      alert("Failed to login. Please check your credentials.");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleForgotPassword}>Forgot Password?</button>
      </div>
    </div>
  );
};

export default SignIn;
