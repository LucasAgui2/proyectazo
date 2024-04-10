'use client';
import Link from 'next/link';
import { useState } from 'react';
interface Props {
	path?: string;
}

export const Dropwdown = ({ path = '/' }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="header__dropdown">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`${path.includes('carga') ? 'selected' : ''}${
					path.includes('camiones-pluma') ? 'selected' : ''
				}${path.includes('refrigerados') ? 'selected' : ''}`}>
				<span>Servicios</span>
				<svg
					className={`transition-transform ${
						isOpen ? 'rotate-[-90deg]' : 'rotate-90'
					} `}>
					<use href="/vectores/sprite.svg#arrow-right"></use>
				</svg>
			</button>
			{isOpen ? (
				<div>
					<ul className="header__dropdown-links">
						<li
							className={`header__dropdown-link ${
								path === '/cargas' ? 'selected' : ''
							}`}>
							<Link
								href={'/cargas'}
								aria-label="Ir a la página de transporte de carga"
								data-tab="dl">
								Transporte de carga
							</Link>
						</li>
						<li
							className={`header__dropdown-link ${
								path === '/refrigerados' ? 'selected' : ''
							}`}>
							<Link
								href={'/refrigerados'}
								aria-label="Ir a la página de transporte de refrigerados"
								data-tab="dl">
								Transporte de refrigerados
							</Link>
						</li>
						<li
							className={`header__dropdown-link ${
								path === '/camiones-pluma' ? 'selected' : ''
							}`}>
							<Link
								href={'/camiones-pluma'}
								aria-label="Ir a la página del servicio de camiones pluma"
								data-tab="dl">
								Camiones pluma
							</Link>
						</li>
					</ul>
				</div>
			) : (
				''
			)}
		</div>
	);
};
