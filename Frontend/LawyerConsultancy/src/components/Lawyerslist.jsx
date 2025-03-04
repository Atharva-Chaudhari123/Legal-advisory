import React, { useContext, useEffect, useState } from 'react';
import { Search, MapPin, Star, Phone, Mail, Briefcase, Globe, Clock, ChevronDown, Filter } from 'lucide-react';
import { LoginContext } from '../context/LoginContextProvider';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Lawyers = () => {
  const contextVars = useContext(LoginContext);
  const [lawyers, setLawyerlist] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect( () => {
    
    if(!contextVars.isAuthenticated){
      navigate("/login")
      return ;
    }
    
    const language = searchParams.get("lang");
    const specialized_law = searchParams.get("law");
    const query = `lang=${language}&law=${specialized_law}`

    try {
      fetch(`http://localhost:8000/filter/getlawyer?${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((res)=>{
        return res.json() ;
      }).then((res)=>{
        setLawyerlist(res) ;
      })

    } catch (e) {
      console.log(e);
    }
  }, [])

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');


  const specializations = [
    'All',
    'Corporate Law',
    'Criminal Law',
    'Family Law',
    'Property Law',
    'Immigration Law',
    'Employment Law',
    'Intellectual Property Law',
    'Bankruptcy Law',
    'Tax Law',
    'Environmental Law',
    'Medical Malpractice Law',
    'Personal Injury Law',
    'Human Rights Law',
    'International Law',
    'Cyber Law',
    'Real Estate Law',
    'Consumer Protection Law',
    'Entertainment & Media Law',
    'Military Law',
    'Constitutional Law'
  ];

  // const lawyers = [
  //   {
  //     id: 1,
  //     name: 'Sarah Johnson',
  //     specialization: 'Corporate Law',
  //     rating: 4.8,
  //     experience: 12,
  //     location: 'New York, NY',
  //     languages: ['English', 'Spanish'],
  //     availableFrom: 'Next Week',
  //     consultationFee: '$200',
  //     successRate: '95%'
  //   },
  //   {
  //     id: 2,
  //     name: 'Jasmita kaur',
  //     specialization: 'Corporate Law',
  //     rating: 1.1,
  //     experience: 2,
  //     location: 'Pune, IND',
  //     languages: ['English'],
  //     availableFrom: 'All time',
  //     consultationFee: '₹200',
  //     successRate: '35%'
  //   },
  //   // ... other lawyer data
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-blue-600 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Find Your Legal Expert</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connect with top-rated lawyers specialized in various fields of law
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-2 rounded-xl shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                  placeholder="Search by name or specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="md:w-64">
                <div className="relative">
                  <select
                    className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500"
                    value={selectedSpecialization}
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                  >
                    {specializations.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <Filter className="h-4 w-4" />
            <button className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
              Experience ▾
            </button>
            <button className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
              Rating ▾
            </button>
            <button className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
              Location ▾
            </button>
          </div>
          <span className="text-sm text-gray-500">Showing {lawyers.length} lawyers</span>
        </div>
      </div>

      {/* Lawyers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                {/* Lawyer Header */}
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {lawyer.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{lawyer.name}</h3>
                    <div className="flex items-center mt-1">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-1" />
                      <span className="text-blue-600 font-medium">{lawyer.specialization}</span>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Experience</div>
                    <div className="text-lg font-semibold text-gray-900">{lawyer.experience} Years</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Success Rate</div>
                    <div className="text-lg font-semibold text-gray-900">{lawyer.successRate}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                    {lawyer.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                    <span className="font-medium">{lawyer.rating}</span>
                    <span className="mx-1">•</span>
                    <span className="text-gray-500">{Math.ceil( Math.random() * 100)} Reviews</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-5 w-5 mr-2 text-gray-400" />
                    {lawyer.languages}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-gray-400" />
                    Available
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200">
                    Schedule Consultation
                  </button>
                  <div className="flex justify-center mt-4 space-x-4">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;