import {Input} from "../Input/Input.tsx";
import {Button} from "../Button/Button.tsx";
import {ExpensesSearchProps} from "../../types/expense.types.ts";

export const ExpensesSearch = (
    {handleSubmit, register, onChangeExpenseList}: ExpensesSearchProps
) => {
    return (
        <form onSubmit={handleSubmit(onChangeExpenseList)}>
            <Input {...register('name')} />
            <Button type={'submit'}>Search Expenses</Button>
        </form>
    )
}