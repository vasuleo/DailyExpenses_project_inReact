import React, { useState } from "react";
import "./ExpenceForm.css";

function ExpenceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangersHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput((prestate) => {
    //   return { ...prestate, enteredTitle: event.target.value };
    // });
  };
  const amountChangersHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    // setUserInput((prestate) => {
    //   return { ...prestate, enteredAmount: event.target.value };
    // });
  };
  const dateChangersHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    // setUserInput((prestate) => {
    //   return { ...prestate, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(data);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangersHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangersHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangersHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
}

export default ExpenceForm;