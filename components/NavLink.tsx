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
    <Link href={props.href}>
      <span className={pathname === props.href ? props.activeClass : ""}>
        {props.children}
      </span>
    </Link>
  );
}
