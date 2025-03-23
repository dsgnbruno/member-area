import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react';
import Logo from '../components/Logo';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate inputs
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    try {
      setLoading(true);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would make an API call here
      // const response = await loginUser(email, password);
      
      // For demo purposes, we'll just redirect to dashboard
      if (rememberMe) {
        // In a real app, you would store a token securely
        localStorage.setItem('userLoggedIn', 'true');
      } else {
        sessionStorage.setItem('userLoggedIn', 'true');
      }
      
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col md:flex-row">
      {/* Left side - Brand section */}
      <div className="hidden md:flex md:w-1/2 bg-primary text-primary-content flex-col justify-center items-center p-8">
        <div className="max-w-md text-center">
          <div className="mb-8 flex justify-center">
            <Logo theme="dark" size={80} />
          </div>
          <h1 className="text-4xl font-bold mb-6">Welcome to Learning Portal</h1>
          <p className="text-xl mb-8">
            Access thousands of courses and enhance your skills with our expert-led tutorials.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-primary-focus/30 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">10,000+</h3>
              <p>Courses Available</p>
            </div>
            <div className="bg-primary-focus/30 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">500+</h3>
              <p>Expert Instructors</p>
            </div>
            <div className="bg-primary-focus/30 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">1M+</h3>
              <p>Active Students</p>
            </div>
            <div className="bg-primary-focus/30 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="md:hidden flex justify-center mb-8">
            <Logo theme="light" size={60} />
          </div>
          
          <div className="bg-base-100 shadow-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Log In to Your Account</h2>
            
            {error && (
              <div className="alert alert-error mb-6 flex items-center gap-2">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-bordered w-full" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    className="input input-bordered w-full pr-10" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    required
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="form-control">
                  <label className="label cursor-pointer gap-2">
                    <input 
                      type="checkbox" 
                      className="checkbox checkbox-sm checkbox-primary" 
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      disabled={loading}
                    />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {!loading && <LogIn size={18} />}
                {loading ? 'Logging in...' : 'Log In'}
              </button>
              
              <div className="divider my-6">OR</div>
              
              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => console.log('Google login')}
                  disabled={loading}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="mr-2">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => console.log('Microsoft login')}
                  disabled={loading}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23" className="mr-2">
                    <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                    <path fill="#f35325" d="M1 1h10v10H1z"/>
                    <path fill="#81bc06" d="M12 1h10v10H12z"/>
                    <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                    <path fill="#ffba08" d="M12 12h10v10H12z"/>
                  </svg>
                  Microsoft
                </button>
              </div>
            </form>
            
            <p className="text-center mt-6">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
          
          <p className="text-center text-sm mt-8 text-base-content/70">
            By logging in, you agree to our{' '}
            <Link to="/terms" className="hover:underline">Terms of Service</Link>{' '}
            and{' '}
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
