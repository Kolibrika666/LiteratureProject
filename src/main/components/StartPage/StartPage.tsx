import React from "react";
import s from './StartPage.module.scss'

export const StartPage = () => {
  return (
    <>
    <h1>Оформите список литературы по ГОСТ!</h1>
    <div className = {s.start}>
      <ol >
        <li>Выберите категорию литературы</li>
        <li> Заполните поля формы</li>
        <li>Скопируйте полученную строку</li>
      </ol>
    </div>
    </>
  );
};
