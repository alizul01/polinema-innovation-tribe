import { CgIfDesign as IfIcon } from "react-icons/cg";
import {
  FaLightbulb as LightBulbIcon,
  FaBrain as BrainIcon,
  FaTrophy as TrophyIcon,
} from "react-icons/fa";
import { TiGroup as GroupIcon } from "react-icons/ti";
import { HiDocumentText as DocumentTextIcon } from "react-icons/hi";
import { MdCreate as CreateIcon } from "react-icons/md";
import type { StepItemProps } from "./StepItem";

export const STEP_LIST: StepItemProps[] = [
  {
    title: "Create Idea",
    color: {
      bg: "bg-purple-600 hover:bg-purple-700",
      text: "text-purple-200",
    },
    step: [
      {
        title: "Research Problems",
        description:
          "Lakukan penelitian terhadap masalah yang ada, kami sangat menyarankan untuk memulai dengan permasalahan SDGs.",
        link: {
          href: "https://www.globalgoals.org/",
          text: "Learn About SDGs",
        },
        icon: <LightBulbIcon />,
      },
      {
        title: "Brainstorm Ideas",
        description:
          "Buat ide-ide yang mungkin bisa menjadi solusi dari masalah yang ada, ide-ide ini bisa berupa produk, layanan, atau aplikasi.",
        link: {
          href: "https://www.youtube.com/watch?v=bEusrD8g-dM",
          text: "Learn About Brainstorming",
        },
        icon: <BrainIcon />,
      },
      {
        title: "Create Proposal",
        description:
          "Buat proposal yang menjelaskan ide-ide yang telah dibuat, proposal ini akan menjadi dasar untuk membuat inovasimu",
        link: {
          href: "https://www.youtube.com/watch?v=k2jfC2TC3Dk",
          text: "Learn About Proposal",
        },
        icon: <DocumentTextIcon />,
      },
    ],
  },
  {
    title: "Build Prototype",
    color: {
      bg: "bg-blue-600 hover:bg-blue-700",
      text: "text-blue-200",
    },
    step: [
      {
        title: "Learn About Design Thinking",
        description:
          "Pelajari tentang Design Thinking, sebuah metode yang dapat membantu kamu dalam membangun inovasi.",
        link: {
          href: "https://www.youtube.com/watch?v=2z42_jnFxn8",
          text: "Learn About Design Thinking",
        },
        icon: <IfIcon />,
      },
    ],
  },
  {
    title: "Look for Team",
    color: {
      bg: "bg-green-600 hover:bg-green-700",
      text: "text-green-200",
    },
    step: [
      {
        title: "Upload Your Idea",
        description:
          "Upload ide-ide yang telah kamu buat, dan dapatkan feedback dari orang-orang yang berpengalaman.",
        link: {
          href: "/ideas/create",
          text: "Upload Your Idea",
        },
        icon: <CreateIcon />,
      },
      {
        title: "Find Teammates",
        description:
          "Temukan teman-teman yang memiliki kemampuan yang sama dengan kamu, dan dapat membantu kamu dalam membangun inovasimu.",
        link: {
          href: "/ideas",
          text: "Find Teammates",
        },
        icon: <GroupIcon />,
      },
    ],
  },
  {
    title: "Get Ready for Competitions",
    color: {
      bg: "bg-red-600 hover:bg-red-700",
      text: "text-red-200",
    },
    step: [
      {
        title: "Learn About Competitions",
        description:
          "Persiapkan dan pelajari buku panduan kompetisi yang diberikan oleh pihak penyelenggara.",
        link: {
          href: "#",
          text: "Coming soon!",
        },
        icon: <IfIcon />,
      },
      {
        title: "Search Competitions",
        description:
          "Temukan kompetisi yang sesuai dengan inovasimu, dan daftarkan dirimu sekarang juga!",
        link: {
          href: "/competitions",
          text: "Search Competitions",
        },
        icon: <TrophyIcon />,
      },
    ],
  },
];
