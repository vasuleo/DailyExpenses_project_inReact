import React from "react";
import ExpenceItem from "./ExpenceItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expences.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expence) => (
        <ExpenceItem
          key={expence.id}
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
