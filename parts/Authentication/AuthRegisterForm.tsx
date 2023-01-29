import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputFormTest } from "~/components/Form/InputForm";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import AuthRegister from "~/data/Auth/AuthRegister";
import { AuthSchema, authSchema } from "./AuthSchema";

function AuthRegisterForm() {
  const { supabase } = useSupabase();
  const { register, handleSubmit, formState:{errors} } = useForm<AuthSchema>(
    {
      resolver: zodResolver(authSchema)
    }
  );
  const onSubmit: SubmitHandler<AuthSchema> = async (item: AuthSchema) => {
    const { data, error } = await supabase.auth.signUp({
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
            width={data.width}
          />
        ))}
        <input
          className={
            "btn btn-primary"
          }
          type={"submit"}
          onClick={console.log(errors)}
        />
      </form>
    </>
  );
}

export default AuthRegisterForm;