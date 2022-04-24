import { React, useEffect, useState } from "react";
import CardTabelForm from "./Form_in_Table/card_table_form";
import "./userDetails.css";
// import "."

function UserList(props) {
  return (
    <section style={{ backgroundColor: "#B4CFB0" }}>
      <div className="container">
        <div className="">
          <h1
            className="text-black text-center"
            style={{ padding: "" }}
          >
            <u>{}</u>
          </h1>

          <CardTabelForm />
        </div>
      </div>
    </section>
  );
}

export default UserList;
