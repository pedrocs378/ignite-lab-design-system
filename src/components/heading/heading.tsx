import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  size?: "sm" | "md" | "lg";
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading({ size = "md", as = "h2", ...rest }: HeadingProps) {
  const Component = as;

  return (
    <Component
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
      {...rest}
    />
  );
}
