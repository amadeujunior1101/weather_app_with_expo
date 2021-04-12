import React from "react";
import Home from "./src/home";
import 'dotenv/config';

export default function App() {
  console.log(process.env);
  return <Home />;
}
