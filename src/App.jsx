import { useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { fetchTodos } from './store/todoSlice';
import TodoList from './components/TodoList';

import './App.css';
import Addtodo from './components/Addtodo';


function App() {
  const {status,error}=useSelector(state=>state.todos)
  const dispatch = useDispatch();

  

  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch])

  return (
    <div className='App'>
      <Addtodo/>
      {status === 'loading' && <h2>LOADING...</h2>}
      {error && <h2>An error occured:{error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
