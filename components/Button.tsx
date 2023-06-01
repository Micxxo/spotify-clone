import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, type = 'Button', ...props }, ref) => {
		return (
			<button
				type={type}
				title="button"
				className={twMerge(
					` w-full rounded-full bg-green-500 px-3 border border-transparent py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black hover:opacity-75 font-bold transition`,
					className
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;