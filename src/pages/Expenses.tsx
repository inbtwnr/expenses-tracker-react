import { EmptyList } from "../components/shared/EmptyList.tsx";
import { ExpenseList } from "../components/Expenses/ExpenseList.tsx";
import { useExpenses } from "../hooks/useExpenses.ts";
import { ExpensesForm } from "../components/Expenses/ExpensesForm.tsx";
import { useExpensesSearch } from "../hooks/useExpensesSearch.ts";
import { ExpensesSearch } from "../components/Expenses/ExpensesSearch.tsx";

export const ExpensesPage = () => {
  const {
    handleSubmit: handleAppend,
    onSubmit,
    register: registerAppend,
    handleDelete,
    displayExpenses,
    control,
    onChangeExpenseList,
  } = useExpenses();
  const { handleSubmit: handleSearch, register: registerSearch } =
    useExpensesSearch();

  return (
    <section className={"space-y-2 max-w-6xl mx-auto pt-12"}>
      <h1 className={"font-bold text-xl"}>Expenses List</h1>
      <ExpensesSearch
        className={"flex gap-2"}
        handleSubmit={handleSearch}
        register={registerSearch}
        onChangeExpenseList={onChangeExpenseList}
      />
      <ExpensesForm
        className={"flex gap-2"}
        control={control}
        onSubmit={onSubmit}
        handleSubmit={handleAppend}
        register={registerAppend}
      />
      {displayExpenses.length === 0 ? (
        <EmptyList>There is no Expenses</EmptyList>
      ) : (
        <ExpenseList expenses={displayExpenses} handleDelete={handleDelete} />
      )}
    </section>
  );
};
