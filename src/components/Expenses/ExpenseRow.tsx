import { ExpenseCardProps } from "@/types/expense.types.ts";
import { TableCell, TableRow, Button } from "@/components";
import { normalizeDate } from "@/lib/utils/normalizeDate.ts";

export const ExpenseRow = (props: ExpenseCardProps) => {
  const {
    state: { name, amount, id, createdAt: _createdAt },
    handleDelete,
  } = props;

  const createdAt = normalizeDate({
    value: _createdAt,
  });

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{createdAt}</TableCell>
      <TableCell>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </TableCell>
    </TableRow>
  );
};
