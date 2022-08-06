import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => setToDos([...toDos, {id: Date.now(),text: toDo, status:false}])}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((data) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDos(toDos.filter(obj =>{
                    if(obj.id === data.id){
                      obj.status = e.target.checked 
                    }
                    return obj
                  }))
                }} value={data.status} type="checkbox" name="" id="" />
                <p>{data.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}

        {toDos.map((data)=>{
          if(data.status){
            return (
              <h1>{data.text}</h1>
            )
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
