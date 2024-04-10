import { Footer, Header } from '@/components';
import {
	About,
	Company,
	Contact,
	Features,
	Hero,
	Services,
	Testimonials
} from '@/sections';
import { HeroContent } from '@/sections/hero';
import getBase64 from '@/lib/getLocalBase64';
import Image from 'next/image';

export default async function NosotrosPage() {
	let HOST = process.env.HOST_URL;
	const nosotrosBaseUrl = await getBase64(`${HOST}/imagenes/nosotros.webp`);
	const nosotrosHeroBaseUrl = await getBase64(
		`${HOST}/imagenes/nosotros-hero.webp`
	);
	const heroContent: HeroContent = {
		heading: 'Somos expertos en transporte de carga por carretera ',
		subHeading:
			'con más de 40 años de experiencia y una amplia red de colaboradores',
		description:
			'Disponemos de una amplia red de vehículos a su disposición para prestarles nuestro servicio con la mayor calidad.',
		hasImage: true,
		imageCount: 1,
		heroImages: (
			<>
				<Image
					src="/imagenes/nosotros-hero.webp"
					width={450}
					height={450}
					placeholder="blur"
					blurDataURL={nosotrosHeroBaseUrl}
					alt="Camión Mack Pinnacle amarillo con atardecer de fondo"
					className="hero__images-image-1"
				/>
			</>
		),
		bgImage: (
			<Image
				src="/imagenes/nosotros.webp"
				alt="Camión Mack Pinnacle amarillo"
				fill
				placeholder="blur"
				blurDataURL={nosotrosBaseUrl}
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
				<Hero heroContent={heroContent} />
				<Company />
				<Services bgLayout={true} />
				<About />
				<Features />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
