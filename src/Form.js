import React, { useContext } from "react";
import {Mycontext} from "./App";

const Form11 = () => {
  const [mystate, setmystate] = useContext(Mycontext);
  const handleclick = (ee) => {
    ee.preventDefault();
    setmystate({
      ...mystate,
      name: [...mystate.name, mystate.values],
      values: "",
    });
  };
  return (
    <div>
      <form className='form11'>
        <input
          type="text"
          onChange={(e) => setmystate({ ...mystate, values: e.target.value })}
          value={mystate.values}
        />
        <button onClick={handleclick}>Send</button>
      </form>
    </div>
  );
};

export default Form11;
