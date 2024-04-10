import { CopyTextButton } from '@/components';

export const ContactLinks = () => {
	return (
		<div className="contact__links">
			<a href="tel:+56932438886">
				<svg>
					<use href="/vectores/sprite.svg#call"></use>
				</svg>
				<span>+56 9 3243 8886</span>
			</a>
			<CopyTextButton
				text="transportes.sclara@gmail.com"
				isSecondary={true}
				content={
					<>
						<svg>
							<use href="/vectores/sprite.svg#email"></use>
						</svg>
						<span>transportes.sclara@gmail.com</span>
					</>
				}
			/>
		</div>
	);
};
