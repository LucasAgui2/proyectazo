import { Header } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Servicio de Camiones Pluma | TSC',
	description:
		'Servicio de camiones pluma, cargas y arriendo por hora. Ofrecemos transporte de modulos y contenedores con capacidad hasta 20 toneladas.',
	creator: 'Lucas Aguirre',
	keywords: [
		'contenedores',
		'transporte',
		'carga',
		'refrigerantes',
		'camiones',
		'camion',
		'pluma',
		'cotizar',
		'cotizar ahora',
		'grua',
		'grúa',
		'camion pluma',
		'pluma'
	],
	manifest: '/site.webmanifest',
	icons: {
		icon: '/favicon-32x32.png',
		apple: '/apple-touch-icon.png'
	},
	openGraph: {
		title: 'Servicio de Camiones Pluma | TSC',
		type: 'website',
		countryName: 'Chile',
		url: 'https://www.transportessantaclara.cl/camiones-pluma/',
		description:
			'Servicio de camiones pluma, cargas y arriendo por hora. Ofrecemos transporte de modulos y contenedores con capacidad hasta 20 toneladas.',
		siteName: 'transportessantaclara.cl'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Servicio de Camiones Pluma | TSC',
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
			<Header isFilled={false} />
			{children}
		</>
	);
}
