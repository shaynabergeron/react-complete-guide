import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 204.96, date: new Date(2021, 2, 28)},
    { title: 'Movie', amount: 14.96, date: new Date(2021, 6, 28)},
    { title: 'TV', amount: 567.46, date: new Date(2021, 6, 14)},
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
          </div>
  );
}

export default App;
