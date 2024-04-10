import Image from 'next/image';
import { ReactNode } from 'react';

export interface ReviewContent {
	reviewImage: ReactNode;
	description: string;
	name: string;
}

interface Props {
	reviewContent: ReviewContent;
}

export const Review = ({ reviewContent }: Props) => {
	const { reviewImage, description, name } = reviewContent;

	return (
		<div className="review">
			<Image
				src="/imagenes/testimonios/quote.png"
				className="review__quote"
				alt="Comilla"
				width={64}
				height={64}
				fetchPriority="low"
			/>
			{reviewImage}
			<p>{description}</p>
			<span>{name}</span>
		</div>
	);
};
