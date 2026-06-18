import { useState } from "react"
import { LogIn } from "../services/expAPI"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { RiAccountCircleLine,  RiLockPasswordLine, RiEyeLine } from "react-icons/ri";


export default function Login({setIsLogged}) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [showPass, setShowPass] = useState(false)

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
       try {
         e.preventDefault()

        await LogIn({email, password: pass})
       toast.success("Logging In")
       
        setIsLogged(true)
        
        navigate('/')
       } catch (error) {
        console.error("login error!")
        toast.error("LogIn Error!")
       }

    }
   

    return (
        <>
            <div className="flex justify-center items-center h-108">
                <form className="flex flex-col gap-4 item-center justify-center p-8 border-gray-400/30 border bg-gray-400/20 rounded-lg " onSubmit={handleSubmit}>

                <h1 className="text-3xl font-bold text-gray-700 uppercase flex items-center justify-center mb-6">login</h1>

                    <div className="flex items-center justify-center gap-4 w-full bg-gray-400/30 p-3 rounded-lg border border-gray-400/40 ">
                        <RiAccountCircleLine className="text-3xl text-gray-500"/>
                        <input className="outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>

                    <div className="flex items-center justify-center gap-4 bg-gray-400/30 p-3 rounded-lg border border-gray-400/40 ">
                        <RiLockPasswordLine className="text-3xl text-gray-500"/>
                        <input className="outline-none" type={showPass ? "text" : "password"} value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" />
                        <RiEyeLine className=" text-gray-400 hover:text-gray-500 cursor-pointer text-2xl" onClick={() => setShowPass(!showPass)} />
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="border border-gray-500/50 bg-gray-500/40 p-2 rounded-lg text-gray-300 cursor-pointer  hover:text-white " type="submit">Log In</button>
                    </div>

                    <p className="text-sm text-gray-400">Don't have an Account? <Link to="/auth/signup" className="text-blue-400 hover:text-blue-500">SignUp</Link></p>

                </form>
            </div>
        </>
    )
}