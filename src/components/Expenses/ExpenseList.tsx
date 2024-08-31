import {v4 as uuidv4} from "uuid";
import {ExpenseRow} from "./ExpenseRow.tsx";
import {Expenses} from "@/types/expense.types.ts";
import {Table} from "@/components";

export const ExpenseList = ({expenses, handleDelete}: Expenses) => {
    // TODO: Add accessibility to stay in focus field while delete expense
    return (<Table>
        {expenses.map((expense) => (
            <ExpenseRow state={expense} key={uuidv4()} handleDelete={handleDelete}/>
        ))}
    </Table>)
}