import React, { useState } from 'react'

export default function FormTodo() {
  let [title, setTitle] = useState <string>("Alice"); 

  let handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  let handleAdd = () => {

  }

  return (
    <div>
      <input 
        onChange={handleChangeTitle}
        type="text" 
        className="form-control" 
        placeholder='Add title todo'
        value = {title}
      />
      <button onClick={handleAdd} className='btn btn-danger'>
        Add
      </button>
    </div>
  );
}