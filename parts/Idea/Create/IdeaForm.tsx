import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HiInboxStack as Box,
  HiLightBulb as LightBulb,
  HiEnvelope as Envelope,
  HiPhone as Phone,
  HiLockClosed as LockClosed,
  HiBeaker,
  HiShieldExclamation,
} from "react-icons/hi2";
import { SubmitHandler, useForm } from "react-hook-form";
import ProTips from "~/parts/Idea/Create/ProTips";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import type { definitions } from "~/generated-types";
import { createIdea } from "~/services/idea/create-idea";
import { Input } from "~/components/Form/Input";
import { TextAreaInput } from "~/components/Form/TextAreaInput";
import { type IdeaSchema, ideaSchema } from "~/schema/Idea";
import { Form } from "~/components/Form/Form";

export type IdeaBox = definitions["idea_boxes"];

function IdeaForm() {
  const form = useForm<IdeaSchema>({
    resolver: zodResolver(ideaSchema),
  });
  const { supabase } = useSupabase();

  const onSubmit: SubmitHandler<IdeaSchema> = async (values) => {
    const { data, error } = await createIdea(supabase, values);
    console.log({ data, error });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full p-3 backdrop-blur-lg md:p-8 bg-gray-800 bg-opacity-70 rounded-md">
        <div className="flex flex-row items-center justify-center gap-4 animate-bounce">
          <Box fontSize={24} /> <h1 className="text-lg font-bold">Sandbox</h1>
        </div>
        <Form form={form} onSubmit={onSubmit} className="my-4">
          <Input
            label="Title"
            id="title"
            placeholder="Idea Title"
            icon={<LightBulb />}
            {...form.register("title")}
          />
          <Input
            label="Problem"
            id="problem"
            placeholder="What kind of Problem?"
            icon={<HiShieldExclamation />}
            {...form.register("title")}
          />
          <Input
            label="Solution"
            id="solution"
            placeholder="How do you solve it?"
            icon={<HiBeaker />}
            {...form.register("solution")}
          />
          <TextAreaInput
            label="Description"
            id="description"
            placeholder="What is it?"
            icon={<HiBeaker />}
            {...form.register("description")}
          />
          <Input
            label="Deadline"
            id="Deadline"
            placeholder="Deadline..."
            icon={<LockClosed />}
            {...form.register("deadline")}
          />
          <Input
            label="Whatsapp"
            id="whatsapp"
            placeholder="+628123456789"
            icon={<Phone />}
            {...form.register("whatsapp")}
          />
          <Input
            label="Email"
            id="email"
            placeholder="example@gmail.com"
            icon={<Envelope />}
            {...form.register("email")}
          />
          <TextAreaInput label="" {...form.register("description")} />
          <button className="btn btn-primary">Submit</button>
        </Form>
      </div>
      <ProTips />
    </div>
  );
}

export default IdeaForm;
