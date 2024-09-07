import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../models";
import { Button, NavLink } from "react-bootstrap";

export const Nav = () => {
  return (
    <>
      <h3>Категории</h3>
      <div>
        {
          categories.map((e)=> 
          <Link key={e.id} to={e.title}><Button>{e.title}</Button></Link>
          )
        }
      
      </div>
    </>
  );
};
