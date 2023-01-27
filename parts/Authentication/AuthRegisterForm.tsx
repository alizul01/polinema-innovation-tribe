import React from 'react';
import {InputFormTest} from "~/components/Form/InputForm";
import {useSupabase} from "~/components/Supabase/SupabaseProvider";
import {SubmitHandler, useForm} from "react-hook-form";
import AuthRegister from "~/data/Auth/AuthRegister";
import type {RegisterCredentials} from "~/app/(auth)/register/email/page";

function AuthRegisterForm() {
  const { supabase } = useSupabase();
  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (item: RegisterCredentials) => {
    let { data, error } = await supabase.auth.signUp({
      email: item.email,
      password: item.password,
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"mt-4 max-w-md flex flex-wrap"}
      >
        {AuthRegister.map((data, index) => (
          <InputFormTest
            key={index}
            label={data.label}
            placeholder={data.placeholder}
            id={data.id}
            type={data.type}
            register={register(data.id)}
            width={data?.width}
          />
        ))}
        <input
          className={
            "btn btn-primary"
          }
          type={"submit"}
        />
      </form>
    </>
  );
}

export default AuthRegisterForm;