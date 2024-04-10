import Link from 'next/link';
import { ReactNode } from 'react';
import '@/styles/sections/service.scss';
import { Customers } from '@/sections';

export interface ServiceContent {
	title: string;
	description: string;
	serviceImage: ReactNode;
}

interface Props {
	serviceContent: ServiceContent;
}

export const Service = ({ serviceContent }: Props) => {
	const { title, description, serviceImage } = serviceContent;
	return (
		<section className="sectionService">
			<div className="sectionService__container">
				<div className="first-box">
					<div className="sectionService__text-box">
						<h3>{title}</h3>
						<p>{description}</p>
						<Link href={'/contacto'}>Contáctanos</Link>
					</div>
					<div className="sectionService__imageContainer">{serviceImage}</div>
				</div>
				<div className="second-box">
					<div className="sectionService__info">
						<svg>
							<use href="/vectores/sprite.svg#info"></use>
						</svg>
						<p>No realizamos transporte de carga consolidada o paquetería.</p>
					</div>
				</div>
			</div>
			<Customers />
		</section>
	);
};
