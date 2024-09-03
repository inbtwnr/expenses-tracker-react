import { Button, Input, SimpleCalendar } from "@/components";
import { ExpensesFormProps } from "@/types/expense.types.ts";
import { Calendar } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form/Form.tsx";
import { cn } from "@/lib/utils";

export const ExpensesForm = ({
  form,
  className,
  onSubmit,
}: ExpensesFormProps) => {
  function handleChangeAmount(value: string, callback: (num: number) => void) {
    const amount = Number(value);
    if (isNaN(amount)) return;
    callback(amount);
  }

  return (
    <Form {...form}>
      <form
        className={cn(className)}
        onSubmit={form.handleSubmit(
          (event) => {
            onSubmit(event);
            form.reset()
          },
          (e) => {
            console.log(e);
          },
        )}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of expense</FormLabel>
              <FormControl>
                <Input placeholder="Enter a name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
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
        <FormField
          control={form.control}
          name={"createdAt"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>When?</FormLabel>
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
        <Button type="submit">Add expense</Button>
      </form>
    </Form>
  );
};
