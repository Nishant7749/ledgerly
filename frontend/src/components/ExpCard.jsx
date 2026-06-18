import { deleteExpense, updateExpense } from "../services/expAPI";
import { useState, useEffect } from "react";

export default function ExpenseCard({ expense, fetchExpenses }) {

    const [isEditing, setIsEditing] = useState(false)
    const [editedData, setEditedData] = useState({
        title: expense?.title ,
        amount: expense?.amount,
        category: expense?.category
    })

    useEffect(() => {
        if (expense) {
            setEditedData({
                title: expense.title,
                amount: expense.amount,
                category: expense.category,
            });
        }
    }, [expense]);


    const handleDelete = async () => {
        await deleteExpense(expense._id)

        await fetchExpenses()
    }

    const handleEdit = async () => {
        await updateExpense(expense._id, editedData)

        setIsEditing(false)

        await fetchExpenses()
    }

    const handleChange = (e) => {
        setEditedData({
            ...editedData, [e.target.name]: e.target.value
        })
    }


     if (!expense) {
        return <p></p>
    }

    return (
        <>
            {
                isEditing ? (
                    <div className="flex justify-center items-center">
                    <div className="flex m-5 p-5 text-gray-300 justify-center items-center  border-blue-300/30 border bg-blue-300/10 rounded-md">

                        <input className="uppercase text-lg outline-none bg-blue-400/20 rounded-md p-2" type="text" placeholder="New Title" name="title" onChange={handleChange} value={editedData.title} />
                        <input className="rounded-md outline-none bg-blue-400/20 p-2 w-28 mx-5 font-mono font-bold" type="number" placeholder="New Amount" name="amount" onChange={handleChange} value={editedData.amount} />

                        <select className="outline-none bg-blue-400/20 p-2 rounded-md text-gray-300" name="category" value={editedData.category} onChange={handleChange}>
                            <option value="">Select category</option>

                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Shopping">Shopping</option>
                            <option value="EMIs">EMIs</option>
                            <option value="Others">Others</option>
                        </select>

                        <button className="border border-blue-500/30 rounded-xl p-2 mr-2 ml-10  bg-blue-500/10 cursor-pointer hover:border-blue-500/50 hover:bg-blue-500 px-5 uppercase hover:text-gray-200" onClick={handleEdit}>Save</button>
                    </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                    <div className="w-1/2 flex justify-between text-gray-400 items-center m-2 border-blue-300/30 border rounded-md bg-blue-300/10 p-5">
                        <h1 className="uppercase mr-4 text-lg">{expense.title}</h1>
                        <h2 className=" font-mono font-bold mx-3">{expense.amount}</h2>
                        <h2 className="mr-5">{expense.category}</h2>

                        <div>
                            <button className="border border-blue-500/30 rounded-xl p-2 mr-2 ml-10  bg-blue-500/10 cursor-pointer hover:border-blue-500/50 hover:text-gray-200 hover:bg-blue-500/20" onClick={() => setIsEditing(true)}>Edit</button>

                            <button className="border border-blue-500/30 rounded-xl p-2 mr-2 bg-blue-500/10 cursor-pointer hover:border-blue-500/50 hover:text-gray-200 hover:bg-blue-500/20" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                    </div>
                )
            }
        </>
    )
}