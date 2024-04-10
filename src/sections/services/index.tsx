import { Heading } from '@/components';
import { HeadingContent } from '@/components/heading';
import '@/styles/sections/services.scss';
import { Service, ServiceContent } from './Service';
import Image from 'next/image';
import { Customers } from '..';
import getBase64 from '@/lib/getLocalBase64';
interface Props {
	bgLayout?: boolean;
}
const headingContent: HeadingContent = {
	title: 'Nuestros servicios',
	description: 'Nos respaldan 40 años de experiencia',
	isLarge: true,
	isCentered: false
};

export const Services = async ({ bgLayout = false }: Props) => {
	let HOST = process.env.HOST_URL;
	const plumaBaseUrl = await getBase64(`${HOST}/imagenes/pluma.webp`);
	const cargaBaseUrl = await getBase64(`${HOST}/imagenes/carga.webp`);
	const refrigeradosBaseUrl = await getBase64(
		`${HOST}/imagenes/refrigerados.webp`
	);

	const services: ServiceContent[] = [
		{
			serviceImage: (
				<Image
					src="/imagenes/carga.webp"
					className="service__bg"
					fill
					placeholder="blur"
					blurDataURL={cargaBaseUrl}
					alt="Camión de carga con paja"
				/>
			),
			serviceIcon: (
				<Image
					src={'/vectores/carga.svg'}
					width={150}
					height={150}
					alt="Icono de camión de carga"
				/>
			),
			title: 'Transporte de carga',
			description:
				'Transportamos tu carga desde 1 tonelada, contamos con ramplas planas desde los 12mt equipadas con amarras y carpas.',
			href: '/cargas'
		},
		{
			serviceImage: (
				<Image
					src="/imagenes/refrigerados.webp"
					fill
					placeholder="blur"
					blurDataURL={refrigeradosBaseUrl}
					alt="Camión pluma"
					className="service__bg"
				/>
			),
			serviceIcon: (
				<Image
					src={'/vectores/refrigerados.svg'}
					width={150}
					height={150}
					alt="Icono de camión refrigerado"
				/>
			),
			title: 'Transporte de refrigerados',
			description:
				'Vehículos con equipo de frío, capacidad para cargas secas y húmedas. Camiones de 14 palets y ramplas frigoríficas.',
			href: '/refrigerados'
		},
		{
			serviceImage: (
				<Image
					src="/imagenes/pluma.webp"
					fill
					placeholder="blur"
					blurDataURL={plumaBaseUrl}
					className="service__bg"
					alt="Camión pluma"
				/>
			),
			serviceIcon: (
				<Image
					src={'/vectores/pluma.svg'}
					width={150}
					height={150}
					alt="Icono de camión pluma"
				/>
			),
			title: 'Servicio de camiones pluma',
			description:
				'Contamos con Grúas Horquilla desde los 2.500 kg además de camión pluma para apoyar en labores de carga y descarga.',
			href: '/camiones-pluma'
		}
	];
	return (
		<section className={`services ${bgLayout ? 'bgLayout' : ''}`}>
			<Heading headingContent={headingContent} />
			<div className="services__container">
				{services.map((service) => (
					<Service serviceContent={service} key={service.title} />
				))}
			</div>
			<Customers bgLayout={bgLayout} />
		</section>
	);
};
