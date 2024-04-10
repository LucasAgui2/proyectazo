'use client';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Review, ReviewContent } from './Review';
import Image from 'next/image';

const REVIEWS: ReviewContent[] = [
	{
		reviewImage: (
			<Image
				src="/imagenes/testimonios/customer-1.webp"
				alt="Cliente Eduardoo Norambuena"
				width={96}
				height={96}
			/>
		),
		description:
			'Excelente servicio, puntuales una cualidad muy importante, sobre todo cuando manejas tiempo de carga y descarga muy acotadas.',
		name: 'Eduardo Norambuena'
	},
	{
		reviewImage: (
			<Image
				src="/imagenes/testimonios/customer-2.webp"
				alt="Custom Pro Spa"
				width={96}
				height={96}
			/>
		),
		description:
			'En Transportes Santa Clara encontramos el servicio confiable que buscábamos. Son muy profesionales y flexibles, tenemos varios puntos de descarga.',
		name: 'Custom Pro Spa'
	},
	{
		reviewImage: (
			<Image
				src="/imagenes/testimonios/customer-3.webp"
				alt="Frigosur"
				width={96}
				height={96}
			/>
		),
		description:
			'Trabajamos con servicios puntuales de traslado principalmente ductos y equipos de refrigeración, podemos confiar en la seguridad de nuestra carga. Profesionales.',
		name: 'Frigosur'
	}
];

export const Carousel = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			{REVIEWS.map((review) => (
				<SwiperSlide key={review.name}>
					<Review reviewContent={review} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
