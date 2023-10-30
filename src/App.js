import FormInput from "./components/FormInput";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;