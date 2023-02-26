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
      idea_box_tags: {
        Row: {
          idea_box_id: string
          tag_id: number
        }
        Insert: {
          idea_box_id: string
          tag_id: number
        }
        Update: {
          idea_box_id?: string
          tag_id?: number
        }
      }
      idea_boxes: {
        Row: {
          comment: Json | null
          description: string | null
          email: string | null
          id: string
          problem: string
          solution: string
          title: string
          updated_at: string | null
          username: string | null
          whatsapp: string | null
        }
        Insert: {
          comment?: Json | null
          description?: string | null
          email?: string | null
          id: string
          problem: string
          solution: string
          title: string
          updated_at?: string | null
          username?: string | null
          whatsapp?: string | null
        }
        Update: {
          comment?: Json | null
          description?: string | null
          email?: string | null
          id?: string
          problem?: string
          solution?: string
          title?: string
          updated_at?: string | null
          username?: string | null
          whatsapp?: string | null
        }
      }
      tags: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      users: {
        Row: {
          bio: string
          first_name: string
          id: string
          last_name: string
          username: string
        }
        Insert: {
          bio: string
          first_name: string
          id: string
          last_name: string
          username: string
        }
        Update: {
          bio?: string
          first_name?: string
          id?: string
          last_name?: string
          username?: string
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
