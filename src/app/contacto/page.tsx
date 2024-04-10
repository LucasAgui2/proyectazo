import { Footer, Header } from '@/components';
import { Services, About, Features, Testimonials, Contact } from '@/sections';

export default function ContactoPage() {
	return (
		<>
			<Header />
			<main>
				<Contact paddingLarge={true} isFirstSection={true} />
				<Services />
				<About />
				<Features />
				<Testimonials />
			</main>
			<Footer />
		</>
	);
}
