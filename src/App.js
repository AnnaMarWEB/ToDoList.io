import { useState } from 'react';
import './App.css';
import Editing from './Edit';
import reactImg from "../src/img/reactImg3.png"
let nextId=0;
function App() {
  const [name,setName]=useState("")
  const [list,setList]=useState([])

  function addTask(){
    setList([
      ...list,{
        id: nextId++,
        name:name,
        done:false
      }
    ])
  }
   
  function onKeyDownHandler(e){
    if(e.key==="Enter" && name.trim() !==""){
        addTask()
    }
  }
   
  function handleDelete(deleteId){
    setList(list.filter(item => 
      item.id !==deleteId
    ))
  }

  function handleChange(nextTodo){
    setList(list.map(item => 
      (item.id===nextTodo.id?{...item, name:nextTodo.name, done:nextTodo.done}:item)
    ))
  }

  return (
    <>
   <section id='toDoBoard'>
    <img src={reactImg} alt='Img' className='tasks-img' />
    <div className='list'>
    <h1>To Do List</h1>
    <input type='search' className='todo' placeholder='Add Task' value={name} onChange={(e) => setName(e.target.value)} onKeyDown={onKeyDownHandler}/>
    <button id='add' onClick={() => {
      if(name.trim() !==""){
        addTask() 
      }
    }}>Add</button>
  <Editing list={list} handleDelete={handleDelete} setList={setList} handleChange={handleChange} />
    </div>
   </section>
   </>
  );
}





export default App;
