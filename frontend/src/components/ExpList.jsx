import { useState, useEffect } from 'react'
import ExpenseCard from './ExpCard';

export default function ExpenseList({expenses, fetchExpenses}) {
    

   

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