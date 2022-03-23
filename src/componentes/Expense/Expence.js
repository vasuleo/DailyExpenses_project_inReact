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
      <ExpnceItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpnceItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpnceItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpnceItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </div>
  );
}

export default Expenses;
