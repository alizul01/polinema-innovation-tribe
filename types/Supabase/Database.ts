import type { Idea } from "../Idea/Index/Idea";

export type Database = {
  public: {
    tables: {
      idea_boxes: {
        Row: Idea;
        Insert: Idea;
        Update: Partial<Idea>;
      };
    };
  };
};
