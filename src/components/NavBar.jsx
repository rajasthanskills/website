import { Link } from 'react-router-dom';
import { Sparkles } from './Icons';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Rajasthan Skills and Academy</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 list-none m-0 p-0">
          <li>
            <Link to="/" className="text-white/80 hover:text-white transition-colors font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors font-semibold">About Us</Link>
          </li>
          <li>
            <Link to="/jobs" className="text-white/80 hover:text-white transition-colors font-semibold">Jobs</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors font-semibold">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;