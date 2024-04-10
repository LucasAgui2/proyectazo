import Image from 'next/image';

export const CustomerImages = () => {
	return (
		<>
			<Image
				src="/clientes/AGUNSA.png"
				className="customers__image stretched"
				width={300}
				height={100}
				alt="Logo de la empresa AGUNSA"
				fetchPriority="low"
			/>
			<Image
				src="/clientes/FERROVIAL.svg"
				className="customers__image"
				width={300}
				height={100}
				alt="Logo de la empresa FERROVIAL"
				fetchPriority="low"
			/>
			<Image
				src="/clientes/OTBECK.png"
				className="customers__image"
				width={150}
				height={100}
				alt="Logo de la empresa OTBECK"
				fetchPriority="low"
			/>
			<Image
				src="/clientes/PERI.svg"
				className="customers__image"
				width={200}
				height={100}
				alt="Logo de la empresa PERI"
				fetchPriority="low"
			/>
			<Image
				src="/clientes/SUROESTE.png"
				className="customers__image stretched"
				width={300}
				height={100}
				alt="Logo de la empresa SUROESTE"
				fetchPriority="low"
			/>
		</>
	);
};
