import Link from 'next/link';
import '@/styles/sections/company.scss';

export const Company = () => {
	return (
		<section className="company">
			<div className="company__container">
				<div className="first-box">
					<h3>¿Quiénes somos?</h3>
					<p>
						<span>
							Somos la opción preferida de empresas y particulares que buscan
							seguridad, eficiencia y calidad.
						</span>
						<span>
							Contamos con un equipo altamente calificado y comprometido en
							superar tus expectativas. Desde nuestros conductores hasta nuestro
							personal administrativo, todos trabajamos en conjunto para
							brindarte el mejor servicio posible.
						</span>
						<span>
							En Transportes Santa Clara, nos aseguramos de que tu carga llegue
							a su destino de manera segura y puntual. Contamos con  GPS y
							seguro de carga.
						</span>
						<Link href={'/contacto'}>Contáctanos</Link> para resolver tus dudas.
					</p>
				</div>
				<img
					src="/imagenes/company/company-3677.webp"
					srcSet="/imagenes/company/company-3677.webp 3677w, /imagenes/company/company-2615.webp 2615w, /imagenes/company/company-1307.webp 1307w, /imagenes/company/company-1024.webp 1024w, /imagenes/company/company-640.webp 640w"
					alt="Camión Mack Pinnacle amarillo"
				/>
			</div>
		</section>
	);
};
