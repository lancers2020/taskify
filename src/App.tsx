import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<{id: Number, text: string, color: string}[]>([]);

  
  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      const randomColor = getRandomColor();
      setTodoList(prev=> [...prev, {id: Date.now(), text: todo, color: randomColor}]);
      setTodo("");
    }else{
      setTodo(''); //try changing this to double quotation marks as in "", you'll see then that it won't work. the input field does not get cleared...
      return;
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo(); // Trigger the button click event
    }
  };


  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField handleAddTodo={handleAddTodo} handleKeyPress={handleKeyPress} todo={todo} setTodo={setTodo}/>
      <div className='todo-items-container'>
        {todoList.map((value, index)=>{
          return <div onClick={()=>{
            setTodoList(prev=>prev.filter(f=> f.id !== value.id));
          }} key={index} style={{boxShadow: `2px 10px ${value.color}`}} className='todo-items'>
            {value.text}
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
