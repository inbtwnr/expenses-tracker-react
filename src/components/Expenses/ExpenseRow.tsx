import {Button} from "../Button/Button.tsx";
import {ExpenseCardProps} from "../../types/expense.types.ts";
import {TableCell, TableRow} from "../Table/Table.tsx";

export const ExpenseRow = (props: ExpenseCardProps) => {
    const {state: {name, amount, id, createdAt: _createdAt}, handleDelete} = props;
    const createdAt = _createdAt?.toISOString();

    return (<TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{createdAt}</TableCell>
        <TableCell>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
        </TableCell>
    </TableRow>)
}