// library
import React, { useEffect, useRef, useState } from "react";
import { CircularProgress, FormGroup } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

// store
import { useTypedSelector } from "../../../../redux/store";
import { login } from "../../../../redux/store/reducers/auth/auth.action";

// validation
import { loginSchema } from "../../../../utils/schema/validation";
// styledComponents
import { StyledNewInput } from "../../../../components/styled-components/StyledInput";
import { ActionsEnum } from "../../../../redux/store/enum";

// style
import {
  FormCheckBox,
  GridBlock,
  Headline,
  InputBox,
  InputHelperText,
  InputUpperLabel,
  ReforgedMainButton,
  StackBlock,
  StyledCheckBox,
} from "./style";

import { $api } from "../../../../api";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth, error, status } = useTypedSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "", // 8747 411 81 59
      password: "", // 12345
    },
    onSubmit: async (values) => {
      // @ts-ignore
      // dispatch(login(values));
      // const result = await $api.post("/auth/login", values);

      setLoading(true);
      // localStorage(setItem("access_token", result.data.token));
    },
    validationSchema: loginSchema,
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  const { username, password } = values;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <GridBlock>
      <StackBlock>
        <Headline>Вход</Headline>
        <form onSubmit={handleSubmit}>
          <>
            <InputBox>
              <InputUpperLabel>Номер телефона</InputUpperLabel>
              <StyledNewInput
                ref={inputRef}
                name="username"
                value={username}
                required
                onChange={handleChange}
                placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
              />
              {errors.username && (
                <InputHelperText>{errors.username}</InputHelperText>
              )}
            </InputBox>
            <InputBox>
              <InputUpperLabel>Пароль</InputUpperLabel>
              <StyledNewInput
                id="my-input"
                aria-describedby="my-helper-text"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Введите пароль"
              />
              {errors.password && (
                <InputHelperText>{errors.password}</InputHelperText>
              )}
            </InputBox>
            <FormCheckBox>
              <FormGroup>
                <StyledCheckBox />
              </FormGroup>
            </FormCheckBox>
            <ReforgedMainButton
              disabled={status === ActionsEnum.LOADING}
              startIcon={
                status === ActionsEnum.LOADING && (
                  <CircularProgress sx={{ color: "#fff" }} />
                )
              }
              type="submit"
            >
              Войти
            </ReforgedMainButton>
          </>
        </form>
      </StackBlock>
    </GridBlock>
  );
};

export default LoginForm;
