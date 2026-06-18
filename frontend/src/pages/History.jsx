import ExpenseList from "../components/ExpList"

export default function History() {
    return (
        <>
        <h1 className="text-white text-center my-10 text-xl font-mono">All Recorded Expenses</h1>
        <div className="w-full h-0.5 mb-8 bg-blue-200"></div>

        <ExpenseList />
        </>
    )
}