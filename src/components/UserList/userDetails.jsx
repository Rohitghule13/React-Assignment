import { React, useEffect, useState } from "react";
import CardTabelForm from "./cardTableForm/card_table_form";

function UserList(props) {
  const st = {
    backgroundColor:'#C69B7B'
  }
  return (
    <section id="projects" style={st} >
      <div className="container">
        <div className="">
          <h1
            className="text-center text-white text-underline"
            style={{ padding: "20px 0 12px 0" }}
          >
          </h1>

          <CardTabelForm />
        </div>
      </div>
    </section>
  );
}

export default UserList;
