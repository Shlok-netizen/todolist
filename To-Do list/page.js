"use client"/*always tell use client/server if you can use useState*/ 
import React, { useState } from 'react'

const page = () =>{
    const[title,settitle] = useState([])
    const[desc,setdesc] = useState([])
    const[mainTask,setMainTask] =useState([])

    const submitHandeler = (e) => {  
 /* In form after btn click our data were delete
  that why we make sumbitHandler it stop page reloading */
        e.preventDefault();
        setMainTask([...mainTask, { title, desc }]); /*Spread operator->old task store */
        settitle(" ");/*settitle become empty after Add Task */
        setdesc(" ");
        console.log(mainTask)
    };

    const deleteHandler = (i) =>{  /*i->which index you want to delete */
        let copytask = [...mainTask] /*copy all previous task */
        copytask.splice(i,1)
        setMainTask(copytask)
    }

    let renderTask = <h2>No Task Available</h2>;

    if(mainTask.length>0){
        renderTask = mainTask.map((t,i)=>{  /*t->title pass through mainTask i->index*/
            return (
            <li key={i} className='flex items-center justify-between mb-5'>

                <div className='flex items-center justify-between mb-5 w-2/3'>

                   <h5 className='text-2xl font-semibold'>{t.title}</h5>
                   <h6 className='text-lg font-medium'>{t.desc}</h6>

                </div>

                <button 
                 onClick={()=>{
                    deleteHandler(i)
                 }}
                 className='bg-red-400 text-white px-4 py-2 rounded
                 font-bold'>Delete</button>

            </li>
            );
        });
    
    }
    return(
        <>
        <h1 className='bg-black text-white p-5 text-5xl font-bold 
        text-center'>Shlok Todo List</h1>
        <form onSubmit={submitHandeler}>
 
            <input type='text' className='text-2xl border-zinc-800
            border-2 m-5 px-4 py-2'
            placeholder='Enter Title here...'
            value={title}
            onChange ={(e)=>{
                settitle(e.target.value)
            }}
             />

             <input type='text' className='text-2xl border-zinc-800
            border-2 m-5 px-4 py-2'
            placeholder='Enter Description here...'
            value={desc}
            onChange={(e)=>{
                setdesc(e.target.value)
            }}  
             />

             <button className='rounded px-4 py-3 m-5 font-bold bg-black text-white text-2xl'>Add task</button>

        </form>
        <hr />
        <div className='p-8 bg-slate-200'>
            <ul>
                {renderTask}
            </ul>
        </div>
        </>
    )
}
export default page