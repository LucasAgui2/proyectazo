import { About, Features, Testimonials, Contact, Service } from '@/sections';
import { Hero, HeroContent } from '@/sections/hero';
import { Footer, Header } from '@/components';
import { ServiceContent } from '@/sections/service';
import getBase64 from '@/lib/getLocalBase64';
import Image from 'next/image';

export default async function RefrigeradosPage() {
	let HOST = process.env.HOST_URL;
	const refrigeradosBaseUrl = await getBase64(
		`${HOST}/imagenes/refrigerados.webp`
	);
	const serviceBaseUrl = await getBase64(
		`${HOST}/imagenes/refrigerados-s.webp`
	);
	const serviceContent: ServiceContent = {
		title: 'Transporte de cargas secas y húmedas',
		description:
			'Nuestra empresa se dedica al transporte de cargas generales en equipos rampla plana. Nos adaptamos a las necesidades de nuestros clientes respecto a frecuencia, horarios y logística. Ya sea que necesites transportar peso o volumen, contamos con equipos planos de 28 Toneladas, de 12 y 13.5 metros de largo, además de la experiencia necesaria para garantizar la entrega segura y puntual de tu carga.',
		serviceImage: (
			<Image
				src="/imagenes/refrigerados-s.webp"
				placeholder="blur"
				fill
				blurDataURL={serviceBaseUrl}
				alt="Camión con equipo de frío en la noche"
			/>
		)
	};
	const heroContent: HeroContent = {
		heading: 'Transporte de refrigerados ',
		subHeading: 'transporte exclusivo en camión rampla plana.',
		description:
			'Transportes preparados con equipo de frío. Más de 14 palets y ramplas frigorificas.',
		hasImage: true,
		imageCount: 1,
		heroImages: (
			<>
				<Image
					src="/imagenes/refrigerados.webp"
					width={400}
					height={400}
					placeholder="blur"
					blurDataURL={refrigeradosBaseUrl}
					className="hero__images-image-2"
					alt="Camión con equipo de frío"
				/>
			</>
		),
		bgImage: (
			<Image
				src="/imagenes/refrigerados.webp"
				placeholder="blur"
				blurDataURL={refrigeradosBaseUrl}
				fill
				alt="Imagen de camión con equipo de frío"
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
