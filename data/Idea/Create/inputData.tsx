import type { InputType } from "~/types/Input/InputType";
import { HiLightBulb as LightBulb, HiEnvelope as Envelope, HiPhone as Phone, HiLockClosed as LockClosed, HiBeaker, HiShieldExclamation } from "react-icons/hi2";

const inputData: InputType[] = [
  {
    id: "title",
    label: "Title",
    icon: <LightBulb />,
    placeholder: "Idea Title",
    type: "text",
  },
  {
    id: "problem",
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
    id: "description",
    icon: <HiBeaker />,
    label: "Description",
    placeholder: "What is it?",
    type: "text",
    isTextArea: true,
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
