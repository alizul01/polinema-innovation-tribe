import type {InputType} from "~/types/Input/InputType";
import LightBulb from "~icons/heroicons/light-bulb-solid";
import HiShieldExclamation from "~icons/heroicons/shield-exclamation-solid";
import HiBeaker from "~icons/heroicons/beaker-solid";
import LockClosed from "~icons/heroicons/lock-closed-solid";
import Phone from "~icons/heroicons/phone-solid";
import Envelope from "~icons/heroicons/envelope-solid";

const inputData: InputType[] = [
  {
    id: 'judul_ide',
    label: 'Judul Ide',
    icon: <LightBulb />,
    placeholder: 'Judul Ide Kamu...',
    type: "text"
  },
  {
    id: 'masalah_ide',
    label: 'Masalah',
    icon: <HiShieldExclamation />,
    placeholder: 'Masalah Yang Kamu Angkat...',
    type: "text"
  },
  {
    id: 'masalah_ide_2',
    icon: <HiShieldExclamation />,
    placeholder: 'Masalah Yang Kamu Angkat...',
    type: "text"
  },
  {
    id: 'masalah_ide_3',
    icon: <HiShieldExclamation />,
    placeholder: 'Masalah Yang Kamu Angkat...',
    type: "text"
  },
  {
    id: 'solusi_ide',
    icon: <HiBeaker />,
    label: 'Solusi',
    placeholder: 'Solusi Yang Kamu Tawarkan...',
    type: "text"
  },
  {
    id: 'solusi_ide2',
    icon: <HiBeaker />,
    placeholder: 'Solusi Yang Kamu Tawarkan...',
    type: "text"
  },
  {
    id: 'solusi_ide3',
    icon: <HiBeaker />,
    placeholder: 'Solusi Yang Kamu Tawarkan...',
    type: "text"
  },
  {
    id: 'deadline',
    label: 'Deadline',
    icon: <LockClosed />,
    placeholder: 'Deadline...',
    type: "date"
  },
  {
    id: 'whatsapp',
    icon: <Phone />,
    label: 'WhatsApp',
    placeholder: '+628123456789',
    type: "text"
  },
  {
    id: 'email',
    icon: <Envelope />,
    label: 'Email',
    placeholder: 'example@gmail.com',
    type: "email"
  },
];

export default inputData