import '@/styles/components/footer.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CopyTextButton } from '..';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="first-box">
					<div className="footer__logo">
						<Link href={'/'} aria-label="Página principal">
							<Image
								src={'/vectores/logo.svg'}
								width={64}
								height={64}
								alt="Logo de Transportes Santa Clara"
							/>
							<p>
								<span>Transportes</span>
								<span>Santa Clara</span>
							</p>
						</Link>
					</div>
					<div className="footer__nav">
						<h3>Navegación</h3>
						<ul>
							<li>
								<Link href={'/contacto'}>Contacto</Link>
							</li>
							<li>
								<Link href={'/'}>Inicio</Link>
							</li>
							<li>
								<Link href={'/nosotros'}>Nosotros</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="second-box">
					<div className="footer__contact">
						<h3>Contáctanos</h3>
						<ul>
							<li>
								<a href="https://www.bing.com/maps?osid=ac07d5bd-acb2-4890-b3aa-ed3dabe9fd66&cp=-33.433977~-70.657213&lvl=16.95&pi=0&imgid=058e4a38-2b17-4245-813a-5480217baef6&v=2&sV=2&form=S00027">
									<svg>
										<use href="/vectores/sprite.svg#location"></use>
									</svg>
									<span>Morande #835, Chile</span>
								</a>
							</li>
							<li>
								<a href="tel:+56932438886">
									<svg>
										<use href="/vectores/sprite.svg#call"></use>
									</svg>
									<span>+56 9 3243 8886</span>
								</a>
							</li>
							<li className="mail">
								<CopyTextButton
									text={'transportes.sclara@gmail.com'}
									isLayout={true}
									content={
										<>
											<svg>
												<use href="/vectores/sprite.svg#email"></use>
											</svg>
											<span>transportes.sclara@gmail.com</span>
										</>
									}
								/>
							</li>
						</ul>
					</div>
					<div className="footer__media">
						<h3>Redes</h3>
						<ul>
							<li>
								<a
									href="https://www.instagram.com/transportes.santa.clara/"
									target="_blank"
									aria-label="Ir a la página de Instagram">
									<svg>
										<use href="/vectores/sprite.svg#instagram"></use>
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://wa.link/9758xy"
									target="_blank"
									aria-label="Ir a un chat directo">
									<svg>
										<use href="/vectores/sprite.svg#whatsapp"></use>
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/company/transportes-santa-clara"
									aria-label="Ir a la página de LinkedIn">
									<svg>
										<use href="/vectores/sprite.svg#linkedin"></use>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer__contact-md">
					<h3>Contáctanos</h3>
					<ul>
						<li>
							<a href="https://www.bing.com/maps?osid=ac07d5bd-acb2-4890-b3aa-ed3dabe9fd66&cp=-33.433977~-70.657213&lvl=16.95&pi=0&imgid=058e4a38-2b17-4245-813a-5480217baef6&v=2&sV=2&form=S00027">
								<svg>
									<use href="/vectores/sprite.svg#location"></use>
								</svg>
								<span>Morande #835, Chile</span>
							</a>
						</li>
						<li>
							<a href="tel:+56932438886">
								<svg>
									<use href="/vectores/sprite.svg#call"></use>
								</svg>
								<span>+56 9 3243 8886</span>
							</a>
						</li>
						<li className="mail">
							<CopyTextButton
								text={'transportes.sclara@gmail.com'}
								isLayout={true}
								content={
									<>
										<svg>
											<use href="/vectores/sprite.svg#email"></use>
										</svg>
										<span>transportes.sclara@gmail.com</span>
									</>
								}
							/>
						</li>
					</ul>
				</div>

				<p className="copy">&copy; 2024 por Transportes Mozo Spa. </p>
			</div>
		</footer>
	);
};
