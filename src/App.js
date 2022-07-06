import 'reactjs-popup/dist/index.css';
import { useState } from 'react';
import List from './components/List';
import { Modal2 } from './components/Modal2';

function App() {

  const [users, setUsers] = useState([])

  const [show, setShow] = useState(false);

  const handleDelete = (key) => {
    const newUsers = users.filter(user => user.key !== key)
    setUsers(newUsers);
  }

  const handleEdit = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleShowOnClickAdd = () => {
    setShow(true)
  }


  return (
    <div className="p-4 pt-4">
      <nav className='flex justify-between px-4' >
        <h3>Users</h3>
        <button onClick={handleShowOnClickAdd} className="border-2 border-black p-1 rounded px-4 font-bold">Add</button>
        <Modal2 show={show} handleClose={handleClose} users={users} setUsers={setUsers} />
      </nav>
      <div className=' px-24 pt-8'>
        {users.map((user) => (
          <List handleDelete={handleDelete} user={user} key={user.key} handleEdit={handleEdit} setUsers={setUsers} />
        ))}
      </div>
    </div>
  );
}

export default App;
