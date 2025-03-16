import {FieldValues, useForm} from "react-hook-form";
import z from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {categories} from "../Categories.tsx";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be at least 3 characters' })
    .max(50, { message: 'Description should be at most 50 characters' }),
  amount: z
    .number({ invalid_type_error: 'Amount field is required' })
    .min(0.01, { message: 'Amount is required' })
    .max(100_000),
  category: z
    .enum(categories, {
      errorMap: () => ({ message: ('Category is required') })
    })
})

type ExpenseFormData = z.infer<typeof schema>;

export default function ExpenseForm({addExpense}: Props) {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: ExpenseFormData) => {
    addExpense(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input
          {...register('description')}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>
      <div className={"mb-3"}>
        <label htmlFor="category" className="form-label">Category</label>
        <select
          {...register('category')}
          id="category"
          className="form-select"
        >
          <option value=""></option>
          {categories.map(category =>
            <option key={category} value={category}>{category}</option>
          )}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  )
}

interface Props {
  addExpense: (data: FieldValues) => void;
}