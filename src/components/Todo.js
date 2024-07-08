import React, { useState } from 'react'

const Todo = ({task, onDelete, onUpdate}) => {
  const [editedTask, setEditetTask] = useState(task.task);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  }

  const handleChange = (e) =>{
    setEditetTask(e.target.value);
  }

  return (
    <div className='Tod'>
      {isEditing ?(
        <div className='input-group d-flex justify-content-center'>
          <input
              type='test'
              value={editedTask}
              onChange={handleChange}
              className='todo-input input'
          />
          <div className='input-group-append'>
            <button type='submit' onClick={handleSave} className='btn btn-secondary rounded-0'>
              save Todo
            </button>
          </div>
        </div>
      ) : (
        <>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card h-75'>
              <div className='card-body d-flex justify-content-between'>
                <p className='card-text'>{task.task}</p>
                <div>
                  <button type='button' onClick={handleEdit} className='edit-btn'>Edit</button>
                  <button type='button' onClick={onDelete} className='todo-btn'>delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default Todo
