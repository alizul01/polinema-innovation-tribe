import type { ReactElement } from "react";
import { FaBrain, FaLightbulb, FaTrophy } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { CgIfDesign } from "react-icons/cg";
import { TiGroup } from "react-icons/ti";
import { MdCreate } from "react-icons/md";

export type StepColor = {
  bg: string;
  text: string;
};

export type StepData = {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: ReactElement;
};

export type StepListType = {
  title: string;
  color: StepColor;
  step: StepData[];
};

export const STEP_LIST: StepListType[] = [
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
        link: "https://www.globalgoals.org/",
        linkText: "Learn About SDGs",
        icon: <FaLightbulb />,
      },
      {
        title: "Brainstorm Ideas",
        description:
          "Buat ide-ide yang mungkin bisa menjadi solusi dari masalah yang ada, ide-ide ini bisa berupa produk, layanan, atau aplikasi.",
        link: "https://www.youtube.com/watch?v=bEusrD8g-dM",
        linkText: "Learn About Brainstorming",
        icon: <FaBrain />,
      },
      {
        title: "Create Proposal",
        description:
          "Buat proposal yang menjelaskan ide-ide yang telah dibuat, proposal ini akan menjadi dasar untuk membuat inovasimu",
        link: "https://www.youtube.com/watch?v=k2jfC2TC3Dk",
        linkText: "Learn About Proposal",
        icon: <HiDocumentText />,
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
        link: "https://www.youtube.com/watch?v=2z42_jnFxn8",
        linkText: "Learn About Design Thinking",
        icon: <CgIfDesign />,
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
        link: "/ideas/create",
        linkText: "Upload Your Idea",
        icon: <MdCreate />,
      },
      {
        title: "Find Teammates",
        description:
          "Temukan teman-teman yang memiliki kemampuan yang sama dengan kamu, dan dapat membantu kamu dalam membangun inovasimu.",
        link: "/ideas",
        linkText: "Find Teammates",
        icon: <TiGroup />,
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
        description: "Persiapkan dan pelajari buku panduan kompetisi yang diberikan oleh pihak penyelenggara.",
        link: "#",
        linkText: "Coming soon!",
        icon: <CgIfDesign />,
      },
      {
        title: "Search Competitions",
        description: "Temukan kompetisi yang sesuai dengan inovasimu, dan daftarkan dirimu sekarang juga!",
        link: "/competitions",
        linkText: "Search Competitions",
        icon: <FaTrophy />,
      }
    ]
  }
];
