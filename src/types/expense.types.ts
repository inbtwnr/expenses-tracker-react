import {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegister,
  UseFormReturn,
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
  createdAt: z.date(),
});

type Expense = {
  name: string;
  amount: number;
  id: string;
  createdAt: Date;
};

interface ExpenseCardProps {
  state: Expense;
  handleDelete: (id: string) => void;
}

type ExpensesFormProps = {
  form: UseFormReturn<z.infer<typeof expenseSchema>>;
  className?: string;
  onSubmit: SubmitHandler<z.infer<typeof expenseSchema>>;
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
