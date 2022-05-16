import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type Props = {
  as: string;
  href: string;
  children: React.ReactNode;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const Link = ({ as, href, children, ...rest }: Props) => {
  return (
    <NextLink href={href} as={as}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

export default Link;
