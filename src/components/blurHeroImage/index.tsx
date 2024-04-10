interface Props {
	fileName: string;
}

export const BlurHeroImage = ({ fileName }: Props) => {
	return (
		<div
			className="blur-load"
			style={{
				backgroundImage: `url(/imagenes/heroImages/${fileName}-small.webp)`
			}}>
			<img
				src={`/imagenes/heroImages/${fileName}-1080.webp`}
				srcSet={`/imagenes/heroImages/${fileName}-1080.webp 1080w, /imagenes/heroImages/${fileName}-768.webp 768w`}
			/>
		</div>
	);
};
