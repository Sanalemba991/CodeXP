import { useState } from "react";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address");
      alert("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      alert("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://192.168.1.19:4004/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})); 
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();
      setMessage("Registration successful!");
      alert("Registration successful!"); 
      console.log('Registration response:', data);
    } catch (error) {
      setMessage(error.message || 'An error occurred');
      alert(error.message || 'An error occurred'); 
    } finally {
      setLoading(false);
    }
  };
  

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setMessage('');
  };

  return (
    <div>
      <h1>Register</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleInputChange(setEmail)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={handleInputChange(setConfirmPassword)}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default Register;
