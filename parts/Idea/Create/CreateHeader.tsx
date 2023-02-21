export type HeaderProps = {
  title: string;
  slogan: string;
};

export default function Header({ slogan, title }: HeaderProps) {
  return (
    <div className={"text-start font-bold flex flex-col gap-1 "}>
      <span className={"text-3xl md:text-4xl"}>{title}</span>
      <span className={"text-purple-600"}>{slogan}</span>
    </div>
  );
}
