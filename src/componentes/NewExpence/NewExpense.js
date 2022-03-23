import React from "react";
import "./NewExpence.css";
import ExpenceForm from "./ExpenseForm";
function NewExpence(props) {
  const saveingExpence = (enteredExpence) => {
    const data = {
      ...enteredExpence,
      id: Math.random().toString(),
    };
    props.onAddExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenceForm onSaveExpence={saveingExpence} />
    </div>
  );
}

export default NewExpence;
