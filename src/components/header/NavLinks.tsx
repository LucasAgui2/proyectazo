'use client';

import Link from 'next/link';
import { Dropwdown } from './Dropwdown';
import { usePathname } from 'next/navigation';

interface Props {
	isOpen?: boolean;
}
export const NavLinks = ({ isOpen = false }: Props) => {
	const path = usePathname();

	return (
		<div className={`header__nav-links ${isOpen ? 'open' : ''}`}>
			<ul className="header__nav-links-list">
				<li
					className={`${
						path === '/'
							? 'text-layout md:text-primary bg-primary md:bg-transparent'
							: ''
					}`}>
					<Link href={'/'} aria-label="Ir a la página de inicio">
						Inicio
					</Link>
				</li>
				<li className="dropdown">
					<Dropwdown path={path} />
				</li>
				<li
					className={`${
						path === '/nosotros'
							? 'text-layout md:text-primary bg-primary md:bg-transparent'
							: ''
					}`}>
					<Link
						href={`/nosotros`}
						aria-label="Ir a la página de información de la empresa">
						Nosotros
					</Link>
				</li>
				<li
					className={`${
						path === '/contacto'
							? 'text-layout md:text-primary bg-primary md:bg-transparent'
							: ''
					}`}>
					<Link href={`/contacto`} aria-label="Ir a la página de contacto">
						Contacto
					</Link>
				</li>
			</ul>
		</div>
	);
};
