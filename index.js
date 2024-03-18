import React from "react";
import  ReactDOM from "react-dom";
import User from "./src/components/User";
import userData from "./src/utils/userData";
import Counter from "./src/components/Counter";
import Form from "./src/components/form";

const AppLayout=()=>{
        return (
          <div className="main">
           {userData.map((user, index) => (
           <User key={index} name={user.name} email={user.email} />
      ))}
      <Counter/>
      <Form/>
          </div>
        );
      };


      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(<AppLayout/>);