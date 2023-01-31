import type { InputType } from "~/types/Input/InputType";
import { HiLightBulb as LightBulb } from "react-icons/hi2";
import { HiShieldExclamation } from "react-icons/hi2";
import { HiBeaker } from "react-icons/hi2";
import { HiLockClosed as LockClosed } from "react-icons/hi2";
import { HiPhone as Phone } from "react-icons/hi2";
import { HiEnvelope as Envelope } from "react-icons/hi2";

const inputData: InputType[] = [
  {
    id: "title",
    label: "Title",
    icon: <LightBulb />,
    placeholder: "Idea Title",
    type: "text",
  },
  {
    id: "prbolem",
    label: "Problem",
    icon: <HiShieldExclamation />,
    placeholder: "What kind of Problem?",
    type: "text",
  },
  {
    id: "solution",
    icon: <HiBeaker />,
    label: "Solution",
    placeholder: "How do you solve it?",
    type: "text",
  },
  {
    id: "deadline",
    label: "Deadline",
    icon: <LockClosed />,
    placeholder: "Deadline...",
    type: "date",
  },
  {
    id: "whatsapp",
    icon: <Phone />,
    label: "WhatsApp",
    placeholder: "+628123456789",
    type: "text",
  },
  {
    id: "email",
    icon: <Envelope />,
    label: "Email",
    placeholder: "example@gmail.com",
    type: "email",
  },
];

export default inputData;
