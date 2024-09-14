import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useAppSelector } from "../../../store";
import { formActions, formSelectors } from "../Forms/slice/formSlice";
import { LiterType } from "../Forms/models";

export const Result = () => {

  const literList = useAppSelector(formSelectors.literList);
  const isNull = useAppSelector(formSelectors.listisNull);


  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Ваш список литературы
          </Accordion.Header>
        <Accordion.Body>
          {
          (isNull) ? 
          literList.slice(0,1).map((e)=>
          <p key={e.id}>{e.str}</p>
          ) :
          literList.slice(1).map((e)=>
          <p key={e.id}>{e.str}</p>
          )
        }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
