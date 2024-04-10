import Link from 'next/link';
import '@/styles/sections/about.scss';
import Image from 'next/image';
import getBase64 from '@/lib/getLocalBase64';

export const About = async () => {
	let HOST = process.env.HOST_URL;

	const nosotrosBaseUrl = await getBase64(`${HOST}/imagenes/nosotros.webp`);
	return (
		<section className="about">
			<Image
				src="/imagenes/nosotros.webp"
				fill
				placeholder="blur"
				blurDataURL={nosotrosBaseUrl}
				loading="lazy"
				className="about__bg"
				alt="Camión Mack Pinnacle amarillo"
			/>
			<div className="about__container">
				<h2>¿Quiénes somos?</h2>
				<p>
					Somos expertos en transporte de carga por carretera nos avalan más de
					40 años de experiencia y una amplia red de colaboradores.
				</p>
				<Link href={'/nosotros'} aria-label="Más información">
					Ver más información
				</Link>
			</div>
		</section>
	);
};
