import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, Video, MessageSquareText, User, Globe, MessageSquare,  ArrowRight, Shield, Clock  } from 'lucide-react';
import './Home.css'
const Home = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                AI-Powered Legal Solutions at Your Fingertips
                            </h1>
                            <p className="text-xl mb-8">
                                Get instant legal guidance from our AI assistant and connect with experienced lawyers for professional help.
                            </p>
                            <div className="space-x-4 flex">
                                <Link to="/chat" className="font-semibold">
                                    <button className="btn">
                                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                                        </svg>

                                        <span class="text">Legal     Ai</span>
                                    </button>
                                </Link>
                                <Link to="/lawyers" className="bg-transparent border-2 border-white font-bold px-4 py-4 rounded-lg font-semibold hover:bg-white duration-300 hover:text-blue-600 hover:text-xl">
                                    Find Lawyers
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
                                alt="Legal AI"
                                className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Why Choose LegalAI?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of legal assistance with our innovative platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Legal Assistant */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6 transform group-hover:-rotate-12 transition-transform duration-300">
                <MessageSquareText className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Legal Assistant
              </h3>
              
              <p className="text-gray-600 mb-6">
                Get instant answers to your legal questions 24/7 with our advanced AI system. Reliable, accurate, and always available.
              </p>
              
              <a href="#" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Expert Lawyers */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6 transform group-hover:-rotate-12 transition-transform duration-300">
                <User className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Expert Lawyers
              </h3>
              
              <p className="text-gray-600 mb-6">
                Connect with qualified lawyers specialized in your specific legal needs. Vetted professionals at your service.
              </p>
              
              <a href="#" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Find a lawyer <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Multiple Languages */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6 transform group-hover:-rotate-12 transition-transform duration-300">
                <Globe className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Multiple Languages
              </h3>
              
              <p className="text-gray-600 mb-6">
                Access legal help in your preferred language with our multilingual support. Breaking down language barriers.
              </p>
              
              <a href="#" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Available languages <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-blue-50 rounded-2xl p-6 flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Secure & Confidential</h4>
              <p className="text-gray-600">Your data is protected with enterprise-grade security</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-6 flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">24/7 Availability</h4>
              <p className="text-gray-600">Get legal assistance whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl" />
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />

                        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            {/* Header */}
                            <div className="text-center mb-10">
                                <div className="flex justify-center mb-4">
                                    <Scale className="h-12 w-12 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                    Connect with a Professional Lawyer
                                </h2>
                                <p className="mt-2 text-gray-600">Fill out the form below and we'll match you with the right legal expert</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Legal Assistance Type */}
                                <div className="group">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Type of Legal Assistance
                                    </label>
                                    <div className="relative">
                                        <select className="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none">
                                            <option value="">Select practice area</option>
                                            <option>Corporate Law</option>
                                            <option>Criminal Law</option>
                                            <option>Family Law</option>
                                            <option>Property Law</option>
                                            <option>Immigration Law</option>
                                            <option>Employment Law</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Language Preference */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Preferred Language
                                    </label>
                                    <div className="relative">
                                        <select className="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none">
                                            <option value="">Select language</option>
                                            <option>English</option>
                                            <option>Spanish</option>
                                            <option>French</option>
                                            <option>German</option>
                                            <option>Chinese</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Case Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Brief Description of Your Case
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            rows={4}
                                            className="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                                            placeholder="Please provide a brief overview of your legal issue..."
                                        />
                                        <MessageSquare className="absolute right-3 bottom-3 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>

                                {/* Contact Preference */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Preferred Contact Method
                                    </label>
                                    <div className="grid grid-cols-3 gap-4">
                                        <button
                                            type="button"
                                            className="flex flex-col items-center px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 focus:bg-blue-50 focus:border-blue-500 transition-all duration-200"
                                        >
                                            <Mail className="h-6 w-6 text-gray-400" />
                                            <span className="mt-1 text-sm text-gray-600">Email</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="flex flex-col items-center px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 focus:bg-blue-50 focus:border-blue-500 transition-all duration-200"
                                        >
                                            <Phone className="h-6 w-6 text-gray-400" />
                                            <span className="mt-1 text-sm text-gray-600">Phone</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="flex flex-col items-center px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 focus:bg-blue-50 focus:border-blue-500 transition-all duration-200"
                                        >
                                            <Video className="h-6 w-6 text-gray-400" />
                                            <span className="mt-1 text-sm text-gray-600">Video</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 focus:ring-2 focus:ring-blue-200 transform hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    Find a Lawyer
                                </button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    By submitting, you agree to our Terms of Service and Privacy Policy
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;