import React from "react";
import { Accordion, Button, CloseButton, Row } from "react-bootstrap";
import { LiterType } from "../Forms/models";
import s from "./Result.module.scss"
import { useAppDispatch, useAppSelector } from "../../../store";
import { formActions, formReducer, formSelectors } from "../Forms/slice/formSlice";

export const ResultItem = ({ id, str }: LiterType) => {
    const dispatch = useAppDispatch()
    const onReset = formActions.removeLiterItem

  return ( 
    <Accordion.Item eventKey={String(id)} >
      <p>{str}</p>
      <button className={s.removeButton} onClick={() => dispatch(onReset(id))}></button>
      <button className={s.editButton}></button>
      <button className={s.copyButton}></button>
    </Accordion.Item>
  );
};

