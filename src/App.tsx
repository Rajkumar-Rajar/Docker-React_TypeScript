import React, { useState, useEffect } from "react";


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {

  const [table, settable] = useState<object[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => settable(json));
  }, []);

  return (
    <div className="bgcolor">
      <div className="table">
        <table className="table table-hover">
          <thead style={{ backgroundColor: "lightblue" }}>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
            </tr>
          </thead>
          {table.map((e: any, i) => (
            <tbody>
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
            
            </tr>
            </tbody>
          ))}
        </table>
        
      </div>
    </div>
  );
}

export default App;
