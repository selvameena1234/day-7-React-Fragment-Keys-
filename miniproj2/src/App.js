import React from "react";

function App() {
  const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Sam", age: 28 },
    { id: 3, name: "Alex", age: 22 },
    { id: 4, name: "David", age: 30 }
  ];

  return (
    <>
      <h2>User Table</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;