import React, { useRef } from 'react'
import "./Modal.css"

export const Modal2 = ({show, handleClose, setUsers, users}) => {
    let usernameRef = useRef()
    let emailRef = useRef()
    let phonenumberRef = useRef()
    let websiteRef = useRef()

    if(!show){return null}

    const saveUsers = () => {
        setUsers([...users, {
            key: phonenumberRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            phoneNumber: phonenumberRef.current.value,
            website: websiteRef.current.value
        }])
    }

    const updateUser = (registeredUser) => {
        registeredUser.username = usernameRef.current.value
        registeredUser.key = phonenumberRef.current.value
        registeredUser.email = emailRef.current.value
        registeredUser.phoneNumber = phonenumberRef.current.value
        registeredUser.website = websiteRef.current.value
    }

    const handleSave = (key) => {
        const registeredUser = users.find(user => user.key === key)
            if(registeredUser){
                updateUser(registeredUser)
                handleClose()
            }else{
                saveUsers()
                handleClose()
            }
    }

  return (
    <div className='modal' >
        <div className="modalContent flex flex-col justify-center items-center rounded pt-4">
        <div className="pt-4 w-5/6 flex flex-col items-center">
            <div className='flex justify-between w-full items-center' >
            <label htmlFor="username">Username</label>
            <input className='w-72 px-2' type="text" name="username" id='username' ref={usernameRef} />
            </div>
            <div className='flex justify-between w-full items-center pt-2' >
            <label htmlFor="Email">Email</label>
            <input className='w-72 px-2' type="text" name="Email" id="email" ref={emailRef} />
            </div>
            <div className='flex justify-between w-full items-center pt-2' >
            <label htmlFor="phoneNumber">Phone number</label>
            <input className='w-72 px-2' type="number" name="phoneNumber" id="phonenumber" ref={phonenumberRef} />
            </div>
            <div className='flex justify-between w-full items-center pt-2' >
            <label htmlFor="website">website</label>
            <input className='w-72 px-2' type="text" name="website" id="website" ref={websiteRef} />
            </div>
        </div>
        <div className='flex w-full justify-evenly p-2 py-4' >
        <button
            onClick={handleClose}
            className="border-2 border-black p-1 rounded px-4 font-bold mt-4 bg-red-400">Close
        </button>
        <button
            className="border-2 border-black p-1 rounded px-4 font-bold mt-4 ml-4 bg-green-400"
            type='submit'
            onClick={() => handleSave(phonenumberRef.current.value)}
            >Save</button>
            </div>
        </div>
    </div>
  )
}
