import { useFormContext } from "react-hook-form";

type ErrorProps = {
  name?: string;
};

export function Errors(props: ErrorProps) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!props.name) return null;

  const error = errors[props.name];
  if (error === undefined) return null;

  return (
    <label className="block mt-2">
      <span className="text-red-500">{error.message as string}</span>
    </label>
  );
}
