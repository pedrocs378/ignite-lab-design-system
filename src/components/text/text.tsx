import { ElementType, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export type TextProps = HTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md" | "lg";
  as?: ElementType;
};

export function Text({ size = "md", as = "span", ...rest }: TextProps) {
  const Component = as;

  return (
    <Component
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-lg": size === "lg",
      })}
      {...rest}
    />
  );
}
