import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import "./styles.css"

function App(){
  return(
    <div class="container">
      <form>
        <div class="form-group">
          <input type="text" className="input-control" placeholder="Search for books"autoComplete="off"/>
        </div>
        <button type="submit"className="btn btn-danger">Search</button>
      </form>
    </div>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
  rootElement
);
