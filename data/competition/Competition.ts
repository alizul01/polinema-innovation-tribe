import type { CompetitionType } from "~/types/competition/CompetitionType";

const COMPETITION: CompetitionType[] = [
  {
    id: 1,
    title: 'Accessible Game Design Competition',
    description:
      'A competition that values accessibility in game design, by requiring entrants to create games that are playable by a wide variety of audiences, including people with disabilities.',
    startDate: '2023-07-01',
    endDate: '2023-08-31',
    link: 'https://example.com/accessible-game-design',
    tags: [
      {
        colour: '#FFC107',
        slug: 'accessibility',
        tag: 'accessibility',
      }
    ]
  },
  {
    id: 2,
    title: 'Artificial Intelligence Hackathon',
    description:
      'A competition that values innovation and technical proficiency in the field of artificial intelligence, by challenging entrants to create cutting-edge AI applications.',
    startDate: '2023-05-01',
    endDate: '2023-06-30',
    link: 'https://example.com/ai-hackathon',
    tags: [
      {
        colour: '#FF0707',
        slug: 'artificial-intelligence',
        tag: 'artificial intelligence',
      }
    ],
  },
  {
    id: 3,
    title: 'Virtual Reality Game Design Competition',
    description:
      'A competition that challenges entrants to create immersive virtual reality games that push the boundaries of what is possible in the medium.',
    startDate: '2023-10-01',
    endDate: '2023-12-31',
    link: 'https://example.com/vr-game-design',
    tags: [
      {
        colour: '#07FF13',
        slug: 'virtual-reality',
        tag: 'virtual reality',
      }
    ]
  },
  {
    id: 4,
    title: 'Social Impact Tech Challenge',
    description:
      'A competition that encourages the use of technology to create solutions for pressing social and environmental issues.',
    startDate: '2023-01-01',
    endDate: '2023-02-28',
    link: 'https://example.com/social-impact-tech',
    tags: [
      {
        colour: '#07FF13',
        slug: 'social-impact',
        tag: 'social impact',
      }
    ]
  },
  {
    id: 5,
    title: 'Eco-Friendly App Design Competition',
    description:
      'A competition that challenges entrants to design and develop mobile apps that promote sustainability and environmental responsibility.',
    startDate: '2023-03-01',
    endDate: '2023-04-30',
    link: 'https://example.com/eco-app-design',
    tags: [
      {
        colour: '#07C5FF',
        slug: 'eco-friendly',
        tag: 'eco-friendly',
      }
    ]
  },
]

export default COMPETITION