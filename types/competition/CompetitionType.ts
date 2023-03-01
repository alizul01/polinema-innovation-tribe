export type Tags = {
  tag: string;
  slug: string;
  colour: string;
}

export type CompetitionType = {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  tags: Tags[];
}