import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://transportessantaclara.netlify.app/',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: 'https://transportessantaclara.netlify.app/cargas/',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: 'https://transportessantaclara.netlify.app/refrigerados/',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: 'https://transportessantaclara.netlify.app/camiones-pluma/',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: 'https://transportessantaclara.netlify.app/contacto/',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5
		},
		{
			url: 'https://transportessantaclara.netlify.app/nosotros/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5
		}
	];
}
