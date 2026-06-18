import './App.css'
import {Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import History from './pages/History'
import Expense from './pages/Expense'
import Signup from './components/SignUp'
import Login from './components/LogIn'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
    const[isLogged, setIsLogged] = useState(false)

    console.log("isLogged : ", isLogged)
    

    return(
        <>
        {isLogged && <Navbar />}

        <Routes>
            <Route path='/' element={isLogged ? <Home/> : <Signup setIsLogged={setIsLogged}/>} />
            <Route path='/auth/login' element={isLogged ? <Home/> : <Login setIsLogged={setIsLogged}/>} />
            <Route path='/auth/signup' element={isLogged ? <Home/> : <Signup setIsLogged={setIsLogged}/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/expense' element={<Expense/>} />
        </Routes>

        <ToastContainer
        position="top-right"
        autoClose={3000}
      />
        </>
    )
}