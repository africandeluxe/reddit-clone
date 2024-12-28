export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          title: string;
          content: string | null;
          slug: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content?: string | null;
          slug: string;
          user_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string | null;
          slug?: string;
          user_id?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users: {
        Row: {
          id: string;
          email: string;
        };
        Insert: {
          id?: string;
          email: string;
        };
        Update: {
          id?: string;
          email?: string;
        };
        Relationships: [];
      };
    };
    Views: {};
    Functions: {};
  };
}