
import React, { useContext } from "react";
import { App } from "../App";

export default function Content() {
  const { app } = useContext(App);

  return (
    <div>
      <h1>Description</h1>
      <p>{app.description}</p>
    </div>
  );
}