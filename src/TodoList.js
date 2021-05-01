import React, { useContext } from "react";
import { Mycontext } from "./App";

const TodoList = () => {
  const [mystate, setmystate] = useContext(Mycontext);
  const remove = (e) => {
    setmystate(prev => { return {...prev, name: prev.name.filter(tt => tt !== e)}})
  }
  return (
    <div>
      <ul className="mytodo">
        {mystate.name.map((item1, idx) => {
          return (
            <div className="list-item">
              <input type="checkbox" />
              <button onClick={() => remove(item1)}>X</button>
              <li className="items" key={idx}>
                {item1}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
