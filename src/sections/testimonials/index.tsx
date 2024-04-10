import { Heading } from '@/components';
import { HeadingContent } from '@/components/heading';
import '@/styles/sections/testimonials.scss';
import { Carousel } from './Carousel';

const headingContent: HeadingContent = {
	title: 'Testimonios',
	description: 'Que dicen nuestros clientes',
	isLarge: false,
	isCentered: true,
	isColorPrimary: true
};

export const Testimonials = () => {
	return (
		<section className="testimonials">
			<img
				src="/imagenes/testimonios/customer-1915.webp"
				srcSet="/imagenes/testimonios/customer-1915.webp 1915w, /imagenes/testimonios/customer-1436.webp 1436w, /imagenes/testimonios/customer-958.webp 958w, /imagenes/testimonios/customer-476.webp 476w"
				alt="Testimonios"
				className="testimonials__bg"
				fetchPriority="low"
			/>
			<Heading headingContent={headingContent} />
			<div className="testimonials__container">
				<Carousel />
			</div>
		</section>
	);
};
