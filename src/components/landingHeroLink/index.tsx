'use client';

import Link from 'next/link';

export const LandingHeroLink = () => {
	return (
		<Link className="landingHero__cta" href={'/contacto'}>
			Cotizar ahora
		</Link>
	);
};
