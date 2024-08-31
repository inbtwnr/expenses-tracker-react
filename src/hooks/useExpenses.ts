import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Expense, expenseSchema } from "../types/expense.types.ts";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [displayExpenses, setDisplayExpenses] = useState<Expense[]>(expenses);

  useEffect(() => {
    setDisplayExpenses(expenses);
  }, [expenses]);

  const form = useForm<z.infer<typeof expenseSchema>>({
    resolver: zodResolver(expenseSchema),
  });

  const NO_NAME = "No name";
  const NO_AMOUNT = 0;

  const onSubmit = (data: z.infer<typeof expenseSchema>) => {
    const expense: Expense = {
      name: data.name.length > 3 ? data.name : NO_NAME,
      amount: data.amount > 0 ? data.amount : NO_AMOUNT,
      id: uuidv4(),
      createdAt: data.createdAt ? data.createdAt : new Date(),
    };
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  const handleFilter = (data: Expense) => {
    const { name } = data;
    return expenses.filter((expense) =>
      expense.name.toLowerCase().includes(name.toLowerCase()),
    );
  };

  const handleDelete = (id: string) => {
    setExpenses((prevState) => prevState.filter((x) => x.id !== id));
  };

  const onChangeExpenseList = (data: Expense) => {
    setDisplayExpenses(handleFilter(data));
  };

  return {
    form,
    handleDelete,
    onSubmit,
    handleFilter,
    displayExpenses,
    onChangeExpenseList,
  };
};
