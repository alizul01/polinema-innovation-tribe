import { subDays } from "date-fns";
import type { Idea } from "~/types/Idea/Index/Idea";

export const IDEAS: Idea[] = [
  {
    id: "1",
    updatedAt: subDays(new Date(), 4).getTime(),
    title: "A new way to recycle plastic",
    author: {
      id: 'uid-12',
      name: "Jane Doe",
      username: "janedoe",
      profileImage: "https://source.unsplash.com/1080x1080/?person,face",
      bio: "I am an environmental scientist and avid recycler, always looking for new ways to reduce waste and protect our planet.",
    },
    description:
      "I have an idea for a new method of recycling plastic that is more efficient and cost-effective than current methods. It involves using a special type of enzyme to break down the plastic into its original chemical compounds, which can then be repurposed for a variety of applications.",
    problem:
      "Plastic waste is a huge problem in our society, and it's only getting worse. We need to find a way to reduce the amount of plastic we use and recycle the plastic we do use more efficiently.",
    solution:
      "My proposed solution is to use a special type of enzyme to break down plastic into its original chemical compounds, which can then be repurposed for a variety of applications.",
    tags: [
      {
        name: "Environment",
        slug: "environment",
        colour: "#2ecc71",
      },
      {
        name: "Recycling",
        slug: "recycling",
        colour: "#3498db",
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          id: 'uid-1',
          name: "John Smith",
          username: "johnsmith13",
          profileImage: "https://source.unsplash.com/1080x1080/?person,face",
          bio: "Passionate environmentalist dedicated to sustainability.",
        },
        text: "This is a great idea! I've been looking for ways to reduce plastic waste in my community, and this solution seems like it could really make a difference.",
      },
    ],
    whatsapp: "https://wa.me/",
    email: "mailto:",
  },
  {
    id: "2",
    updatedAt: subDays(new Date(), 3).getTime(),
    title: "A new technology for producing clean energy",
    author: {
      id: 'uid-2',
      name: "John Doe",
      username: "johndoe",
      profileImage: "https://source.unsplash.com/1080x1080/?person,face,white",
      bio: "I am a renewable energy engineer and technology enthusiast, always exploring new ways to create clean, sustainable energy.",
    },
    description:
      "I have developed a new technology for producing clean energy from renewable sources. It combines wind, solar, and hydro power to create a hybrid system that is both efficient and cost-effective.",
    problem:
      "The world is facing a growing energy crisis as demand for energy continues to rise and traditional sources of energy become depleted. We need to find new, sustainable sources of energy to meet this demand.",
    solution:
      "My proposed solution is a new technology for producing clean energy from renewable sources that combines wind, solar, and hydro power to create a hybrid system that is both efficient and cost-effective.",
    tags: [
      {
        name: "Energy",
        slug: "energy",
        colour: "#f1c40f",
      },
      {
        name: "Renewable Energy",
        slug: "renewable-energy",
        colour: "#1abc9c",
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          id: 'uid-3',
          name: "Jane Smith",
          username: "janesmith",
          profileImage: "https://source.unsplash.com/1080x1080/?person,face",
          bio: "Environmental activist and clean energy advocate.",
        },
        text: "This is amazing! I've been looking for a way to reduce my carbon footprint, and this technology seems like the perfect solution. I hope it becomes widely available soon!",
      },
    ],
    whatsapp: "https://wa.me/",
    email: "mailto:",
  },
  {
    id: "2",
    updatedAt: subDays(new Date(), 2).getTime(),
    title: "Using Solar Energy to Power Homes",
    author: {
      id: 'uid-4',
      name: "John Doe",
      username: "johndoe",
      profileImage: "https://source.unsplash.com/1080x1080/?person,face,asia",
      bio: "I am an engineer and renewable energy enthusiast, always exploring new ways to harness clean and sustainable energy sources.",
    },
    description:
      "I have an idea for using solar energy to power homes and reduce our dependence on fossil fuels. By installing solar panels on the roofs of homes and businesses, we can generate clean energy that can be used to power our daily lives.",
    problem:
      "The use of fossil fuels is a major contributor to greenhouse gas emissions and climate change. We need to find alternative energy sources that are clean, sustainable, and affordable.",
    solution:
      "My proposed solution is to harness the power of the sun by installing solar panels on the roofs of homes and businesses. This will generate clean energy that can be used to power our daily lives, reducing our dependence on fossil fuels and helping to mitigate the effects of climate change.",
    tags: [
      {
        name: "Renewable Energy",
        slug: "renewable-energy",
        colour: "#f1c40f",
      },
      {
        name: "Sustainability",
        slug: "sustainability",
        colour: "#1abc9c",
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          id: 'uid-5',
          name: "Jane Smith",
          username: "janesmith13",
          profileImage: "https://source.unsplash.com/1080x1080/?person,face",
          bio: "Enthusiastic supporter of clean and sustainable energy sources.",
        },
        text: "I fully support this idea! Solar energy is a clean, renewable, and readily available energy source that we should be utilizing more widely.",
      },
    ],
    whatsapp: "https://wa.me/",
    email: "mailto:",
  },
];
