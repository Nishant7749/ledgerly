import { Link } from "react-router-dom"
import home from '../assets/home2.png'

export default function Home() {

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold ml-15 text-center text-blue-300 mt-20">Welcome to Ledgerly!</h1>
                    <div className="mt-36">
                     <h1 className="text-5xl font-bold font-serif text-center text-blue-300 mb-4">Control Your <span className="text-blue-500">Money</span></h1>
                      <h1 className="text-5xl font-bold font-serif text-center text-blue-300 ">Shape Your <span className="text-blue-500">Future</span></h1>
                      </div>

<div className="flex gap-6 items-center justify-center">
                    <button className=" w-40 border mt-15 p-3 text-lg rounded-xl hover:rounded-md transition-all duration-300 bg-blue-800/50 hover:bg-blue-700/70 cursor-pointer border-blue-900/70 hover:border-blue-900/80 text-blue-100"><Link to="/expense">Get Started</Link></button>
                    <button className="w-36 text-white mt-15 border-blue-800/50 hover:rounded-xl transition-all duration-300 cursor-pointer rounded-sm border p-3 hover:bg-blue-800/50">Know More </button>
                    </div>
                </div>
                <img className="w-1/2 h-1/2" src={home} alt="home-img" />


            </div>
        </>
    )
}