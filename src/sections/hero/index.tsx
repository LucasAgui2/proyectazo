import '@/styles/sections/hero.scss';
import { ReactNode } from 'react';
import { HeroLink } from '@/components';

export interface HeroContent {
	heading: string;
	subHeading: string;
	description: string;
	hasImage: boolean;
	heroImages?: ReactNode;
	bgImage: ReactNode;
	imageCount: number;
}

interface Props {
	heroContent: HeroContent;
}

export const Hero = ({ heroContent }: Props) => {
	const {
		heading,
		subHeading,
		description,
		hasImage,
		bgImage,
		heroImages,
		imageCount
	} = heroContent;
	return (
		<section className={`hero firstSection ${!hasImage ? 'noImage' : ''}`}>
			<div className="hero__bg">{bgImage}</div>
			<div className="hero__container">
				<div className="hero__text-box">
					<div className="first-box">
						<h1>{heading}</h1>
						<span>{subHeading}</span>
					</div>
					<div className="second-box">
						<p>{description}</p>
						<HeroLink />
					</div>
				</div>
				{hasImage ? (
					<div
						className={`hero__images ${
							imageCount === 1
								? 'single'
								: imageCount === 2
								? 'double'
								: 'default'
						}`}>
						{heroImages}
					</div>
				) : (
					''
				)}
			</div>
		</section>
	);
};
