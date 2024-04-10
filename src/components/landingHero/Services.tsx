import Image from 'next/image';
import { LandingHeroServiceContent, Service } from './Service';

const SERVICES: LandingHeroServiceContent[] = [
	{
		title: 'Transporte de carga',
		description:
			'Transportamos tu carga desde 1 tonelada, contamos con ramplas planas desde los 12mt equipadas con amarras y carpas.',
		icon: (
			<Image
				src={'/vectores/carga-b.svg'}
				width={200}
				height={100}
				fetchPriority="high"
				alt="Icono de camión de carga"
			/>
		),
		href: '/cargas'
	},
	{
		title: 'Transporte de refrigerados',
		description:
			'Vehículos con equipo de frío, capacidad para cargas secas y húmedas. Camiones de 14 palets y ramplas frigorificas.',
		icon: (
			<Image
				src={'/vectores/refrigerados-b.svg'}
				width={150}
				height={75}
				fetchPriority="high"
				alt="Icono de camión de carga"
			/>
		),
		href: '/refrigerados'
	},
	{
		title: 'Camiones Pluma',
		description:
			'Contamos con Grúas Horquilla desde los 2.500 kg además de camión pluma para apoyar en labores de carga y descarga.',
		icon: (
			<Image
				src={'/vectores/pluma-b.svg'}
				width={150}
				height={75}
				fetchPriority="high"
				alt="Icono de camión de carga"
			/>
		),
		href: '/camiones-pluma'
	}
];

export const Services = () => {
	return (
		<div className="landingHero__services">
			{SERVICES.map((service) => (
				<Service landingHeroServiceContent={service} key={service.title} />
			))}
		</div>
	);
};
