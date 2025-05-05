import { useState } from "react";

export default function Editing({list, handleDelete, handleChange}){
  return(
    <ul>{list.map(listItem => {

      return ( <li key={listItem.id}><Edit handleDelete={handleDelete} onChange={handleChange} listItem=      {listItem} /></li>    )
      })      
        }
        {list.length > 0 && list.every(item => item.done) && (
          <p className="all-done-message">Good job! <br></br> All tasks are done!</p>
        )}
    </ul>
  )
}
    
    
    function Edit({listItem, onChange, handleDelete}){
      const [isEditing,setIsEditing]=useState(false)
    
      let editText;
      if(isEditing){
        editText=(
            <>
                <input type="search" value={listItem.name} className="change-inout" onChange={e => {
                    onChange({
                        ...listItem,
                        name:e.target.value
                    })
                }}
                />
              <button onClick={() => setIsEditing(false)} className="save"><i className="fa-solid fa-floppy-disk"></i></button>
            </>
        )
      }else{
        editText=(
            <>
              {listItem.name}
              <button onClick={() => setIsEditing(true)} className="edit"><i className="fa-solid fa-pencil"></i></button>
            </>
        )
        console.log(listItem.name)
      }


      return(
        <label>
            <input type="checkbox" className="checkbox" checked={listItem.done} onChange={e =>
              onChange({
                ...listItem,
                done:e.target.checked
              })
            }  />
            <span className="fake"></span>
            {editText}
            <button onClick={() => handleDelete(listItem.id)} className="delete"><i className="fa-solid fa-trash-can"></i></button>
        </label>
      )
    }