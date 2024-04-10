'use client';

interface Props {
	setIsOpen: Function;
	isOpen: boolean;
}
export const MobileNav = ({ isOpen, setIsOpen }: Props) => {
	return (
		<div className="header__mobile-nav md:hidden">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`menu ${isOpen ? 'open' : ''}`}
				aria-label="Abrir navegación">
				<svg>
					<use href="/vectores/sprite.svg#menu"></use>
				</svg>
			</button>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`close  ${isOpen ? 'open' : ''}`}
				aria-label="Cerrar navegación">
				<svg>
					<use href="/vectores/sprite.svg#close"></use>
				</svg>
			</button>
		</div>
	);
};
