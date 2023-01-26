import type { InputType } from "~/types/Input/InputType";
import { HiLightBulb as LightBulb } from "react-icons/hi2";
import { HiShieldExclamation } from "react-icons/hi2";
import { HiBeaker } from "react-icons/hi2";
import { HiLockClosed as LockClosed } from "react-icons/hi2";
import { HiPhone as Phone } from "react-icons/hi2";
import { HiEnvelope as Envelope } from "react-icons/hi2";

const inputData: InputType[] = [
  {
    id: "judul_ide",
    label: "Judul Ide",
    icon: <LightBulb />,
    placeholder: "Judul Ide Kamu...",
    type: "text",
  },
  {
    id: "masalah_ide",
    label: "Masalah",
    icon: <HiShieldExclamation />,
    placeholder: "Masalah Yang Kamu Angkat...",
    type: "text",
  },
  {
    id: "masalah_ide_2",
    icon: <HiShieldExclamation />,
    placeholder: "Masalah Yang Kamu Angkat...",
    type: "text",
  },
  {
    id: "masalah_ide_3",
    icon: <HiShieldExclamation />,
    placeholder: "Masalah Yang Kamu Angkat...",
    type: "text",
  },
  {
    id: "solusi_ide",
    icon: <HiBeaker />,
    label: "Solusi",
    placeholder: "Solusi Yang Kamu Tawarkan...",
    type: "text",
  },
  {
    id: "solusi_ide2",
    icon: <HiBeaker />,
    placeholder: "Solusi Yang Kamu Tawarkan...",
    type: "text",
  },
  {
    id: "solusi_ide3",
    icon: <HiBeaker />,
    placeholder: "Solusi Yang Kamu Tawarkan...",
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
