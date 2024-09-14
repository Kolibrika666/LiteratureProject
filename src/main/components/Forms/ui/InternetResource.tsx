import React from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { InternetType } from "../models";
import { getInternetResourse } from "../hooks/hooks";
import { formActions} from "../slice/formSlice";
import { useAppDispatch} from "../../../../store";

const InternetResource = () => {
  const addList = formActions.addLiterList;
  const setIsNull = formActions.setListIsNan;
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<InternetType>();

  const onSubmit: SubmitHandler<InternetType> = (data) => {
    dispatch(addList(getInternetResourse(data)))
    dispatch(setIsNull(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Интернет-Документ</h3>
      <Form.Group className="mb-3">
        <Form.Label>Название сайта</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("site", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /^[A-ZА-ЯЁ]{1}/,
              message: "Введите название с большой буквы",
            },
            onChange: () => trigger("site"),
          })}
        />
        {errors?.site && <Form.Text>{errors?.site?.message}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Название статьи</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("title", {
            pattern: {
              value: /^[A-ZА-ЯЁ]{1}/,
              message: "Введите название с большой буквы",
            },
            onChange: () => trigger("title"),
          })}
        />
        {errors?.title && <Form.Text>{errors?.title?.message}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Фамилия автора</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("lastName", {
            pattern: {
              value: /^[А-ЯЁ]{1}/,
              message: "C большой буквы, на русском языке",
            },
            onChange: () => trigger("lastName"),
          })}
        />
        {errors?.lastName && (
          <Form.Text> {errors?.lastName?.message}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Первая буква Имени</Form.Label>
        <Form.Control
          type="letter"
          placeholder=""
          {...register("firstLetter", {
            pattern: /[А-ЯЁ]/,
            maxLength: {
              value: 1,
              message: "Максимум 1 символ",
            },
            onChange: () => trigger("firstLetter"),
          })}
        />
        {errors?.firstLetter && (
          <Form.Text>
            {errors?.firstLetter?.message ||
              "Введите одну заглавную русскую букву"}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Первая буква Отчества</Form.Label>
        <Form.Control
          type="letter"
          placeholder=""
          {...register("lastLetter", {
            pattern: {
              value: /[А-ЯЁ]/,
              message: "Введите одну заглавную русскую букву",
            },
            maxLength: {
              value: 1,
              message: "Максимум 1 символ",
            },
            onChange: () => trigger("lastLetter"),
          })}
        />
        {errors?.lastLetter && (
          <Form.Text>{errors?.lastLetter?.message}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Адрес сайта</Form.Label>
        <Form.Control
          placeholder="https://example.com"
          {...register("url", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value:
                /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
              message: "Правильно скопируйте ссылку на сайт",
            },
            onChange: () => trigger("url"),
          })}
        />
        {errors?.url && <Form.Text>{errors?.url?.message}</Form.Text>}
      </Form.Group>
      <Button variant={!isValid ? "secondary" : "primary"} type="submit">
        Генерировать
      </Button>
    </Form>
  );
};

export default InternetResource;
