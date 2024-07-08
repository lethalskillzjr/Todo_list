import React, {useState} from 'react'

const Todoform = ({addTodo}) => {

  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    if(!value.trim()) return;
    addTodo({
       task: value, 
       completed: false, 
       isEditing: false 
    });
    setValue("")
  }
  
  return (
    <form className='' onSubmit={handleSubmit}>
        <div className='input-group d-flex justify-content-center'>
          <input type='text' className='todo-input input' value={value} 
          placeholder='What is the task today' onChange={(e) => setValue(e.target.value)}/>
          <div className='input-group-append'>
            <button type='submit' className='btn btn-secondary rounded-0'>Add Todo</button>
          </div>
        </div>
    </form>
  )
}

export default Todoform
