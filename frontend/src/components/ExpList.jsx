import { useState, useEffect } from 'react'
import { getExpenses } from '../services/expAPI';
import ExpenseCard from './ExpCard';

export default function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const res = await getExpenses();
            setExpenses(res.data.data);
        } catch (err) {
            console.error("Failed to fetch expenses:", err);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>

            {expenses.map(exp => (
                <ExpenseCard
                    key={exp._id}
                    expense={exp}
                    fetchExpenses={fetchExpenses}

                />
            ))}
        </div>
    );
}