import Link from 'next/link';
import { ReactNode } from 'react';

export interface LandingHeroServiceContent {
	description: string;
	href: string;
	icon: ReactNode;
	title: string;
}

interface Props {
	landingHeroServiceContent: LandingHeroServiceContent;
}

export const Service = ({ landingHeroServiceContent }: Props) => {
	const { title, icon, description, href } = landingHeroServiceContent;

	return (
		<Link
			className="landingHero__service"
			href={href}
			aria-label="Enlace a página de servicio">
			<div className="landingHero__service-img">
				<h2>{title}</h2>
				{icon}
			</div>
			<div className="landingHero__service-desc">
				<p>{description}</p>
				<span>
					<span>Ver más</span>
					<svg>
						<use href="/vectores/sprite.svg#arrow-right-2"></use>
					</svg>
				</span>
			</div>
		</Link>
	);
};
