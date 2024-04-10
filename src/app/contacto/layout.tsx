import { Header } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contacto | TSC',
	description:
		'¡Cotiza tu transporte ahora! Visita nuestro sitio para obtener más información, con más de 40 años de experiencia, somos expertos en el transporte de carga por carreta.',
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
		title: 'Contáctanos | Transportes Santa Clara',
		type: 'website',
		countryName: 'Chile',
		url: 'https://www.transportessantaclara.cl/contacto/',
		description:
			'¡Cotiza tu transporte ahora! Visita nuestro sitio para obtener más información, con más de 40 años de experiencia, somos expertos en el transporte de carga por carreta.',
		siteName: 'transportessantaclara.cl'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Transporte de cargas | Tansportes Santa Clara',
		description:
			'Líderes en transporte de carga en Chile. Brindamos soluciones logísticas eficientes y seguras. Nuestra flota moderna y equipo experto garantizan entregas puntuales y confiables. ¡Confía en nosotros para tus necesidades de transporte de carga hoy!',
		creator: '@lucasagui2205'
	},
	metadataBase: new URL('https://transportessantaclara.netlify.app')
};

export default function ContactoLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
