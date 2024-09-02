import { ExpenseCardProps, expenseSchema } from "@/types/expense.types.ts";
import {
  TableCell,
  TableRow,
  Button,
  Input,
  SimpleCalendar,
} from "@/components";
import { normalizeDate } from "@/lib/utils/normalizeDate.ts";
import { Form, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/Form/Form.tsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "lucide-react";

export const ExpenseRow = (props: ExpenseCardProps) => {
  const {
    state,
    handleDelete,
  } = props;

  const form = useForm<z.infer<typeof expenseSchema>>({
    resolver: zodResolver(expenseSchema),
    defaultValues: state,
  });

  function handleChangeAmount(value: string, callback: (num: number) => void) {
    const amount = Number(value);
    if (isNaN(amount)) return;
    callback(amount);
  }

  return (
    <Form {...form}>
      <form>
        {<TableRow>
          <TableCell>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
          <TableCell>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Amount"
                      name={field.name}
                      value={field.value}
                      onChange={(event) =>
                        handleChangeAmount(event.target.value, field.onChange)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
          <TableCell>
            <FormField
              control={form.control}
              name={"createdAt"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SimpleCalendar
                      label={
                        <span className={"gap-x-2 items-center flex"}>
                          <Calendar size={16} className={"text-slate-500"} />
                          Enter date
                        </span>
                      }
                      selected={field.value}
                      onSelect={field.onChange}
                      mode="single"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
          <TableCell>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
          </TableCell>
        </TableRow>
}      </form>
    </Form>
  );
};
