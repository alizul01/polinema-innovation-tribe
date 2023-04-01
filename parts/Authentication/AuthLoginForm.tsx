"use client";

import { useForm } from "react-hook-form";
import { Input } from "~/components/Form/Input";
import { Form } from "~/components/Form/Form";
import { authSchema, AuthSchema } from "~/schema/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserLogin } from "~/services/user/login";
import { useRouter } from "next/navigation";

export default function AuthLoginForm() {
  const router = useRouter();
  const { mutate: login } = useUserLogin({ provider: "email" });
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema)
  });

  async function handleSubmit(data: AuthSchema) {
    login(data, {
      onSuccess() {
        router.push("/");
      }
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
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="⬤ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤"
          {...form.register("password")}
        />
        <button className="btn btn-primary mx-auto">Submit</button>
      </Form>
    </>
  );
}
