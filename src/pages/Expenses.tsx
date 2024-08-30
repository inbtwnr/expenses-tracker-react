import {EmptyList} from "../components/shared/EmptyList.tsx";
import {ExpenseList} from "../components/Expenses/ExpenseList.tsx";
import {useExpenses} from "../hooks/useExpenses.ts";
import {ExpensesForm} from "../components/Expenses/ExpensesForm.tsx";
import {useExpensesSearch} from "../hooks/useExpensesSearch.ts";
import {ExpensesSearch} from "../components/Expenses/ExpensesSearch.tsx";

export const ExpensesPage = () => {
    const {handleSubmit: handleAppend, onSubmit, register: registerAppend, handleDelete, displayExpenses, onChangeExpenseList} = useExpenses();
    const {handleSubmit: handleSearch, register: registerSearch } = useExpensesSearch();

    return <section>
        <ExpensesSearch handleSubmit={handleSearch} register={registerSearch} onChangeExpenseList={onChangeExpenseList} />
        <ExpensesForm onSubmit={onSubmit} handleSubmit={handleAppend} register={registerAppend} />
        {displayExpenses.length === 0 ? <EmptyList>There is no Expenses</EmptyList> : <ExpenseList expenses={displayExpenses} handleDelete={handleDelete} />}
    </section>
}