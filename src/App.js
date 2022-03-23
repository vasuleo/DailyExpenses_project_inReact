import React, { useState } from "react";
import Expence from "./componentes/Expense/Expence";
import NewExpence from "./componentes/NewExpence/NewExpense";

const DUMMYDATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expence, setExpence] = useState(DUMMYDATA);

  const addExpence = (expens) => {
    setExpence((prevsData) => [expens, ...prevsData]);
  };

  return (
    <div>
      <NewExpence onAddExpense={addExpence} />
      <Expence item={expence} />
    </div>
  );
}

export default App;
