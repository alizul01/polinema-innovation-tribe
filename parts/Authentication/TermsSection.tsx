import Link from "next/link";

type TermsSectionProps = {
  title: string;
};

export default function TermsSection({ title }: TermsSectionProps) {
  return (
    <div className="max-w-xl">
      <p className="text-gray-500 text-sm text-center">
        By clicking <span className="font-semibold">{title}</span>, you accept
        the{" "}
        <Link href="/terms" className="hover:underline cursor-pointer">
          terms and conditions
        </Link>{" "}
        of the Polinema Innovation Tribe.
      </p>
    </div>
  );
}
