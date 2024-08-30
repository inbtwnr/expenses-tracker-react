import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {v4 as uuidv4} from "uuid";
import {Expense} from "../types/expense.types.ts";

export const useExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [displayExpenses, setDisplayExpenses] = useState<Expense[]>(expenses);

    useEffect(() => {
        setDisplayExpenses(expenses);
    }, [
        expenses
    ])

    const { register, handleSubmit } = useForm<Expense>()

    const NO_NAME = 'No name';
    const NO_AMOUNT = 0;

    const onSubmit: SubmitHandler<Expense> = (data) => {
        const expense: Expense = {
            name: data.name.length > 0 ? data.name : NO_NAME,
            amount: data.amount > 0 ? data.amount : NO_AMOUNT,
            id: uuidv4(),
            createdAt: new Date().toISOString(),
        }
        setExpenses(prevState => {
            return [expense, ...prevState]
        })
    }

    const handleFilter = (data: Expense) => {
        const {name} = data
        console.log(data)
        console.log(expenses.filter(expense => expense.name.toLowerCase().includes(name.toLowerCase())))
        return expenses.filter(expense => expense.name.toLowerCase().includes(name.toLowerCase()));
    }

    const handleDelete = (id: string) => {
        setExpenses(prevState => prevState.filter(x => x.id !== id))
    }

    const onChangeExpenseList = (data: Expense) => {
        setDisplayExpenses(handleFilter(data))
    }

    return {
        register,
        handleSubmit,
        handleDelete,
        onSubmit,
        handleFilter,
        displayExpenses,
        onChangeExpenseList
    }
}