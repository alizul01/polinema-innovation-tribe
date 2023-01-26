import type { InputType } from "~/types/Input/InputType";

const AuthRegister: InputType[] = [
  {
    id: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
    width: "1/2",
  },
  {
    id: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Last Name",
    width: "1/2",
  },
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
  {
    id: "confirmPassowrd",
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm Password",
  },
];

export default AuthRegister;
