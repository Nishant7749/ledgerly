import ExpenseList from "../components/ExpList"
import { searchExpenses, sortExpenses, getExpenses } from '../services/expAPI'
import { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";


export default function History() {
    const [expenses, setExpenses] = useState([]);
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState("")

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const res = await getExpenses();
            setExpenses(res.data.data);
        } catch (err) {
            console.error("Failed to fetch expenses:", err);
        }
    };


    const searching = async (keyword) => {
        const res = await searchExpenses(keyword)
        console.log(res.data)
        setExpenses(res.data.data);
        console.log(expenses)
    }

    const sorting = async (order) => {
        const res = await sortExpenses(order)
        setExpenses(res.data.data);
    }


    return (
        <>
            <div>

                 <h1 className="text-white text-center my-10 text-xl font-mono">All Recorded Expenses</h1>
                <div className="w-full h-0.5 mb-8 bg-blue-200"></div>

                <div className="flex items-center justify-center gap-6 my-10">
                    <div className="flex items-center justify-center">
                        <input className="w-140 outline-none bg-blue-400/20 rounded-l-md p-2 text-gray-200 border border-blue-400/50" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search your records" />
                        <button className="border border-blue-500 text-gray-200 rounded-r-md bg-blue-500/50 p-2 hover:bg-500/70 hover:text-white hover:border-blue-600 cursor-pointer" onClick={() => searching(search)}><IoMdSearch className="text-2xl" /></button>
                    </div>

                    <div className="">
                        <select className="w-30 outline-none bg-blue-400/20 rounded-md p-2 text-gray-400 border border-blue-400/50" value={order} onChange={(e) => {setOrder(e.target.value); sorting(e.target.value)}}>
                           
                            <option value="oldest">Oldest</option>
                            <option value="latest">Latest</option>
                        </select>
                    </div>


                </div>

                <ExpenseList fetchExpenses={fetchExpenses} expenses={expenses} />
            </div>
        </>
    )
}