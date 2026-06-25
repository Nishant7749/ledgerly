import ExpenseCard from "../components/ExpCard";
import ExpenseForm from "../components/ExpForm";
import Budget from "../components/Budget";

export default function Expense() {

    return (
        <>
        <div className="flex items-center justify-center flex-col">
           <Budget/>
           <div className="h-0.5 w-7/8 flex items-center justify-center shadow rounded-full shadow-blue-300 bg-blue-300 my-6"></div>
            <ExpenseForm />
            <ExpenseCard />
            </div>
        </>
    )

}