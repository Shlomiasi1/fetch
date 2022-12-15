import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

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
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li id = "li" key={user.name}>{user.email}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App

