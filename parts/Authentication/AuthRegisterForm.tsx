"use client";

import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import { useForm } from "react-hook-form";
import { Form } from "~/components/Form/Form";
import { registrationSchema, RegistrationSchema } from "~/schema/Registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "~/components/Form/Input";

export default function AuthRegisterForm() {
  const { supabase } = useSupabase();
  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  async function handleSubmit(data: RegistrationSchema) {
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
        className="my-4 w-full max-w-md"
      >
        <Input
          label="Email"
          id="email"
          placeholder="email@example.com"
          {...form.register("email")}
        />
        <div className="flex gap-4">
          <Input
            label="First Name"
            id="firstName"
            placeholder="John"
            {...form.register("firstName")}
          />
          <Input
            label="Last Name"
            id="lastName"
            placeholder="Doe"
            {...form.register("lastName")}
          />
        </div>
        <div className="flex gap-4">
          <Input
            label="Password"
            id="password"
            type="password"
            {...form.register("password")}
          />
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            {...form.register("confirmPassword")}
          />
        </div>
        <button className="btn btn-primary mx-auto">Submit</button>
      </Form>
    </>
  );
}
