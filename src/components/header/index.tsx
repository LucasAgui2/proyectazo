'use client';

import '@/styles/components/header.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from './Nav';
import { useState } from 'react';

interface Props {
	isFilled?: boolean;
}
export const Header = ({ isFilled = true }: Props) => {
	const [isOpen, setisOpen] = useState(false);

	return (
		<header
			className={`header ${isFilled ? 'bg-layout-darkest' : ''} ${
				isOpen ? 'open' : ''
			}`}>
			<div className="header__container">
				<Link
					className="header__logo-link"
					href={'/'}
					aria-label="Página principal">
					<Image
						src={'/vectores/logo.svg'}
						width={64}
						height={64}
						alt="Logo de Transportes Santa Clara"
						fetchPriority="high"
						priority
					/>
					<p>
						<span>Transportes</span>
						<span>Santa Clara</span>
					</p>
				</Link>
				<Nav isOpen={isOpen} setIsOpen={setisOpen} />
			</div>
		</header>
	);
};
