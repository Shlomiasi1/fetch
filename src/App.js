import React, { useEffect, useState } from "react"
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAdd() {
    setUsers([...users,name])
 }

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App" id="App">
          <label for="name">User Name</label><br/>
          <input name="name" type="text" value={name} onChange={handleChange}/><br/>

          <button type="button" onClick={handleAdd} >Add User</button><br/>

      {users.length > 0 && (
 <table>
 <thead>
     <tr>
         <th>Name</th>
         <th>Email</th>
     </tr>
 </thead>
 <tbody>
     {users.map((row) => {
         return (
             <tr>
                 <td key = {row.name}>{row.name}</td>
                 <td key = {row.name}>{row.email}</td>
             </tr>
         )
     })}
 </tbody>
</table>
      )}
    </div>
  )
}

export default App

