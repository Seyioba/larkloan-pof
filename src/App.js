import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./common/themesConfig";
import { Register } from "./features/register/Register";
// import { Login } from "./features/login/Login";
import { Login } from "./features/login/LoginB";
import { GetStarted } from "./features/gettingStarted/GettingStarted";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
