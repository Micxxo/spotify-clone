'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const router = useRouter();

	const handleLogout = () => {
		// handle Logout
	};
	return (
		<div
			className={twMerge(
				` h-fit bg-gradient-to-b from-emerald-800 p-6`,
				className
			)}
		>
			<div className="w-full mb-4 flex items-center justify-between">
				<div className="hidden md:flex gap-x-2 items-center">
					<button
						title="back"
						onClick={() => router.back()}
						className=" rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
					>
						<RxCaretLeft size={35} className=" text-white" />
					</button>
					<button
						title="forward"
						onClick={() => router.forward()}
						className=" rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
					>
						<RxCaretRight size={35} className=" text-white" />
					</button>
				</div>
				<div className=" flex md:hidden gap-x-2 items-center">
					<button
						title="home"
						className=" rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
					>
						<HiHome className=" text-black" size={20} />
					</button>
					<button
						title="home"
						className=" rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
					>
						<BiSearch className=" text-black" size={20} />
					</button>
				</div>
				<div className=" flex justify-between items-center gap-x-4">
					<>
						<div>
							<Button>Sign up</Button>
						</div>
					</>
				</div>
			</div>
		</div>
	);
};

export default Header;
