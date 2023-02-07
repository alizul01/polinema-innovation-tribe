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
    <label className="label">
      <span className="label-text text-error">{error.message as string}</span>
    </label>
  );
}
