import {useForm} from "react-hook-form";
import {Expense} from "../types/expense.types.ts";

export const useExpensesSearch = () => {
    const { handleSubmit, register } = useForm<Expense>()

    return {
        handleSubmit,
        register,
    }
}