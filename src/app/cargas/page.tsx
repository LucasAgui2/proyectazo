import { Footer, Header } from '@/components';
import { About, Contact, Features, Service, Testimonials } from '@/sections';
import { Hero, HeroContent } from '@/sections/hero';
import { ServiceContent } from '../../sections/service';
import getBase64 from '@/lib/getLocalBase64';
import Image from 'next/image';

export default async function CargasPage() {
	let HOST = process.env.HOST_URL;
	const cargaBaseUrl = await getBase64(`${HOST}/imagenes/carga.webp`);
	const carga3BaseUrl = await getBase64(`${HOST}/imagenes/carga-3.webp`);
	const carga2BaseUrl = await getBase64(`${HOST}/imagenes/carga-2.webp`);
	const serviceBaseUrl = await getBase64(`${HOST}/imagenes/carga-s.webp`);
	const serviceContent: ServiceContent = {
		title: 'Transporte de carga exclusivo',
		description:
			'Nuestra empresa se dedica al transporte de cargas generales en equipos rampla plana. Nos adaptamos a las necesidades de nuestros clientes respecto a frecuencia, horarios y logística. Ya sea que necesites transportar peso o volumen, contamos con equipos planos de 28 Toneladas, de 12 y 13.5 metros de largo, además de la experiencia necesaria para garantizar la entrega segura y puntual de tu carga.',
		serviceImage: (
			<Image
				src="/imagenes/carga-s.webp"
				fill
				placeholder="blur"
				blurDataURL={serviceBaseUrl}
				alt="Camión Mack Pinnacle amarillo con otros camiones detrás"
			/>
		)
	};
	const heroContent: HeroContent = {
		heading: 'Transporte de cargas ',
		subHeading: 'transporte exclusivo en camión rampla plana',
		description:
			'Transporte de peso o volumen, contamos con equipos planos de 28 toneladas, de 12 y 13,5 metros de largo.',
		hasImage: true,
		imageCount: 2,
		heroImages: (
			<>
				<Image
					src="/imagenes/carga-3.webp"
					width={450}
					height={450}
					placeholder="blur"
					blurDataURL={carga3BaseUrl}
					className="hero__images-image-1"
					alt="Camión de carga con paja"
				/>
				<Image
					src="/imagenes/carga-2.webp"
					width={450}
					height={450}
					placeholder="blur"
					blurDataURL={carga2BaseUrl}
					alt="Camión pluma"
					className="hero__images-image-2"
				/>
			</>
		),
		bgImage: (
			<Image
				src="/imagenes/carga.webp"
				placeholder="blur"
				blurDataURL={cargaBaseUrl}
				fill
				alt="Imagen de camión de carga"
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
