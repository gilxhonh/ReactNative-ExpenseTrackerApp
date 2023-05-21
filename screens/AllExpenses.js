import {Button, Text} from "react-native";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
    return (
        <>
            <ExpensesOutput expensesPeriod="Total"/>
        </>
    );

}

export default AllExpenses;