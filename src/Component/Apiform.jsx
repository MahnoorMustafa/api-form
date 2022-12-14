
import React, { useState } from "react";

import { PostData } from "./Postdata";

function Apiform() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const submitForm = e => {
e.preventDefault();

PostData(username, password)
.then(result => 
  {
  console.log(result);
});
console.log("username", username);
console.log("password", password);
};
return (


  <div className="search_box">
    <form onSubmit={submitForm}>
      <input
        name="name"
        type="text"
        placeholder="username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        name="password"
        type="password"
        placeholder="search"
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit" value="login" />
    </form>
  </div>

);
}

export default Apiform;



