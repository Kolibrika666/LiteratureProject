import React, { useEffect, useState } from "react";
import { Accordion, Button, CloseButton } from "react-bootstrap";
import { useAppSelector } from "../../../store";
import { formSelectors } from "../Forms/slice/formSlice";
import { ResultItem } from "./ResultItem";
import s from "./Result.module.scss"

export const Result = () => {

  const literList = useAppSelector(formSelectors.literList);
  const isNull = useAppSelector(formSelectors.listisNull);


  return (
    <div className={s.result}>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Ваш список литературы
          <button className={s.removeButton}></button>
          <button className={s.copyButton}></button>
          </Accordion.Header>
        <Accordion.Body>
          {
          (isNull) ? 
          literList.slice(0,1).map((e)=>
          <p key={e.id}>{e.str}</p>
          ) :
          literList.slice(1).map((e)=>
          <ResultItem id={e.id} str={e.str}/>
          )
        }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};
