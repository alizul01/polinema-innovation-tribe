/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import AuthLogin from "~/data/Auth/AuthLogin";
import {InputFormTest} from "~/components/Form/InputForm";
import {useSupabase} from "~/components/Supabase/SupabaseProvider";
import {useForm} from "react-hook-form";
import type {LoginCredentials} from "~/app/(auth)/login/email/page";



function AuthLoginForm() {
  const { supabase } = useSupabase();
  const { register, handleSubmit } = useForm<LoginCredentials>();
  const onSubmit = async (item: LoginCredentials) => {
    console.log(item);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-unsafe-call
    const { data, error } = await supabase.auth.signInWithPassword({
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
        {AuthLogin.map((data, index) => (
          <InputFormTest
            key={index}
            label={data.label}
            placeholder={data.placeholder}
            id={data.id}
            type={data.type}
            register={register(data.id)}
            width={data.width}
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

export default AuthLoginForm;