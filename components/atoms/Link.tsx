import NextLink, { LinkProps } from "next/link";

export default function Link({
  href,
  children,
  ...linkProps
}: LinkProps & {
  children?: React.ReactNode;
}) {
  return (
    <NextLink
      className="underline text-blue-500 hover:text-blue-800"
      href={href}
      {...linkProps}
    >
      {children}
    </NextLink>
  );
}
