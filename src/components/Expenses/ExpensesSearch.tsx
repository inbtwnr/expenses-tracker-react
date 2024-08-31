import {Input, Button} from "@/components";
import {ExpensesSearchProps} from "@/types/expense.types.ts";
import {cn} from "@/lib/utils"

export const ExpensesSearch = (
    {handleSubmit, register, onChangeExpenseList, className}: ExpensesSearchProps
) => {
    return (
        <form className={cn(className)} onSubmit={handleSubmit(onChangeExpenseList)}>
            <Input placeholder={'Search expense by name'} {...register('name')} />
            <Button type={'submit'}>Search Expenses</Button>
        </form>
    )
}