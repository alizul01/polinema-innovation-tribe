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
          idea_id: string
          tag_id: number
        }
        Insert: {
          idea_id: string
          tag_id: number
        }
        Update: {
          idea_id?: string
          tag_id?: number
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
          username: string | null
        }
        Insert: {
          created_at?: string
          description: string
          id: string
          problem: string
          solution: string
          title: string
          updated_at?: string
          user_id: string
          username?: string | null
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
          username?: string | null
        }
      }
      profiles: {
        Row: {
          bio: string
          first_name: string
          id: string
          last_name: string
          profile_image: string | null
          username: string
        }
        Insert: {
          bio: string
          first_name: string
          id: string
          last_name: string
          profile_image?: string | null
          username: string
        }
        Update: {
          bio?: string
          first_name?: string
          id?: string
          last_name?: string
          profile_image?: string | null
          username?: string
        }
      }
      tags: {
        Row: {
          colour: string
          id: number
          name: string
          slug: string
        }
        Insert: {
          colour: string
          id?: number
          name: string
          slug: string
        }
        Update: {
          colour?: string
          id?: number
          name?: string
          slug?: string
        }
      }
    }
    Views: {
      [_ in never]: never
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
