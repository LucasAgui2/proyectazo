import { Footer, Header } from '@/components';
import { LandingHero, LandingHeroContent } from '@/components/landingHero';
import getBase64 from '@/lib/getLocalBase64';
import { About, Contact, Customers, Features, Testimonials } from '@/sections';
import Image from 'next/image';

export default async function Home() {
	let HOST = process.env.HOST_URL;

	const blurDataUrl = await getBase64(`${HOST}/imagenes/hero-1.webp`);
	const landingHeroContent: LandingHeroContent = {
		heading: 'Servicios de Transporte de Carga ',
		subHeading: 'generales, pesadas, largas, volumen y especiales',
		description:
			'Disponemos de una amplia red de vehículos a su disposición para prestarles nuestro servicio con la mayor calidad.',
		bgImage: (
			<Image
				src="/imagenes/hero-1.webp"
				alt="Imagen de fondo"
				fill
				placeholder="blur"
				blurDataURL={blurDataUrl}
				className="landingHero__bg"
				fetchPriority="high"
				priority
			/>
		)
	};
	return (
		<>
			<Header isFilled={false} />
			<main>
				<LandingHero landingHeroContent={landingHeroContent} />
				<Customers />
				<About />
				<Features />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
