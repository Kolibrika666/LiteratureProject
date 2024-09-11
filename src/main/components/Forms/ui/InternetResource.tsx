import React from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { InternetType } from "../modal";

const InternetResource = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InternetType>();
  const onSubmit: SubmitHandler<InternetType> = (data) => console.log(data);

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
            pattern: /^[A-ZА-ЯЁ]{1}/,
          })}
        />
        {errors.site && (
          <Form.Text>
            {errors.site.message || "Введите название с большой буквы"}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Название статьи</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("title", {
            required: "Поле обязательно к заполнению",
            pattern: /^[A-ZА-ЯЁ]{1}/,
          })}
        />
        {errors?.title && (
          <Form.Text>
            {errors?.title?.message || "Введите название с большой буквы"}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Фамилия автора</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("lastName", {
            pattern: /^[А-ЯЁ]{1}/,
          })}
        />
        {errors?.lastName && (
          <Form.Text>
            {errors?.lastName?.message || "C большой буквы, на русском языке"}
          </Form.Text>
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
            pattern: /[А-ЯЁ]/,
            maxLength: {
              value: 1,
              message: "Максимум 1 символ",
            },
          })}
        />
        {errors?.lastLetter && (
          <Form.Text>
            {errors?.lastLetter?.message ||
              "Введите одну заглавную русскую букву"}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Адрес сайта</Form.Label>
        <Form.Control
          placeholder="https://example.com"
          {...register("url", {
            required: "Поле обязательно к заполнению",
            pattern:
              /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
          })}
        />
        {errors?.url && (
          <Form.Text>
            {errors?.url?.message || "Правильно скопируйте ссылку на сайт"}
          </Form.Text>
        )}
      </Form.Group>
        <Button variant={!isValid ? "secondary" :  "primary"  } type="submit">Генерировать</Button>
    </Form>
  );
};

export default InternetResource;
