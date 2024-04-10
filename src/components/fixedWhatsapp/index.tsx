import '@/styles/components/fixedWhatsapp.scss';

export const FixedWhatsapp = () => {
	return (
		<div className="fixedWhatsapp">
			<a
				href="https://wa.link/9758xy"
				target="_blank"
				aria-label="Mensaje directo Whatsapp">
				<svg>
					<use href="/vectores/sprite.svg#whatsapp"></use>
				</svg>
			</a>
		</div>
	);
};
