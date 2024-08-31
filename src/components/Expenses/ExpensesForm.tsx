import { Button, Input, SimpleCalendar } from "@/components";
import { ExpensesFormProps } from "@/types/expense.types.ts";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

export const ExpensesForm = ({
  handleSubmit,
  onSubmit,
  register,
  control,
  className,
}: ExpensesFormProps) => {
  return (
    <form className={cn(className)} onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" {...register("name")} placeholder={"Type a name"} />
      <Input
        type="number"
        placeholder={"Type an amount"}
        {...register("amount")}
      />
      <Controller
        name={"createdAt"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <SimpleCalendar
            label={
              <span className={"gap-x-2 items-center flex"}>
                <Calendar size={16} className={"text-slate-500"} />
                Enter date
              </span>
            }
            onSelect={onChange} // send value to hook form
            mode="single"
            selected={value}
          />
        )}
      />
      <Button type="submit">Add expense</Button>
    </form>
  );
};
