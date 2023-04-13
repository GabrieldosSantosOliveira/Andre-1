import { clsx } from 'clsx';
import { NextPage } from 'next';
import { ButtonHTMLAttributes } from 'react';

import { Loading } from './Loading';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}
export const Button: NextPage<ButtonProps> = ({
  className,
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      className={clsx(
        'bg-button rounded border-r-2 border-[#1A1A1A] border-solid py-3 px-4 flex justify-between items-center',
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <div className="flex flex-1 justify-center items-center">
          <Loading />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
