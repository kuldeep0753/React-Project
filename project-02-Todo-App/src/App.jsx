import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const [listTask, setListTask] = useState([]);
  console.log(listTask);
  const [completedTask, setCompletedTask] = useState({});

  const toggleTask = (index) => {
    setCompletedTask((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  let done = { textDecoration: "line-through" };
  let pending = { textDecoration: "none" };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setListTask([...listTask, inputValue]); //mistake
          // listTask.push(inputValue); //mistake, dierectly updating the value
          setInputValue("");
        }}
      >
        Add
      </button>

      <div className="list-task">
        <ul>
          {listTask.map((data, index) => {
            return (
              <li key={index} style={{ display: "flex" }}>
                <div style={completedTask[index] ? done : pending}>{data}</div>
                <button
                  onClick={() => {
                    setListTask(listTask.filter((ele, i) => i !== index));
                  }}
                >
                  Delete
                </button>
                <input type="checkbox" onChange={() => toggleTask(index)} />

                {/* <button onClick={()=>{

                }}>Complete</button> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
