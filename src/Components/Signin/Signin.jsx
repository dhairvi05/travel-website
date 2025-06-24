import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Signin.css'

function Signin() {
  const [signup, setSignup] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const toggleMode = () => {
    setSignup(!signup);
    setForm({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup) {
      alert(`Account created for ${form.name}`);
      navigate('/places');
    } else {
      alert(`Signed in as ${form.email}`);
      navigate('/places');
    }
  };

  return (
    <div className="signin">
      <div className="box">
        <h2>{signup ? 'Create Account' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          {signup && (
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required/>
          )}
          <input type="email" name="email" placeholder="Email address" value={form.email} onChange={handleChange} required/>
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
          <button type="submit" className='btn'>
            {signup ? 'Create Account' : 'Sign In'}
          </button>
        </form>
        <p>
          {signup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={toggleMode} className='btn'>
            {signup ? 'Sign In' : 'Create one'}
          </button>
        </p>
      </div>
    </div>
  );
}
export default Signin