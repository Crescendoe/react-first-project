import React from "react";
import "./App.css";

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>;
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
}

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["read book", "cook dinner", "learn React"]} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar />
        <ToDo />
      </header>
    </div>
  );
}

export default Calendar;
