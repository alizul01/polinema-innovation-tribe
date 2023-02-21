"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  HiLightBulb as LightBulbIcon,
  HiEnvelope as EnvelopeIcon,
  HiPhone as PhoneIcon,
  HiLockClosed as LockClosedIcon,
  HiBeaker as BeakerIcon,
  HiShieldExclamation as ShieldIcon,
} from "react-icons/hi2";
import { SubmitHandler, useForm } from "react-hook-form";
import ProTips from "~/parts/Idea/Create/ProTips";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import type { definitions } from "~/generated-types";
import { createIdea } from "~/services/idea/create-idea";
import { Input } from "~/components/Form/Input";
import { TextAreaInput } from "~/components/Form/TextAreaInput";
import { type IdeaSchema, ideaSchema } from "~/schema/Idea";
import { Form } from "~/components/Form";

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
      <div className="w-full p-3">
        <Form form={form} onSubmit={onSubmit} className="my-4">
          <Input
            label="Title"
            id="title"
            placeholder="Idea Title"
            icon={<LightBulbIcon />}
            {...form.register("title")}
          />
          <Input
            label="Problem"
            id="problem"
            placeholder="What kind of Problem?"
            icon={<ShieldIcon />}
            {...form.register("problem")}
          />
          <Input
            label="Solution"
            id="solution"
            placeholder="How do you solve it?"
            icon={<BeakerIcon />}
            {...form.register("solution")}
          />
          <TextAreaInput
            label="Description"
            id="description"
            placeholder="What is it?"
            icon={<BeakerIcon />}
            {...form.register("description")}
          />
          <Input
            label="Deadline"
            id="Deadline"
            placeholder="Deadline..."
            icon={<LockClosedIcon />}
            type="date"
            {...form.register("deadline")}
          />
          <Input
            label="Whatsapp"
            id="whatsapp"
            placeholder="+628123456789"
            icon={<PhoneIcon />}
            {...form.register("whatsapp")}
          />
          <Input
            label="Email"
            id="email"
            placeholder="example@gmail.com"
            icon={<EnvelopeIcon />}
            {...form.register("email")}
          />
          <button className="btn btn-primary">Submit</button>
        </Form>
      </div>
      <ProTips />
    </div>
  );
}

export default IdeaForm;
