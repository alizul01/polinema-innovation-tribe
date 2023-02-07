/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/idea_box_tags": {
    get: {
      parameters: {
        query: {
          idea_box_id?: parameters["rowFilter.idea_box_tags.idea_box_id"];
          tag_id?: parameters["rowFilter.idea_box_tags.tag_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["idea_box_tags"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** idea_box_tags */
          idea_box_tags?: definitions["idea_box_tags"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          idea_box_id?: parameters["rowFilter.idea_box_tags.idea_box_id"];
          tag_id?: parameters["rowFilter.idea_box_tags.tag_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          idea_box_id?: parameters["rowFilter.idea_box_tags.idea_box_id"];
          tag_id?: parameters["rowFilter.idea_box_tags.tag_id"];
        };
        body: {
          /** idea_box_tags */
          idea_box_tags?: definitions["idea_box_tags"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/competitions": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.competitions.id"];
          title?: parameters["rowFilter.competitions.title"];
          poster?: parameters["rowFilter.competitions.poster"];
          description?: parameters["rowFilter.competitions.description"];
          deadline?: parameters["rowFilter.competitions.deadline"];
          link?: parameters["rowFilter.competitions.link"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["competitions"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** competitions */
          competitions?: definitions["competitions"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.competitions.id"];
          title?: parameters["rowFilter.competitions.title"];
          poster?: parameters["rowFilter.competitions.poster"];
          description?: parameters["rowFilter.competitions.description"];
          deadline?: parameters["rowFilter.competitions.deadline"];
          link?: parameters["rowFilter.competitions.link"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.competitions.id"];
          title?: parameters["rowFilter.competitions.title"];
          poster?: parameters["rowFilter.competitions.poster"];
          description?: parameters["rowFilter.competitions.description"];
          deadline?: parameters["rowFilter.competitions.deadline"];
          link?: parameters["rowFilter.competitions.link"];
        };
        body: {
          /** competitions */
          competitions?: definitions["competitions"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
          username?: parameters["rowFilter.users.username"];
          bio?: parameters["rowFilter.users.bio"];
          email?: parameters["rowFilter.users.email"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users */
          users?: definitions["users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
          username?: parameters["rowFilter.users.username"];
          bio?: parameters["rowFilter.users.bio"];
          email?: parameters["rowFilter.users.email"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
          username?: parameters["rowFilter.users.username"];
          bio?: parameters["rowFilter.users.bio"];
          email?: parameters["rowFilter.users.email"];
        };
        body: {
          /** users */
          users?: definitions["users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/idea_boxes": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.idea_boxes.id"];
          username?: parameters["rowFilter.idea_boxes.username"];
          title?: parameters["rowFilter.idea_boxes.title"];
          description?: parameters["rowFilter.idea_boxes.description"];
          comment?: parameters["rowFilter.idea_boxes.comment"];
          problem?: parameters["rowFilter.idea_boxes.problem"];
          solution?: parameters["rowFilter.idea_boxes.solution"];
          whatsapp?: parameters["rowFilter.idea_boxes.whatsapp"];
          email?: parameters["rowFilter.idea_boxes.email"];
          updated_at?: parameters["rowFilter.idea_boxes.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["idea_boxes"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** idea_boxes */
          idea_boxes?: definitions["idea_boxes"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.idea_boxes.id"];
          username?: parameters["rowFilter.idea_boxes.username"];
          title?: parameters["rowFilter.idea_boxes.title"];
          description?: parameters["rowFilter.idea_boxes.description"];
          comment?: parameters["rowFilter.idea_boxes.comment"];
          problem?: parameters["rowFilter.idea_boxes.problem"];
          solution?: parameters["rowFilter.idea_boxes.solution"];
          whatsapp?: parameters["rowFilter.idea_boxes.whatsapp"];
          email?: parameters["rowFilter.idea_boxes.email"];
          updated_at?: parameters["rowFilter.idea_boxes.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.idea_boxes.id"];
          username?: parameters["rowFilter.idea_boxes.username"];
          title?: parameters["rowFilter.idea_boxes.title"];
          description?: parameters["rowFilter.idea_boxes.description"];
          comment?: parameters["rowFilter.idea_boxes.comment"];
          problem?: parameters["rowFilter.idea_boxes.problem"];
          solution?: parameters["rowFilter.idea_boxes.solution"];
          whatsapp?: parameters["rowFilter.idea_boxes.whatsapp"];
          email?: parameters["rowFilter.idea_boxes.email"];
          updated_at?: parameters["rowFilter.idea_boxes.updated_at"];
        };
        body: {
          /** idea_boxes */
          idea_boxes?: definitions["idea_boxes"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/tags": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tags.id"];
          name?: parameters["rowFilter.tags.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["tags"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** tags */
          tags?: definitions["tags"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tags.id"];
          name?: parameters["rowFilter.tags.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tags.id"];
          name?: parameters["rowFilter.tags.name"];
        };
        body: {
          /** tags */
          tags?: definitions["tags"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  idea_box_tags: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `idea_boxes.id`.<fk table='idea_boxes' column='id'/>
     */
    idea_box_id: string;
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `tags.id`.<fk table='tags' column='id'/>
     */
    tag_id: number;
  };
  competitions: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: character varying */
    title: string;
    /** Format: text */
    poster?: string;
    /** Format: text */
    description?: string;
    /** Format: date */
    deadline?: string;
    /** Format: text */
    link?: string;
  };
  users: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    first_name?: string;
    /** Format: text */
    last_name?: string;
    /** Format: text */
    username?: string;
    /** Format: text */
    bio?: string;
    /** Format: text */
    email?: string;
  };
  idea_boxes: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    username?: string;
    /** Format: character varying */
    title: string;
    /** Format: text */
    description?: string;
    /** Format: text */
    comment?: string;
    /** Format: text */
    problem: string;
    /** Format: text */
    solution: string;
    /** Format: character varying */
    whatsapp?: string;
    /** Format: character varying */
    email?: string;
    /** Format: timestamp without time zone */
    updated_at?: string;
  };
  tags: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: character varying */
    name: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description idea_box_tags */
  "body.idea_box_tags": definitions["idea_box_tags"];
  /** Format: uuid */
  "rowFilter.idea_box_tags.idea_box_id": string;
  /** Format: integer */
  "rowFilter.idea_box_tags.tag_id": string;
  /** @description competitions */
  "body.competitions": definitions["competitions"];
  /** Format: uuid */
  "rowFilter.competitions.id": string;
  /** Format: character varying */
  "rowFilter.competitions.title": string;
  /** Format: text */
  "rowFilter.competitions.poster": string;
  /** Format: text */
  "rowFilter.competitions.description": string;
  /** Format: date */
  "rowFilter.competitions.deadline": string;
  /** Format: text */
  "rowFilter.competitions.link": string;
  /** @description users */
  "body.users": definitions["users"];
  /** Format: uuid */
  "rowFilter.users.id": string;
  /** Format: text */
  "rowFilter.users.first_name": string;
  /** Format: text */
  "rowFilter.users.last_name": string;
  /** Format: text */
  "rowFilter.users.username": string;
  /** Format: text */
  "rowFilter.users.bio": string;
  /** Format: text */
  "rowFilter.users.email": string;
  /** @description idea_boxes */
  "body.idea_boxes": definitions["idea_boxes"];
  /** Format: uuid */
  "rowFilter.idea_boxes.id": string;
  /** Format: text */
  "rowFilter.idea_boxes.username": string;
  /** Format: character varying */
  "rowFilter.idea_boxes.title": string;
  /** Format: text */
  "rowFilter.idea_boxes.description": string;
  /** Format: text */
  "rowFilter.idea_boxes.comment": string;
  /** Format: text */
  "rowFilter.idea_boxes.problem": string;
  /** Format: text */
  "rowFilter.idea_boxes.solution": string;
  /** Format: character varying */
  "rowFilter.idea_boxes.whatsapp": string;
  /** Format: character varying */
  "rowFilter.idea_boxes.email": string;
  /** Format: timestamp without time zone */
  "rowFilter.idea_boxes.updated_at": string;
  /** @description tags */
  "body.tags": definitions["tags"];
  /** Format: integer */
  "rowFilter.tags.id": string;
  /** Format: character varying */
  "rowFilter.tags.name": string;
}

export interface operations {}

export interface external {}