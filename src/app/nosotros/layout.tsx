import { Header } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Servicios de transporte de carga | TSC',
	description:
		'Somos expertos en transporte de carga por carretera. Con más de 40 años de experiencia y una amplia red de colaboradores. Disponemos de una amplia red de vehículos a su disposición para prestarles nuestro servicio con la mayor calidad.',
	creator: 'Lucas Aguirre',
	keywords: [
		'contenedores',
		'transporte',
		'carga',
		'refrigerantes',
		'camiones',
		'camión',
		'camión pluma'
	],
	manifest: '/site.webmanifest',
	icons: {
		icon: '/favicon-32x32.png',
		apple: '/apple-touch-icon.png'
	},
	openGraph: {
		title: 'Servicios de transporte de carga | TSC',
		type: 'website',
		countryName: 'Chile',
		url: 'https://www.transportessantaclara.cl/nosotros/',
		description:
			'Somos expertos en transporte de carga por carretera. Con más de 40 años de experiencia y una amplia red de colaboradores. Disponemos de una amplia red de vehículos a su disposición para prestarles nuestro servicio con la mayor calidad.',
		siteName: 'transportessantaclara.cl'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Servicios de transporte de carga | TSC',
		description:
			'Líderes en transporte de carga en Chile. Brindamos soluciones logísticas eficientes y seguras. Nuestra flota moderna y equipo experto garantizan entregas puntuales y confiables. ¡Confía en nosotros para tus necesidades de transporte de carga hoy!',
		creator: '@lucasagui2205'
	},
	metadataBase: new URL('https://transportessantaclara.netlify.app')
};

export default function NosotrosLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
