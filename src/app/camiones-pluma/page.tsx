import { Footer, Header } from '@/components';
import getBase64 from '@/lib/getLocalBase64';
import { About, Features, Testimonials, Contact, Service } from '@/sections';
import { Hero, HeroContent } from '@/sections/hero';
import { ServiceContent } from '@/sections/service';
import Image from 'next/image';

export default async function CamionesPlumaPage() {
	let HOST = process.env.HOST_URL;
	const plumaBaseUrl = await getBase64(`${HOST}/imagenes/pluma.webp`);
	const serviceBaseUrl = await getBase64(`${HOST}/imagenes/pluma-s.webp`);

	const serviceContent: ServiceContent = {
		title: 'Servicio de camiones pluma',
		description:
			'Nuestra empresa ofrece servicios de transporte de cargas y arriendo por hora de camiones pluma, Nos adaptamos a las necesidades de nuestros clientes solucionando sus requerimientos. Ya sea que necesites transportar un módulo o contenedores de 20 o 40 Pies, contamos con equipos con capacidades hasta 20 Toneladas, de 12 metros de largo, además de la experiencia necesaria para garantizar la entrega de un servicio seguro y confiable.',
		serviceImage: (
			<Image
				src="/imagenes/pluma-s.webp"
				fill
				placeholder="blur"
				blurDataURL={serviceBaseUrl}
				alt="Camión pluma cargando un contenedor"
			/>
		)
	};

	const heroContent: HeroContent = {
		heading: 'Servicio de camiones pluma ',
		subHeading: 'cargas y arriendo por hora.',
		description:
			'Transporte de modulos y contenedores con capacidad hasta 20 toneladas.',
		hasImage: true,
		imageCount: 1,
		heroImages: (
			<>
				<Image
					src="/imagenes/pluma.webp"
					width={450}
					height={450}
					placeholder="blur"
					blurDataURL={plumaBaseUrl}
					alt="Camión pluma"
					className="hero__images-image-1"
				/>
			</>
		),
		bgImage: (
			<Image
				src="/imagenes/pluma.webp"
				placeholder="blur"
				blurDataURL={plumaBaseUrl}
				fill
				alt="Imagen de fondo"
				fetchPriority="high"
				priority
			/>
		)
	};
	return (
		<>
			<Header />
			<main>
				<Hero heroContent={heroContent} />
				<Service serviceContent={serviceContent} />
				<About />
				<Features />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
