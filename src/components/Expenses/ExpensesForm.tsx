import {Button} from "../Button/Button.tsx";
import {Input} from "../Input/Input.tsx";
import {ExpensesFormProps} from "../../types/expense.types.ts";

export const ExpensesForm = ({handleSubmit, onSubmit, register}: ExpensesFormProps) => {
    return (
        <form className={'flex gap-2'} onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" {...register("name")} />
            <Input type="number" {...register("amount")} />
            <Button type="submit">Add expense</Button>
        </form>
    )
}