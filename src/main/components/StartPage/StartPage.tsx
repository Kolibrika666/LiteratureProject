import React from "react";
import s from './StartPage.module.scss'

export const StartPage = () => {
  return (
    <div className = {s.start}>
      <ol>
        <li>Выберите категорию литературы</li>
        <li> Заполните поля формы</li>
        <li>Скопируйте полученную строку</li>
      </ol>
    </div>
  );
};
