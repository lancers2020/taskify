import React from 'react'

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAddTodo: () => void,
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// const InputField = ({todo, setTodo}: Props) => {
//   return <div className='input-wrapper'>
//     <input type="text" />
//   </div>
// }
const InputField:React.FC<Props> = ({todo, setTodo, handleAddTodo, handleKeyPress}) => {
  return <div className='input-wrapper'>
    <input onKeyDown={handleKeyPress} id='input' type="text" value={todo} onChange={(e) => {
      setTodo(e.target.value);
    }} />
    <button onClick={handleAddTodo}>add</button>
  </div>
}

export default InputField