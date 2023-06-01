import Sidebar from '@/components/sidebar';
import './globals.css';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata = {
	title: 'Sproutify',
	description: 'isten To Music',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={figtree.className}>
				<Sidebar>{children}</Sidebar>
			</body>
		</html>
	);
}

