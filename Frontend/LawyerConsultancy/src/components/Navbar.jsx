import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Scale, UserRoundSearch } from 'lucide-react';
import './Navbar.css'
import { LoginContext } from '../context/LoginContextProvider';
const Navbar = () => {
    const contextVars = useContext(LoginContext);

    return (
        <nav className="sticky top-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/home" className="flex items-center space-x-2">
                            <Scale className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">LegalAI</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">

                        <Link to="/lawyers" className="text-gray-800 flex  font-bold hover:text-blue-600"> <UserRoundSearch className="h-5 w-5 text-blue-600" /><span>Find Lawyers</span> </Link>
                        <Link to={(contextVars.isAuthenticated)?"/chat" : "/login"} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                            <span>

                                <button href="#" className="ai-button" >
                                    <span className="button__icon-wrapper">
                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="button__icon-svg"
                                            width="10"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>

                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            width="10"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="button__icon-svg button__icon-svg--copy"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    Ask AI Lawyer
                                </button>


                            </span>
                        </Link>
                        {contextVars.isAuthenticated ? (
                     <div className="flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-lg shadow-md ">
                     {/* Profile Icon */}
                     <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center rounded-full shadow-lg">
                       <span className="font-semibold text-lg">{contextVars.user.name[0].toUpperCase()}</span>
                     </div>
                   
                     {/* Welcome Message */}
                     <span className="text-gray-800 text-lg font-semibold">
                       Welcome, {contextVars.user.name}
                     </span>
                   </div>
                   
                        ) : (
                            <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                                <span>

                                    <button className="button">
                                        Login
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                            <path
                                                clipRule="evenodd"
                                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </span>
                            </Link>
                        )}

                    </div>
                </div >
            </div >
        </nav >
    );
};

export default Navbar;