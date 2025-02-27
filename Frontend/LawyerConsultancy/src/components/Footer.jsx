import React from 'react';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">LegalAI</span>
            </div>
            <p className="mt-2 text-gray-400">
              Revolutionizing legal assistance with AI-powered solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/ai-chat" className="text-gray-400 hover:text-white">AI Legal Assistant</a></li>
              <li><a href="/lawyers" className="text-gray-400 hover:text-white">Find Lawyers</a></li>
              <li><a href="/login" className="text-gray-400 hover:text-white">Login</a></li>
              <li><a href="/signup" className="text-gray-400 hover:text-white">Sign Up</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Corporate Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Criminal Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Family Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Property Law</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">support@legalai.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">123 Legal Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 LegalAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;