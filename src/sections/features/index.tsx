import { Heading } from '@/components';
import { HeadingContent } from '@/components/heading';
import '@/styles/sections/features.scss';
import { Feature, FeatureContent } from './Feature';
import Link from 'next/link';

const headingContent: HeadingContent = {
	title: '¿Por qué elegirnos?',
	description: 'Te ofrecemos',
	isLarge: false,
	isCentered: true
};

const features: FeatureContent[] = [
	{
		featureIcon: (
			<svg>
				<use href="/vectores/sprite.svg#security"></use>
			</svg>
		),
		title: 'Seguridad',
		description:
			'Somos una empresa en la que nuestros clientes puedan confiar, contamos con seguro de carga y realizamos mantenciones periódicas.'
	},
	{
		featureIcon: (
			<svg>
				<use href="/vectores/sprite.svg#colabo"></use>
			</svg>
		),
		title: 'Colaboración',
		description:
			'Cooperamos y trabajamos en equipo con nuestros clientes y proveedores, asegurando un trabajo íntegro y sin retrasos en su ejecución.'
	},
	{
		featureIcon: (
			<svg>
				<use href="/vectores/sprite.svg#flexibility"></use>
			</svg>
		),
		title: 'Flexibilidad',
		description:
			'Nos adaptamos a cambios y necesidades particulares. Ofrecemos soluciones integrales a sus problemas con una amplia red de colaboradores.'
	}
];

export const Features = () => {
	return (
		<section className={`features`}>
			<Heading headingContent={headingContent} />
			<div className="features__container">
				{features.map((feature) => (
					<Feature featureContent={feature} key={feature.title} />
				))}
			</div>
		</section>
	);
};
