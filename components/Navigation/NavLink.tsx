import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
  activeClass: string;
};

export function NavLink(props: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname();
  return (
    <Link
      href={props.href}
      className={"group text-purple-400 transition-all duration-300 ease-in-out"}
    >
      <span
        className={[
          pathname === props.href ? props.activeClass : "",
          "bg-left-bottom bg-gradient-to-r from-purple-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ",
        ].join(" ")}
      >
        {props.children}
      </span>
    </Link>
  );
}
