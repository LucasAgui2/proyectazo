import { ReactNode } from 'react';

export interface FeatureContent {
	featureIcon: ReactNode;
	title: string;
	description: string;
}

interface Props {
	featureContent: FeatureContent;
}

export const Feature = ({ featureContent }: Props) => {
	const { featureIcon, title, description } = featureContent;
	return (
		<div className="feature">
			{featureIcon}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};
