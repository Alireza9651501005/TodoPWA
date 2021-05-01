import React, {useState} from "react";
import TodoList from "./TodoList";
import Form11 from './Form'
import './App.scss'

export const Mycontext = React.createContext()

const MyProvider = (props) => {
  const [mystate, setmystate] = useState({
    name:[],
    values:''
  });
  return (
    <Mycontext.Provider value={[mystate, setmystate]}>
      {props.children}
    </Mycontext.Provider>
  )
}

const App = () => {

  return (
    <MyProvider>
    <div className="App">
      <Form11/>
      <TodoList/>
    </div>
    </MyProvider>
  );
};

export default App;
