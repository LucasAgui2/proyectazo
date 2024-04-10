import '@/styles/sections/landingHero.scss';
import { LandingHeroLink } from '@/components';
import { ReactNode } from 'react';
import { Services } from './Services';

export interface LandingHeroContent {
	heading: string;
	subHeading: string;
	description: string;
	bgImage: ReactNode;
}

interface Props {
	landingHeroContent: LandingHeroContent;
}

export const LandingHero = ({ landingHeroContent }: Props) => {
	const { heading, subHeading, description, bgImage } = landingHeroContent;
	return (
		<section className="landingHero firstSection">
			<div className="landingHero__bg">{bgImage}</div>
			<div className="landingHero__container">
				<div className="first-box">
					<h1>{heading}</h1>
					<span>{subHeading}</span>
				</div>
				<div className="second-box">
					<Services />
				</div>

				<div className="third-box">
					<p>{description}</p>
					<LandingHeroLink />
				</div>
			</div>
		</section>
	);
};
