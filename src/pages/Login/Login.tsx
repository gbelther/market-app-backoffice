import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createSession } from "../../store/user/thunks/createSession";
import { IInputFeedback } from "../../interfaces/IInputFeedback";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";

import "./styles.scss";

interface IFormLogin {
  email: string;
  password: string;
}

const loginFormSchema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = async ({ email, password }: IFormLogin) => {
    dispatch(
      createSession({
        email,
        password,
      })
    );
  };

  const feedbackEmail = useMemo(() => {
    if (errors.email) {
      return {
        type: "error",
        message: errors.email.message ?? "",
      } as IInputFeedback;
    }
  }, [errors.email]);

  const feedbackPassword = useMemo(() => {
    if (errors.password) {
      return {
        type: "error",
        message: errors.password.message ?? "",
      } as IInputFeedback;
    }
  }, [errors.password]);

  return (
    <section id="pg-login" className="f-centered">
      <form
        className="pg-login__form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <p className="pg-login__form--title">Faça seu login</p>

        <div className="d-flex f-col gap-4">
          <InputText
            label="E-mail"
            inputProps={{
              type: "email",
              ...register("email"),
            }}
            feedback={feedbackEmail}
          />
          <InputText
            label="Senha"
            inputProps={{
              type: "password",
              ...register("password"),
            }}
            feedback={feedbackPassword}
          />
        </div>
        <div>
          <p className="message-error-sm">{user.error?.message}</p>
        </div>
        <div className="pg-login__form__buttons-wrapper">
          <div className="flex-1">
            <Button
              bgColor="main-extra-dark"
              color="light-01"
              loading={user.loading}
              buttonProps={{
                className: "w-100",
              }}
            >
              Login
            </Button>
          </div>
          <div>
            <Button
              bgColor="light-02"
              buttonProps={{
                type: "submit",
              }}
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
