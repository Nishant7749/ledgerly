import { Link } from "react-router-dom"
import {FaPiggyBank} from 'react-icons/fa'
export default function Navbar() {
    return (
        <>
        <nav className="flex justify-between items-center p-3 bg-blue-300">
            <h1 className="font-serif font-bold text-2xl ml-15 flex items-center justify-center gap-3"><FaPiggyBank/>Ledgerly</h1>

            <ul className="flex items-center gap-6 text-lg font-bold mr-20">
                <li className="text-gray-700 cursor-pointer hover:text-black"><Link to='/'>Home</Link></li>
                <li className="text-gray-700 cursor-pointer hover:text-black"><Link to='/expense'>Expense</Link></li>
                <li className="text-gray-700 cursor-pointer hover:text-black"><Link to='/history'>History</Link></li>

                <button className="hover:bg-blue-500 border border-blue-600 rounded-lg p-2 font-medium flex items-center justify-center text-gray-800 hover:text-gray-950 bg-blue-400 cursor-pointer transition duration-300"><Link to="/expense">Get Started</Link></button>
                
            </ul>
        </nav>
        </>
    )
}