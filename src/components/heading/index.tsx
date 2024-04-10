import '@/styles/components/heading.scss';

export interface HeadingContent {
	title: string;
	description: string;
	isLarge?: boolean;
	isCentered?: boolean;
	isColorLayout?: boolean;
	isColorPrimary?: boolean;
}
interface Props {
	headingContent: HeadingContent;
}
const defaultParameters: HeadingContent = {
	title: 'Título',
	description: 'Una buena descripción',
	isLarge: false,
	isCentered: false,
	isColorLayout: false,
	isColorPrimary: false
};

export const Heading = ({ headingContent = defaultParameters }: Props) => {
	const {
		title,
		description,
		isLarge,
		isCentered,
		isColorLayout,
		isColorPrimary
	} = headingContent;

	return (
		<div
			className={`heading ${isLarge ? 'isLarge' : ''} ${
				isCentered ? 'text-center' : ''
			}`}>
			<h2
				className={`${isColorPrimary ? 'primary' : ''}${
					isColorLayout ? 'layout' : ''
				}`}>
				{title}
			</h2>
			<p className={`${isColorLayout ? 'layout' : ''}`}>{description}</p>
		</div>
	);
};
