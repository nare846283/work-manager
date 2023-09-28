"use client";

import React, { useState } from 'react';
import loginSvg from '@/assets/login.svg';
import Image from 'next/image';

const AddTask = () => {

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    userId: "",
  });

  return (
    <div className='grid grid-cols-12 justify-center py-8 bg-slate-100'>
      <div className=' col-span-6 col-start-4 justify-center p-5 shadow shadow-gray-300 bg-yellow-300 rounded-3xl'>

        <div className=' my-8 flex justify-center '>
          <Image 
            src={loginSvg}
            style={
            {
              width: "50%",
            }
            }
            alt='logiSvg'
          />
        </div>
        <h1 className=' text-red-900 text-3xl'>Add your task here !!</h1>
        <form>
          <div className='mt-4'>
              <label htmlFor="task_title " className=' block text-lg font-medium mb-2 '> Title </label>
              <input 
                type="text" 
                id='task_title' 
                className=' w-full p-3 rounded-full bg-slate-50 focus:ring-red-100 focus:border-0' 
                placeholder='Enter Title Here'
                name='task_title'
                onChange={(event) => {
                  setTask({
                    ...task,
                    title: event.target.value,
                  });
                }}
                value={task.title}
                
              />
          </div>

          <div className='mt-4'>
              <label htmlFor="task_content " className=' block text-lg font-medium mb-2'> Description </label>
              <textarea 
                type="text" 
                id='task_content' 
                className=' w-full p-3 rounded-[25px] bg-slate-50 focus:ring-red-100 focus:border-0' 
                placeholder='Enter Desc Here'
                rows={5}
                name='task_content'
                onChange={(event) => {
                  setTask({
                    ...task,
                    content: event.target.value,
                  });
                }}
                value={task.content}
              />
          </div>

          <div className='my-4'>
              <label htmlFor="task_status " className=' block text-lg font-medium mb-2 '> Status </label>
              <select 
                id="task_status" 
                className=' w-full p-3 rounded-full bg-slate-50 focus:ring-red-100 focus:border-0'
                name='task_status'
                onChange={(event) => {
                  setTask({
                    ...task,
                    status: event.target.value,
                  });
                }}
                value={task.status}
                
                >
                <option value="selected" disabled>------Select-----</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
          </div>

          <div className='my-4 flex gap-3 items-center justify-center'>
              <button className='px-5 py-2 bg-green-500 rounded-lg'>Add Task</button>
              <button className='px-5 py-2 bg-red-500 rounded-lg text-white hover:bg-white hover:text-red-400'>Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask