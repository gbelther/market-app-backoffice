import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { IInputFeedback } from "../../interfaces/IInputFeedback";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { UsersService } from "../../services/usersService";
import { ErrorHandling } from "../../errors/errorHandling/ErrorHandling";
import { IError } from "../../errors/IError";

import "./styles.scss";

interface IFormSubscribe {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const loginFormSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

const Subscribe = () => {
  const navigate = useNavigate();

  const [loadingCreateUser, setLoadingCreateUser] = useState(false);
  const [errorCreateUser, setErrorCreateUser] = useState<IError | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSubscribe>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = async ({ name, email, password }: IFormSubscribe) => {
    setLoadingCreateUser(true);

    try {
      await UsersService.createUser({
        name,
        email,
        password,
      });

      handleBackToLoginPage();
    } catch (error) {
      const errorHandling = new ErrorHandling(error);
      setErrorCreateUser(errorHandling.error);
    } finally {
      setLoadingCreateUser(false);
    }
  };

  const handleBackToLoginPage = () => {
    navigate("/login");
  };

  const feedbackName = useMemo(() => {
    if (errors.name) {
      return {
        type: "error",
        message: errors.name.message ?? "",
      } as IInputFeedback;
    }
  }, [errors.name]);

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

  const feedbackPasswordConfirm = useMemo(() => {
    if (errors.passwordConfirm) {
      return {
        type: "error",
        message: errors.passwordConfirm.message ?? "",
      } as IInputFeedback;
    }
  }, [errors.passwordConfirm]);

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
            label="Nome"
            inputProps={{
              type: "text",
              ...register("name"),
            }}
            feedback={feedbackName}
          />
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
          <InputText
            label="Confirmar senha"
            inputProps={{
              type: "password",
              ...register("passwordConfirm"),
            }}
            feedback={feedbackPasswordConfirm}
          />
        </div>
        <div>
          <p className="message-error-sm">{errorCreateUser?.message}</p>
        </div>
        <div className="pg-login__form__buttons-wrapper">
          <div className="flex-1">
            <Button
              bgColor="main-extra-dark"
              color="light-01"
              loading={loadingCreateUser}
              buttonProps={{
                className: "w-100",
              }}
            >
              Cadastrar
            </Button>
          </div>
          <div>
            <Button
              bgColor="light-02"
              buttonProps={{
                type: "submit",
                onClick: handleBackToLoginPage,
              }}
            >
              Voltar
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
