import './App.css';
import getHomePageData from './api/backendService';
import React, { useState } from 'react';
import { Tree } from 'react-tree-graph';

function recursiveTree(data) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.name}>
          {item.name}
          {item.children && recursiveTree(item.children)}
        </li>
      ))}
    </ul>
  );
}
function App() {
  let [msg, setMsg] = useState("No data");

  let promise = getHomePageData();
  promise.then(data => {
    console.log(data.data);
    if (msg === "No data") {
      const info = data.data;
      console.log(info);

      setMsg(info);
    }
  });
  return (
    <div>
      Welcome to frontend using reactjs
      <h2>
        {msg[0].name}
      </h2>
      {msg !== "No data" && recursiveTree(msg)}
      {msg !== "No data" && <Tree
        data={msg[0]}
        height={400}
        width={400} />}

    </div>
  );
}

export default App;
