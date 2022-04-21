import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";

import "./styles.scss";

const Login = () => {
  return (
    <section id="pg-login" className="f-centered">
      <div className="pg-login__form">
        <p className="pg-login__form--title">Faça seu login</p>
        <div className="d-flex f-col gap-4">
          <InputText
            label="E-mail"
            inputProps={{
              type: "email",
            }}
          />
          <InputText
            label="Senha"
            inputProps={{
              type: "password",
            }}
          />
        </div>
        <div className="pg-login__form__buttons-wrapper">
          <div className="flex-1">
            <Button
              bgColor="main-extra-dark"
              color="light-01"
              buttonProps={{
                className: "w-100",
              }}
            >
              Login
            </Button>
          </div>
          <div>
            <Button bgColor="light-02">Cadastre-se</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
