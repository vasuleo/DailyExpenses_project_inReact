import React, { useState } from "react";
import "./NewExpence.css";
import ExpenceForm from "./ExpenseForm";
function NewExpence(props) {
  const [isEdit, setIsEdit] = useState(false);
  const saveingExpence = (enteredExpence) => {
    const data = {
      ...enteredExpence,
      id: Math.random().toString(),
    };
    props.onAddExpense(data);
  };

  const startEdit = () => {
    setIsEdit(true);
  };
  const onCansel = (e) => {
    setIsEdit(e);
  };
  return (
    <div className="new-expense">
      {!isEdit && <button onClick={startEdit}>Add New Expense</button>}

      {isEdit && (
        <ExpenceForm onSaveExpence={saveingExpence} cansel={onCansel} />
      )}
    </div>
  );
}

export default NewExpence;
