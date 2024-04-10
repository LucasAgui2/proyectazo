import { Header } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Transporte de cargas | TSC',
	description:
		'Transporte de cargas, camión rampa plana, peso o volumen. Contamos con equipos planos de 28 toneladas, de 12 y 13,5 metros de largo.',
	creator: 'Lucas Aguirre',
	keywords: [
		'contenedores',
		'transporte',
		'carga',
		'refrigerantes',
		'camiones',
		'camión',
		'camión pluma',
		'cotizar',
		'cotizar ahora'
	],
	manifest: '/site.webmanifest',
	icons: {
		icon: '/favicon-32x32.png',
		apple: '/apple-touch-icon.png'
	},
	openGraph: {
		title: 'Transporte de cargas | TSC',
		type: 'website',
		countryName: 'Chile',
		url: 'https://www.transportessantaclara.cl/cargas/',
		description:
			'Transporte de cargas, camión rampa plana, peso o volumen. Contamos con equipos planos de 28 toneladas, de 12 y 13,5 metros de largo.',
		siteName: 'transportessantaclara.cl'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Transporte de cargas | TSC',
		description:
			'Líderes en transporte de carga en Chile. Brindamos soluciones logísticas eficientes y seguras. Nuestra flota moderna y equipo experto garantizan entregas puntuales y confiables. ¡Confía en nosotros para tus necesidades de transporte de carga hoy!',
		creator: '@lucasagui2205'
	},
	metadataBase: new URL('https://transportessantaclara.netlify.app')
};

export default function CamionesPlumaLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
