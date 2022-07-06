import React from 'react'

const List = ({ user, handleDelete, handleEdit }) => {

  return (
    <div className='flex border-b-2 py-3' >
      <div className='w-72' >
        <p className='text-xs'>Username</p>
        <p className='font-medium' >{user.username}</p>
      </div>
      <div className='w-72' >
        <p className='text-xs'>Email</p>
        <p className='font-medium' >{user.email}</p>
      </div>
      <div className='w-72' >
        <p className='text-xs'>Phone number</p>
        <p className='font-medium' >{user.phoneNumber}</p>
      </div>
      <div className='w-72' >
        <p className='text-xs'>Website</p>
        <p className='font-medium' >{user.website}</p>
      </div>
      <button onClick={() => handleDelete(user.key)} className="border-2 border-black p-1 rounded px-4 font-bold bg-red-300" >Delete</button>
      <button onClick={() => handleEdit()} className="border-2 border-black p-1 rounded px-4 font-bold ml-4 bg-green-300" >Edit</button>
    </div>
  )
}

export default List