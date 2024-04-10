import Link from 'next/link';
import { ReactNode } from 'react';

export interface ServiceContent {
	serviceImage: ReactNode;
	serviceIcon: ReactNode;
	title: string;
	description: string;
	href: string;
}

interface Props {
	serviceContent: ServiceContent;
}

export const Service = ({ serviceContent }: Props) => {
	const { serviceImage, serviceIcon, title, description, href } =
		serviceContent;
	return (
		<div className="service">
			{serviceImage}
			<div className="service__container">
				<div className="first-box">
					<h3>{title}</h3>
					{serviceIcon}
					<p>{description}</p>
				</div>
				<Link href={href}>Ver más</Link>
			</div>
		</div>
	);
};
