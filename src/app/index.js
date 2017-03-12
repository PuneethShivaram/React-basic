import React from "react";
import Home from "./components/Home"
import Header from "./components/Header"
import {render} from "react-dom";

class App extends React.Component {
  render(){
    const user = {
      name:"puneeth",
      hobbies: ["Eating"]
    }
    return (
      <div>
          <Header/>
          <Home name={"puneeth"} age={27} user={user}/>
      </div>
    )
  }
}

render(<App/>,window.document.getElementById('app'))
