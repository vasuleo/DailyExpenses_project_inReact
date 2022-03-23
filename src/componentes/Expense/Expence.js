import React, { useState } from "react";
import ExpnceItem from "./ExpenceItem";
import "./Expence.css";
import ExpensesFilter from "./ExpenceFilter";
function Expenses(props) {
  const [expenceFiler, setExpenceFilter] = useState("2020");
  const onChangeFilter = (event) => {
    setExpenceFilter(event);
    console.log(event);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={expenceFiler}
        onExpenceFilter={onChangeFilter}
      />
      {props.item.map((expence) => (
        <ExpnceItem
          key={expence.id}
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
