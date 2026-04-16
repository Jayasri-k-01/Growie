import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

const Register = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess('Registration successful 🎉 Please login.');
        
        // Auto navigate or you can auto login if backend returned a token
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setError(data.message || 'Error occurred during registration.');
        setIsLoading(false);
      }
    } catch (err) {
      setError('Connection refused. Ensure backend is running.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAF8] p-4 text-[#13241C] font-outfit">
      
      {/* Back to Home Button */}
      <Link to="/" className="absolute top-6 left-6 text-growie-dark hover:text-growie-green flex items-center gap-2 transition-colors font-medium">
        &larr; Back to Home
      </Link>

      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden growie-shadow border border-gray-100">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-growie-dark mb-3">
              Join Growie <span className="inline-block">🌱</span>
            </h1>
            <p className="text-[#526B5F] text-lg">
              Create an account to start growing your savings
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-50 text-growie-dark rounded-lg text-sm font-medium border border-green-100">
                {success}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-growie-dark mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growie-green focus:border-transparent transition-all"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-growie-dark mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growie-green focus:border-transparent transition-all"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-growie-dark mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growie-green focus:border-transparent transition-all"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-growie-dark transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-growie-green hover:bg-[#00F098] text-growie-dark font-bold text-lg py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,208,132,0.3)] hover:shadow-[0_6px_20px_rgba(0,208,132,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Creating account...
                </>
              ) : (
                'Sign Up'
              )}
            </button>
            
            <p className="text-center text-sm font-medium text-[#526B5F] mt-6">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-growie-green hover:text-growie-dark transition-colors">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side: Illustration */}
        <div className="hidden md:flex w-1/2 bg-[#E0F8EC] p-12 flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-growie-green/5 pattern-dots" />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="text-[120px] mb-8 drop-shadow-xl select-none relative animate-bounce-slow">🪴</div>
            <h3 className="text-2xl font-bold text-growie-dark mb-2">Automate your savings</h3>
            <p className="text-[#526B5F]">Watch your money grow effortlessly while you sleep.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
