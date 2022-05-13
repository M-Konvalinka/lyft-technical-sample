import React from "react";

import { Route, Routes } from "react-router-dom";

import Input from "./components/input";

const App = () => {
  return(
    <div>
      <Routes>
        <Route exact path="/" element={<Input />} />
      </Routes>
    </div>
  )
}

export default App;
