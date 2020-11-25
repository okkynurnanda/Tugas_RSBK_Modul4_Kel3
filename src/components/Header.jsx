import React, { useContext } from "react";
import { App } from "../App";

export default function Header() {
  const { app } = useContext(App);

  return (
    <div>
      <div>
        <b>{`Login sebagai ${app.username}`}</b>
      </div>
      <hr />
    </div>
  );
}