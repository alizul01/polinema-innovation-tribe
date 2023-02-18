"use client";

import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import { useForm } from "react-hook-form";
import { Input } from "~/components/Form/Input";
import { Form } from "~/components/Form/Form";
import { authSchema, AuthSchema } from "~/schema/Auth";
import { zodResolver } from "@hookform/resolvers/zod";

export function AuthLoginForm() {
  const { supabase } = useSupabase();
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

  async function handleSubmit(data: AuthSchema) {
    await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
  }

  return (
    <>
      <Form
        form={form}
        onSubmit={handleSubmit}
        className={"my-4 w-full max-w-md"}
      >
        <Input
          label="Email"
          id="email"
          placeholder="email@example.com"
          {...form.register("email")}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          {...form.register("password")}
        />
        <button className="btn btn-primary mx-auto">Submit</button>
      </Form>
    </>
  );
}
