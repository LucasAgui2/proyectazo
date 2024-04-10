import { Heading } from '@/components';
import { HeadingContent } from '../../components/heading/index';
import '@/styles/sections/contact.scss';
import { ContactLinks } from './ContactLinks';
import { ContactForm } from './ContactForm';

const headingContent: HeadingContent = {
	title: 'Contáctanos',
	description: '¡Cotiza tu transporte ahora!',
	isCentered: true,
	isColorLayout: true
};

interface Props {
	paddingLarge?: boolean;
	isFirstSection?: boolean;
}

export const Contact = ({
	paddingLarge = false,
	isFirstSection = false
}: Props) => {
	return (
		<section
			className={`contact ${paddingLarge ? 'paddingLarge' : ''} ${
				isFirstSection ? 'firstSection' : ''
			}`}>
			<Heading headingContent={headingContent} />
			<div className="contact__container">
				<ContactLinks />
				<ContactForm />
			</div>
		</section>
	);
};
