export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      competitions: {
        Row: {
          deadline: string | null
          description: string | null
          id: string
          link: string | null
          poster: string | null
          title: string
        }
        Insert: {
          deadline?: string | null
          description?: string | null
          id: string
          link?: string | null
          poster?: string | null
          title: string
        }
        Update: {
          deadline?: string | null
          description?: string | null
          id?: string
          link?: string | null
          poster?: string | null
          title?: string
        }
      }
      idea_tags: {
        Row: {
          id: string
          idea_id: string
          tag_id: string
        }
        Insert: {
          id?: string
          idea_id: string
          tag_id: string
        }
        Update: {
          id?: string
          idea_id?: string
          tag_id?: string
        }
      }
      ideas: {
        Row: {
          created_at: string
          description: string
          id: string
          problem: string
          solution: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          problem: string
          solution: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          problem?: string
          solution?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
      }
      profiles: {
        Row: {
          bio: string
          first_name: string
          id: string
          last_name: string
          profile_image: string
          username: string
        }
        Insert: {
          bio: string
          first_name: string
          id?: string
          last_name: string
          profile_image: string
          username: string
        }
        Update: {
          bio?: string
          first_name?: string
          id?: string
          last_name?: string
          profile_image?: string
          username?: string
        }
      }
      tags: {
        Row: {
          colour: string
          id: string
          name: string
          slug: string
          type: string
        }
        Insert: {
          colour: string
          id?: string
          name: string
          slug: string
          type: string
        }
        Update: {
          colour?: string
          id?: string
          name?: string
          slug?: string
          type?: string
        }
      }
    }
    Views: {
      users: {
        Row: {
          bio: string | null
          email: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          profile_image: string | null
          username: string | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
