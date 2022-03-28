import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expence.css";
import ExpensesFilter from "./ExpenceFilter";

function Expenses(props) {
  const [expenceFiler, setExpenceFilter] = useState("2020");
  const onChangeFilter = (event) => {
    setExpenceFilter(event);
    console.log(event);
  };

  const filterdate = props.item.filter((expence) => {
    return expence.date.getFullYear().toString() === expenceFiler;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={expenceFiler}
        onExpenceFilter={onChangeFilter}
      />
      <ExpensesList item={filterdate} />
    </div>
  );
}

export default Expenses;
