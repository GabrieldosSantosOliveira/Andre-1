import { clsx } from 'clsx';
import { NextPage } from 'next';
import { HTMLAttributes } from 'react';
export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
}
export const Text: NextPage<TextProps> = ({
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        'font-bold fon-sans ',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-base': size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
