import {
  Control,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import * as React from "react";
import { z } from "zod";

interface Expenses {
  expenses: Expense[];
  handleDelete: (id: string) => void;
}

const expenseSchema = z.object({
  name: z.string().min(3, {
    message: "Username must be at least 2 characters.",
  }),
  amount: z.number(),
  id: z.string(),
  createdAt: z.date(),
});

type Expense = typeof expenseSchema;

interface ExpenseCardProps {
  state: Expense;
  handleDelete: (id: string) => void;
}

type ExpensesFormProps = {
  handleSubmit: (
    onValid: SubmitHandler<Expense>,
    onInvalid?: SubmitErrorHandler<Expense>,
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<Expense>;
  onSubmit: SubmitHandler<Expense>;
  control: Control<Expense, any>;
  className?: string;
};

type ExpensesSearchProps = {
  className?: string;
  handleSubmit: (
    onValid: SubmitHandler<Expense>,
    onInvalid?: SubmitErrorHandler<Expense>,
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<Expense>;
  onChangeExpenseList: (data: Expense) => void;
};

export { expenseSchema };
export type {
  Expenses,
  ExpenseCardProps,
  Expense,
  ExpensesFormProps,
  ExpensesSearchProps,
};
