import { clsx } from 'clsx';
import { NextPage } from 'next';
import { HTMLAttributes } from 'react';
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: 'sm' | 'md' | 'lg';
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export const Heading: NextPage<HeadingProps> = ({
  level = 'h1',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const Comp = level;
  return (
    <Comp
      className={clsx(
        'font-bold fon-sans text-white',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
