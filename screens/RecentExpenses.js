import {Text} from "react-native";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";


function RecentExpenses() {
    return (
        <>
            <ExpensesOutput expensesPeriod="Last 7 Days"/>

        </>

    )
}

export default RecentExpenses;