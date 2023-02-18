import Link from "next/link";

type AuthOptionProps = {
  ask: "Not Yet" | "Registered";
};

export function AuthOption({ ask }: AuthOptionProps) {
  const text =
    ask === "Registered" ? "Already Registered?" : "Don't have Account Yet?";
  const linkText = ask === "Registered" ? "Login" : "Register Now!";
  const linkHref = ask === "Registered" ? "/login" : "/register";

  return (
    <div className="text-center w-full font-semibold text-gray-200">
      <p>{text}</p>
      <Link href={linkHref} className="text-purple-500 hover:text-purple-600">
        {linkText}
      </Link>
    </div>
  );
}
