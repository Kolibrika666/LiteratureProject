import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../models";
import { Button } from "react-bootstrap";

export const Nav = () => {
  return (
    <>
      <h3>Категории</h3>
      <>
        {categories.map((e) => (
          <Link key={e.id} to={e.title}>
            <Button>{e.title}</Button>
          </Link>
        ))}
      </>
    </>
  );
};
