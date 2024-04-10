import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/index.scss';
import { FixedWhatsapp } from '@/components';
import PHProvider, { CSPostHogProvider } from './providers';
let HOST = process.env.HOST_URL;
const montserrat = Montserrat({
	weight: ['400', '500', '600'],
	variable: '--font-montserrat',
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'Transporte de cargas | TSC',
	description:
		'Líderes en transporte de carga en Chile. Brindamos soluciones logísticas eficientes y seguras. Nuestra flota moderna y equipo experto garantizan entregas puntuales y confiables. ¡Confía en nosotros para tus necesidades de transporte de carga hoy!',
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
		title: 'Transporte de cargas | TSC',
		type: 'website',
		countryName: 'Chile',
		url: 'https://www.transportessantaclara.cl/',
		description:
			'Líderes en transporte de carga en Chile. Brindamos soluciones logísticas eficientes y seguras. Nuestra flota moderna y equipo experto garantizan entregas puntuales y confiables. ¡Confía en nosotros para tus necesidades de transporte de carga hoy!',
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

<link />;

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<PHProvider>
				<body className={montserrat.className}>
					<FixedWhatsapp />
					{children}
				</body>
			</PHProvider>
		</html>
	);
}
