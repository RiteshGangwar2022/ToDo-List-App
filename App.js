import react from "react";
/*import Midlist from "./Midlist";
import Digitalclock from "./Digitalclock";
import Todolist from "./Todolist";*/
import "./App.css";
import TodoList from './components/TodoList';


const App=()=>{

  return(
         <>
         {/*<Midlist/>
          <Digitalclock/>
          <Todolist/>*/}
             <div className='todo-app'>
                  <TodoList />
             </div>
         </>

  )
};
export default App;