'use client';
import Link from 'next/link';

export const HeroLink = () => {
	return (
		<Link className="cta" href={'/contacto'}>
			Cotizar ahora
		</Link>
	);
};
