import Form from "./components/Form.tsx";
import {useState} from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList.tsx";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm.tsx";

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const expensesFiltered = selectedCategory
    ? expenses.filter(e => e.category === selectedCategory)
    : expenses;

  const handleSubmit = (data: Expense) => {
    const expense = { ...data, id: expenses.length + 1 };

    setExpenses([...expenses, expense]);
  }

  const filterExpenses = (category: string) => {
    setSelectedCategory(category);
  }

  const deleteExepense = (id: number) => {
    setExpenses(expenses.filter(e => e.id !== id));
  }

  return (
    <>
      <div className="mb-5">
        <ExpenseForm addExpense={handleSubmit}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={filterExpenses}/>
      </div>
      <ExpenseList expenses={expensesFiltered} onDelete={deleteExepense}/>
    </>
  );
}