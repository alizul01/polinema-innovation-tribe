import type { InputType } from "~/types/Input/InputType";

const AuthLogin: InputType[] = [
  {
    id: "email",
    type: "email",
    label: "Email",
    placeholder: "email@example.com",
    registerOption: {
      required: true,
    },
  },
  {
    id: "password",
    type: "password",
    label: "Password",
    placeholder: "Password",
  },
];

export default AuthLogin;
