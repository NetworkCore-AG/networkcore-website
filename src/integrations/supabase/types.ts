export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      app_config: {
        Row: {
          key: string
          updated_at: string | null
          value: string
        }
        Insert: {
          key: string
          updated_at?: string | null
          value: string
        }
        Update: {
          key?: string
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      app_users: {
        Row: {
          active: boolean
          auth_user_id: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          last_login_at: string | null
          role_id: string | null
        }
        Insert: {
          active?: boolean
          auth_user_id?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          last_login_at?: string | null
          role_id?: string | null
        }
        Update: {
          active?: boolean
          auth_user_id?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          last_login_at?: string | null
          role_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "app_users_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_seo: {
        Row: {
          created_at: string
          description: string
          id: string
          image_url: string
          page_type: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          image_url?: string
          page_type?: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          image_url?: string
          page_type?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      calculator_signups: {
        Row: {
          consented_marketing: boolean | null
          created_at: string | null
          email: string
          id: string
          ip_address: string | null
          name: string | null
          source_url: string | null
          user_agent: string | null
        }
        Insert: {
          consented_marketing?: boolean | null
          created_at?: string | null
          email: string
          id?: string
          ip_address?: string | null
          name?: string | null
          source_url?: string | null
          user_agent?: string | null
        }
        Update: {
          consented_marketing?: boolean | null
          created_at?: string | null
          email?: string
          id?: string
          ip_address?: string | null
          name?: string | null
          source_url?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      company_kyb: {
        Row: {
          company: string
          kyb_done: boolean
          kyb_done_at: string | null
          next_review_date: string | null
          risk_level: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          company: string
          kyb_done?: boolean
          kyb_done_at?: string | null
          next_review_date?: string | null
          risk_level?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          company?: string
          kyb_done?: boolean
          kyb_done_at?: string | null
          next_review_date?: string | null
          risk_level?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      contact_rate_limits: {
        Row: {
          created_at: string
          id: string
          ip_address: unknown
          last_submission_at: string
          submission_count: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          ip_address: unknown
          last_submission_at?: string
          submission_count?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          ip_address?: unknown
          last_submission_at?: string
          submission_count?: number
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          audience_type: string
          company: string | null
          consent: boolean
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          referred_by_email: string | null
          referred_by_name: string | null
          source: string
          updated_at: string
        }
        Insert: {
          audience_type: string
          company?: string | null
          consent?: boolean
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          referred_by_email?: string | null
          referred_by_name?: string | null
          source?: string
          updated_at?: string
        }
        Update: {
          audience_type?: string
          company?: string | null
          consent?: boolean
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          referred_by_email?: string | null
          referred_by_name?: string | null
          source?: string
          updated_at?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          address: string | null
          archived_at: string | null
          archived_by: string | null
          campaign_source: string | null
          category: string | null
          charge_point_count: number | null
          christmas_card: boolean
          cms_provider: string | null
          commercial_agreement_date: string | null
          commercial_agreement_signed: boolean | null
          commission_rate: number | null
          company: string | null
          consented_marketing: boolean | null
          contact_name: string | null
          country: string | null
          created_at: string | null
          dp_type: string | null
          email: string | null
          estimated_mau: number | null
          evs_on_road: number | null
          id: string
          kyb_done: boolean
          last_contact_date: string | null
          loi_countersigned: boolean | null
          loi_signed: boolean | null
          loi_signed_date: string | null
          next_action: string | null
          next_action_date: string | null
          notes: string | null
          ocpi_ready: boolean | null
          owner: string | null
          phone: string | null
          priority: Database["public"]["Enums"]["contact_priority"] | null
          revenue_potential: string | null
          secondary_type: Database["public"]["Enums"]["contact_type"] | null
          signup_source: string | null
          sla_signed: boolean | null
          sla_signed_date: string | null
          source: Database["public"]["Enums"]["contact_source"] | null
          status: Database["public"]["Enums"]["contact_status"] | null
          type: Database["public"]["Enums"]["contact_type"]
          unsubscribe_token: string | null
          updated_at: string | null
          use_case: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          archived_at?: string | null
          archived_by?: string | null
          campaign_source?: string | null
          category?: string | null
          charge_point_count?: number | null
          christmas_card?: boolean
          cms_provider?: string | null
          commercial_agreement_date?: string | null
          commercial_agreement_signed?: boolean | null
          commission_rate?: number | null
          company?: string | null
          consented_marketing?: boolean | null
          contact_name?: string | null
          country?: string | null
          created_at?: string | null
          dp_type?: string | null
          email?: string | null
          estimated_mau?: number | null
          evs_on_road?: number | null
          id?: string
          kyb_done?: boolean
          last_contact_date?: string | null
          loi_countersigned?: boolean | null
          loi_signed?: boolean | null
          loi_signed_date?: string | null
          next_action?: string | null
          next_action_date?: string | null
          notes?: string | null
          ocpi_ready?: boolean | null
          owner?: string | null
          phone?: string | null
          priority?: Database["public"]["Enums"]["contact_priority"] | null
          revenue_potential?: string | null
          secondary_type?: Database["public"]["Enums"]["contact_type"] | null
          signup_source?: string | null
          sla_signed?: boolean | null
          sla_signed_date?: string | null
          source?: Database["public"]["Enums"]["contact_source"] | null
          status?: Database["public"]["Enums"]["contact_status"] | null
          type?: Database["public"]["Enums"]["contact_type"]
          unsubscribe_token?: string | null
          updated_at?: string | null
          use_case?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          archived_at?: string | null
          archived_by?: string | null
          campaign_source?: string | null
          category?: string | null
          charge_point_count?: number | null
          christmas_card?: boolean
          cms_provider?: string | null
          commercial_agreement_date?: string | null
          commercial_agreement_signed?: boolean | null
          commission_rate?: number | null
          company?: string | null
          consented_marketing?: boolean | null
          contact_name?: string | null
          country?: string | null
          created_at?: string | null
          dp_type?: string | null
          email?: string | null
          estimated_mau?: number | null
          evs_on_road?: number | null
          id?: string
          kyb_done?: boolean
          last_contact_date?: string | null
          loi_countersigned?: boolean | null
          loi_signed?: boolean | null
          loi_signed_date?: string | null
          next_action?: string | null
          next_action_date?: string | null
          notes?: string | null
          ocpi_ready?: boolean | null
          owner?: string | null
          phone?: string | null
          priority?: Database["public"]["Enums"]["contact_priority"] | null
          revenue_potential?: string | null
          secondary_type?: Database["public"]["Enums"]["contact_type"] | null
          signup_source?: string | null
          sla_signed?: boolean | null
          sla_signed_date?: string | null
          source?: Database["public"]["Enums"]["contact_source"] | null
          status?: Database["public"]["Enums"]["contact_status"] | null
          type?: Database["public"]["Enums"]["contact_type"]
          unsubscribe_token?: string | null
          updated_at?: string | null
          use_case?: string | null
          website?: string | null
        }
        Relationships: []
      }
      crm_access_codes: {
        Row: {
          active: boolean | null
          code_sha256: string
          created_at: string | null
          id: string
          label: string
        }
        Insert: {
          active?: boolean | null
          code_sha256: string
          created_at?: string | null
          id?: string
          label: string
        }
        Update: {
          active?: boolean | null
          code_sha256?: string
          created_at?: string | null
          id?: string
          label?: string
        }
        Relationships: []
      }
      email_sequences: {
        Row: {
          contact_id: string | null
          email: string
          enrolled_at: string | null
          followup_due_at: string | null
          followup_sent_at: string | null
          id: string
          status: string
          step: number
          track: string
          unsubscribe_token: string | null
          unsubscribed_at: string | null
          welcome_sent_at: string | null
        }
        Insert: {
          contact_id?: string | null
          email: string
          enrolled_at?: string | null
          followup_due_at?: string | null
          followup_sent_at?: string | null
          id?: string
          status?: string
          step?: number
          track: string
          unsubscribe_token?: string | null
          unsubscribed_at?: string | null
          welcome_sent_at?: string | null
        }
        Update: {
          contact_id?: string | null
          email?: string
          enrolled_at?: string | null
          followup_due_at?: string | null
          followup_sent_at?: string | null
          id?: string
          status?: string
          step?: number
          track?: string
          unsubscribe_token?: string | null
          unsubscribed_at?: string | null
          welcome_sent_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_sequences_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: true
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          attendance_status: string
          city: string | null
          country: string | null
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          notes: string | null
          owner: string | null
          recurrence: string | null
          relevance: string | null
          start_date: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          attendance_status?: string
          city?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          notes?: string | null
          owner?: string | null
          recurrence?: string | null
          relevance?: string | null
          start_date?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          attendance_status?: string
          city?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          notes?: string | null
          owner?: string | null
          recurrence?: string | null
          relevance?: string | null
          start_date?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      interactions: {
        Row: {
          company: string | null
          contact_id: string | null
          created_at: string | null
          event_id: string | null
          id: string
          occurred_at: string
          owner: string | null
          summary: string
          type: Database["public"]["Enums"]["interaction_type"]
        }
        Insert: {
          company?: string | null
          contact_id?: string | null
          created_at?: string | null
          event_id?: string | null
          id?: string
          occurred_at?: string
          owner?: string | null
          summary: string
          type: Database["public"]["Enums"]["interaction_type"]
        }
        Update: {
          company?: string | null
          contact_id?: string | null
          created_at?: string | null
          event_id?: string | null
          id?: string
          occurred_at?: string
          owner?: string | null
          summary?: string
          type?: Database["public"]["Enums"]["interaction_type"]
        }
        Relationships: [
          {
            foreignKeyName: "interactions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      job_logs: {
        Row: {
          body: string | null
          detail: Json | null
          error: string | null
          http_id: number | null
          http_status: number | null
          id: string
          job: string
          occurred_at: string
          recipient: string | null
          resend_id: string | null
          status: string
        }
        Insert: {
          body?: string | null
          detail?: Json | null
          error?: string | null
          http_id?: number | null
          http_status?: number | null
          id?: string
          job: string
          occurred_at?: string
          recipient?: string | null
          resend_id?: string | null
          status: string
        }
        Update: {
          body?: string | null
          detail?: Json | null
          error?: string | null
          http_id?: number | null
          http_status?: number | null
          id?: string
          job?: string
          occurred_at?: string
          recipient?: string | null
          resend_id?: string | null
          status?: string
        }
        Relationships: []
      }
      newsletter_sends: {
        Row: {
          contact_id: string | null
          country: string | null
          edition: string
          email: string
          first_name: string | null
          id: string
          send_at: string
          sent_at: string | null
          status: string
        }
        Insert: {
          contact_id?: string | null
          country?: string | null
          edition: string
          email: string
          first_name?: string | null
          id?: string
          send_at: string
          sent_at?: string | null
          status?: string
        }
        Update: {
          contact_id?: string | null
          country?: string | null
          edition?: string
          email?: string
          first_name?: string | null
          id?: string
          send_at?: string
          sent_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_sends_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_signups: {
        Row: {
          consent: boolean
          created_at: string
          email: string
          id: string
          name: string
        }
        Insert: {
          consent?: boolean
          created_at?: string
          email: string
          id?: string
          name: string
        }
        Update: {
          consent?: boolean
          created_at?: string
          email?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          level: string
          role_id: string
          section: string
        }
        Insert: {
          level: string
          role_id: string
          section: string
        }
        Update: {
          level?: string
          role_id?: string
          section?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_admin: boolean
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_admin?: boolean
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_admin?: boolean
          name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      companies: {
        Row: {
          added_at: string | null
          company: string | null
          contact_count: number | null
          contacts: string | null
          country: string | null
          last_contact_date: string | null
          loi_signed: boolean | null
          status: string | null
          type: string | null
          website: string | null
        }
        Relationships: []
      }
      cpo_pipeline: {
        Row: {
          added_at: string | null
          company: string | null
          contact_count: number | null
          contacts: string | null
          country: string | null
          last_contact_date: string | null
          loi_signed: boolean | null
          status: string | null
          type: string | null
          website: string | null
        }
        Relationships: []
      }
      dp_pipeline: {
        Row: {
          added_at: string | null
          company: string | null
          contact_count: number | null
          contacts: string | null
          country: string | null
          last_contact_date: string | null
          loi_signed: boolean | null
          status: string | null
          type: string | null
          website: string | null
        }
        Relationships: []
      }
      recent_activity: {
        Row: {
          company: string | null
          contact_name: string | null
          id: string | null
          occurred_at: string | null
          owner: string | null
          summary: string | null
          type: Database["public"]["Enums"]["interaction_type"] | null
        }
        Relationships: []
      }
    }
    Functions: {
      create_admin_user: { Args: { _user_email: string }; Returns: Json }
      get_contact_submissions: {
        Args: never
        Returns: {
          audience_type: string
          company: string
          consent: boolean
          created_at: string
          email: string
          id: string
          message: string
          name: string
          updated_at: string
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      run_sequence_followups: { Args: never; Returns: undefined }
      sweep_http_logs: { Args: never; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "user"
      contact_priority: "High" | "Medium" | "Low"
      contact_source:
        | "newsletter_signup"
        | "outbound"
        | "referral"
        | "inbound"
        | "event"
        | "manual"
      contact_status:
        | "Discovery"
        | "Lead"
        | "Qualified"
        | "Negotiating"
        | "Contracted"
        | "Active"
        | "Churned"
        | "Declined"
      contact_type:
        | "CPO"
        | "DP"
        | "Host"
        | "Newsletter"
        | "Investor"
        | "Unknown"
        | "CSMS"
        | "Press"
      interaction_type:
        | "call"
        | "email_sent"
        | "email_received"
        | "meeting"
        | "note"
        | "whatsapp"
        | "status_change"
        | "loi_milestone"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      contact_priority: ["High", "Medium", "Low"],
      contact_source: [
        "newsletter_signup",
        "outbound",
        "referral",
        "inbound",
        "event",
        "manual",
      ],
      contact_status: [
        "Discovery",
        "Lead",
        "Qualified",
        "Negotiating",
        "Contracted",
        "Active",
        "Churned",
        "Declined",
      ],
      contact_type: [
        "CPO",
        "DP",
        "Host",
        "Newsletter",
        "Investor",
        "Unknown",
        "CSMS",
        "Press",
      ],
      interaction_type: [
        "call",
        "email_sent",
        "email_received",
        "meeting",
        "note",
        "whatsapp",
        "status_change",
        "loi_milestone",
      ],
    },
  },
} as const
