import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, User, Mail, Lock, Check } from 'lucide-react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passTooltip, setPassTooltip] = useState('') ;
  const [nameTooltip, setNameTooltip] = useState("") ;

  // useEffect(()=>{
  //   if(confirmPassword == password){

  //   }
  // }, [confirmPassword, password])

  const handleValidations = () => {
    const nameRegexp = /^[a-zA-Z\s]+$/; 
    const passwordRegexp = /^[a-zA-Z0-9._]{8,16}$/; 
  
    if (password !== confirmPassword) {
      setPassTooltip("Passwords do not match");
      return false; 
    } else {
      setPassTooltip("");
    }
  
    if (!passwordRegexp.test(password)) {
      setPassTooltip("Password length must be between 8 to 16 characters");
      return false; 
    }
  
    if (!nameRegexp.test(name)) {
      setNameTooltip("Name cannot contain numbers or special characters");
      return false; 
    } else {
      setNameTooltip(""); 
    }
  
    return true; 
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    //handle form Validations
    if(!handleValidations()){
      return
    }
    console.log("Reached here")
    fetch("http://localhost:8000/user/createuser", {
      method : "POST" ,
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify({
        name : name,
        email :  email,
        password :  password 
      })}).then ((res)=> {
        return res.json() ;
      }).then((res)=>{
        console.log(res.status) ;
      }).catch((err)=>{
        console.log("Error occurred") ;
      })

    

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Scale className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 transition duration-200">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 sm:text-sm"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={ (e) => setName(e.target.value) }
                />
              </div>
              <p className='text-red-400 text-xs'>{nameTooltip}</p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 sm:text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <p className='text-red-500 '></p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Check className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 sm:text-sm"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                /> 
              </div>
              <p className='text-red-400 text-xs'>{passTooltip}</p>
              {(password !== confirmPassword)? (<p className='text-red-400 text-xs'>Password not equals to confirmPassword</p>): ("")}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
              >
                Create Account
              </button>

            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;