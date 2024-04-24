import NextLink from "next/link";
import type { LinkProps } from "next/link";

interface MyLinkProps extends LinkProps {
  title: string;
}
export default function Link(props: MyLinkProps) {
  const { title, ...linkProps } = props;
  return (
    <NextLink
      {...linkProps}
      className="tansition hover:scale-105 duration-200 bg-slate-600 text-white font-bold border-2 border-slate-900 py-2 px-4 rounded-full"
    >
      {title}
    </NextLink>
  );
}
