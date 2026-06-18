import { useState } from 'react'
import { createExpense } from '../services/expAPI'

export default function ExpenseForm() {

    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        category: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

         try {
            await createExpense(formData);
            alert('Expense Added!');
            setFormData({ title: '', amount: '', category: '' });
        } catch (err) {
            console.error("Failed to add expense:", err);
        }
    }


    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='m-10 text-gray-500 p-5 border-2 border-blue-400/20 bg-blue-400/10'>
                    <div>
                        <h1 className='text-center text-3xl uppercase text-blue-400 font-serif my-5 mb-8 font-semibold'>Add Expense</h1>
                    </div>

                    <div>
                        <form className='flex justify-center items-center' onSubmit={handleSubmit}>

                            <input className='outline-none border-blue-500/20 bg-blue-300/10 p-3 rounded-md text-lg m-2' type="text" name='title' value={formData.title} onChange={handleChange} placeholder='Title' />
                            <input className='outline-none border-blue-500/20 bg-blue-300/10 p-3 rounded-md text-lg m-2' type="number" name='amount' value={formData.amount} onChange={handleChange} placeholder='Amount' />

                            <select className='border-blue-500/20 outline-none bg-blue-300/10 p-3 rounded-md text-lg m-2' name='category' value={formData.category} onChange={handleChange}>
                                <option className="bg-blue-300 text-gray-800" value="">Select category</option>

                                <option className="bg-blue-300 text-gray-800">Food</option>
                                <option className="bg-blue-300 text-gray-800">Travel</option>
                                <option className="bg-blue-300 text-gray-800">Shopping</option>
                                <option className="bg-blue-300 text-gray-800">EMIs</option>
                                <option className="bg-blue-300 text-gray-800">Others</option>

                            </select>

                            <div className='flex justify-center items-center'>
                                <button className='border-blue-600/40 bg-blue-600/30 p-3 rounded-lg hover:border-blue-700/40 hover:bg-blue-700/30 cursor-pointer m-2 text-gray-200' type='submit'>Add Expense</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}