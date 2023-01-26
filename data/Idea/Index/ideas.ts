import { subDays } from "date-fns";
import type { Idea } from "~/types/Idea/Index/Idea";

export const IDEAS: Idea[] = [
  {
    id: 1,
    createdAt: subDays(new Date(), 4).getTime(),
    title: "A new way to recycle plastic",
    author: {
      name: "Jane Doe",
      username: "janedoe",
      profileImage: "https://source.unsplash.com/1080x1080/?person,face",
      bio: "I am an environmental scientist and avid recycler, always looking for new ways to reduce waste and protect our planet.",
    },
    description:
      "I have an idea for a new method of recycling plastic that is more efficient and cost-effective than current methods. It involves using a special type of enzyme to break down the plastic into its original chemical compounds, which can then be repurposed for a variety of applications.",
    tags: [
      {
        text: "Environment",
        slug: "environment",
        colour: "#2ecc71",
      },
      {
        text: "Recycling",
        slug: "recycling",
        colour: "#3498db",
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          name: "John Smith",
          username: "johnsmith13",
          profileImage: "https://source.unsplash.com/1080x1080/?person,face",
          bio: "Passionate environmentalist dedicated to sustainability.",
        },
        text: "This is a great idea! I've been looking for ways to reduce plastic waste in my community, and this solution seems like it could really make a difference.",
      },
    ],
  },
  {
    id: 2,
    createdAt: subDays(new Date(), 2).getTime(),
    title: "An app for organizing neighborhood clean-ups",
    author: {
      name: "James Smith",
      username: "james_smith12",
      profileImage: "https://source.unsplash.com/1080x1080/?human,face",
      bio: "I am a software developer and community organizer, passionate about using technology to bring people together for positive change.",
    },
    description:
      "I'm proposing the development of a mobile app that helps neighbors coordinate street and park clean-ups in their local community. The app would allow users to create events, invite others to join, and track the amount of trash collected. It could also provide information about proper waste disposal and resources for volunteering.",
    tags: [
      {
        text: "Community",
        slug: "community",
        colour: "#f1c40f",
      },
      {
        text: "Clean-up",
        slug: "clean-up",
        colour: "#e67e22",
      },
      {
        text: "Technology",
        slug: "technology",
        colour: "#9b59b6",
      },
    ],
    comments: [],
  },
  {
    id: 3,
    createdAt: subDays(new Date(), 4).getTime(),
    title: "A new way to recycle plastic",
    author: {
      name: "Jane Doe",
      username: "janedoe3",
      profileImage: "https://source.unsplash.com/1080x1080/?person,face",
      bio: "I am an environmental scientist and avid recycler, always looking for new ways to reduce waste and protect our planet.",
    },
    description:
      "I have an idea for a new method of recycling plastic that is more efficient and cost-effective than current methods. It involves using a special type of enzyme to break down the plastic into its original chemical compounds, which can then be repurposed for a variety of applications.",
    tags: [
      {
        text: "Recycling",
        slug: "recycling",
        colour: "#3498db",
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          name: "John Smith",
          username: "johnsmith12",
          profileImage: "https://source.unsplash.com/1080x1080/?profile,face",
          bio: "Passionate environmentalist dedicated to sustainability.",
        },
        text: "This is a great idea! I've been looking for ways to reduce plastic waste in my community, and this solution seems like it could really make a difference.",
      },
      {
        id: 2,
        author: {
          name: "Kate Williams",
          username: "katewilliams",
          profileImage: "https://source.unsplash.com/1080x1080/?person,profile",
          bio: "New to environmentalism, eager to learn and make a difference.",
        },
        text: "I'm interested in learning more about the enzyme you mentioned. Could you provide more details or sources for further information?",
      },
      {
        id: 3,
        author: {
          name: "John Smith",
          username: "johnsmith",
          profileImage: "https://source.unsplash.com/1080x1080/?profile,face",
          bio: "Passionate environmentalist dedicated to sustainability.",
        },
        text: "This is a great idea! I've been looking for ways to reduce plastic waste in my community, and this solution seems like it could really make a difference.",
      },
      {
        id: 4,
        author: {
          name: "Kate Williams",
          username: "katewilliams",
          profileImage: "https://source.unsplash.com/1080x1080/?person,profile",
          bio: "New to environmentalism, eager to learn and make a difference.",
        },
        text: "I'm interested in learning more about the enzyme you mentioned. Could you provide more details or sources for further information?",
      },
    ],
  },
  {
    id: 4,
    createdAt: subDays(new Date(), 2).getTime(),
    title: "An app for organizing neighborhood clean-ups",
    author: {
      name: "James Smith",
      username: "jamessmith12",
      profileImage: "https://source.unsplash.com/1080x1080/?human,face",
      bio: "I am a software developer and community organizer, passionate about using technology to bring people together for positive change.",
    },
    description:
      "I'm proposing the development of a mobile app that helps neighbors coordinate street and park clean-ups in their local community. The app would allow users to create events, invite others to join, and track the amount of trash collected. It could also provide information about proper waste disposal and resources for volunteering.",
    tags: [
      {
        text: "Community",
        slug: "community",
        colour: "#f1c40f",
      },
      {
        text: "Technology",
        slug: "technology",
        colour: "#9b59b6",
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          name: "Emily Johnson",
          username: "@emilyjohnson",
          profileImage:
            "https://source.unsplash.com/1080x1080/?human,profile,face",
          bio: "Committed to building strong communities through involvement and action.",
        },
        text: "This is a fantastic idea! I've been wanting to get more involved in community clean-ups, but it can be hard to find out about them or coordinate with others. An app like this would make it so much easier.",
      },
      {
        id: 2,
        author: {
          name: "Brian Thompson",
          username: "@brianthompson",
          profileImage:
            "https://source.unsplash.com/1080x1080/?person,human,face",
          bio: "Software developer with a passion for using technology to better the community.",
        },
        text: "I agree, this could be a great way to bring people together and make a positive impact on the environment. I'd definitely be interested in helping to build this app.",
      },
      {
        id: 3,
        author: {
          name: "Brian Thompson",
          username: "@brianthompson",
          profileImage:
            "https://source.unsplash.com/1080x1080/?person,human,face",
          bio: "Software developer with a passion for using technology to better the community.",
        },
        text: "I agree, this could be a great way to bring people together and make a positive impact on the environment. I'd definitely be interested in helping to build this app.",
      },
    ],
  },
];
