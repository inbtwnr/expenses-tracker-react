import {Control, SubmitErrorHandler, SubmitHandler, UseFormRegister} from "react-hook-form";
import * as React from "react";

interface Expenses {
    expenses: Expense[];
    handleDelete: (id: string) => void;
}

type Expense = {
    name: string;
    amount: number;
    id: string;
    createdAt: Date;
}

interface ExpenseCardProps {
    state: Expense
    handleDelete: (id: string) => void
}

type ExpensesFormProps = {
    handleSubmit: (onValid: SubmitHandler<Expense>, onInvalid?: SubmitErrorHandler<Expense>) => (e?: React.BaseSyntheticEvent) => Promise<void>
    register: UseFormRegister<Expense>
    onSubmit: SubmitHandler<Expense>
    control: Control<Expense, any>
    className?: string
}

type ExpensesSearchProps = {
    className?: string
    handleSubmit: (onValid: SubmitHandler<Expense>, onInvalid?: SubmitErrorHandler<Expense>) => (e?: React.BaseSyntheticEvent) => Promise<void>
    register: UseFormRegister<Expense>
    onChangeExpenseList: (data: Expense) => void
}

export type { Expenses, ExpenseCardProps, Expense, ExpensesFormProps, ExpensesSearchProps }