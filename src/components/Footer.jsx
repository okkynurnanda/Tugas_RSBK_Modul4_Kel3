import React, { useContext } from "react";
import { App } from "../App";

export default function Footer() {
  const { app } = useContext(App);

  return (
    <div>
      <hr />
      <ul>
        {app.contact.map((list, key) => {
          return (
            <li key={key}>
              <a href={list.url} target="blank">
                {list.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}