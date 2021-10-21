import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import { useDispatch } from "react-redux";

import FormField from "../../form/formField/FormField";
import Button from "../../form/button/Button";

import { S } from "./SubmitTodo.styles";

import { addTodoAsync } from "../../../features/todoSlice";

var validationSchema = Yup.object().shape({
  name: Yup.string().required("Required Field"),
});

export default function SubmitTodo() {
  const [defaultValues] = useState({ name: "" });
  const [isSubmitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();

  const _onSubmit = (values, resetForm) => {
    const newItem = {
      id: Date.now(),
      completed: false,
      ...values,
    };
    dispatch(addTodoAsync(newItem)).then(() => {
      setSubmitting(false);
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setSubmitting(true);
        _onSubmit(values, resetForm);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        >
          <S.Container>
            <Field
              component={FormField}
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              errors={errors.name}
              touched={touched.name}
              placeholder="Name"
            />
            <Button
              type="submit"
              size="big"
              disabled={isSubmitting}
              onClick={handleSubmit.bind(this)}
              isLoading={isSubmitting}
            >
              Add
            </Button>
          </S.Container>
        </form>
      )}
    </Formik>
  );
}
