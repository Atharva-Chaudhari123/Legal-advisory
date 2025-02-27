import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom' 
import Home from './components/Home'
import Login from './components/Login'
import Lawyerlist from './components/Lawyerslist'
import Chat from './components/Chat'
import Navbar from './components/Navbar'
import Footer  from './components/Footer'
import SignUp from './components/Signup'

function App() {


  return (
    <div>   
      
      <BrowserRouter >
      <Navbar />
        <Routes >
          <Route index path="home" element={ <Home/>} />
          <Route path='login' element={ <Login />} />
          <Route path='Chat' element={ < Chat />} />
          <Route path='lawyers' element={ < Lawyerlist />} />
          <Route path='signup' element={ < SignUp />} />



        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
