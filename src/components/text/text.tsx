import { HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type TextProps = HTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md" | "lg";
  asChild?: boolean
};

export function Text({ size = "md", asChild, className, ...rest }: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-lg": size === "lg",
      }, className)}
      {...rest}
    />
  );
}
