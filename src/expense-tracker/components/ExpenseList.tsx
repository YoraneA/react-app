import {Expense} from "../../App.tsx";

export default function ExpenseList({expenses, onDelete}: Props)
{
  if (expenses.length === 0) {
    return <p>No expenses</p>
  }

  const items = expenses.map(expense => {
    return (
      <tr key={expense.id}>
        <td>{expense.description}</td>
        <td>${expense.amount}</td>
        <td>{expense.category}</td>
        <td>
          <button
            onClick={() => onDelete(expense.id)}
            className="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    )
  })

  const calcultTotal = () => {
    return expenses
      .reduce((acc, expense) => expense.amount + acc, 0)
      .toFixed(2);
  }

  return (
    <table className="table table-bordered my-3">
      <thead>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${calcultTotal()}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  )
}

interface Expense {
  id: number,
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}