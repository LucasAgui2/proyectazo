'use client';

import { Spinner } from '@/components';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function getPathName(path: string): string {
	if (path === '/') return 'Página de inicio';
	if (path === '/contacto') return 'Página de contacto';
	if (path === '/nosotros') return 'Página sobre nosotros';
	if (path === '/cargas') return 'Página de servicio de transportes de carga';
	if (path === '/camiones-pluma') return 'Página de servicio de camiones pluma';
	if (path === '/refrigerados')
		return 'Página de servicio de transporte de refrigerados';

	return 'Página de inicio';
}

export const ContactForm = () => {
	const path = usePathname();
	const pathName = getPathName(path);
	console.log(path);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [sended, setSended] = useState(false);
	const [error, setError] = useState(false);
	return (
		<form
			action={'#'}
			className="form"
			onSubmit={async (e) => {
				e.preventDefault();
				setIsLoading(true);
				const formData = {
					name: name,
					email: email,
					phone: phone,
					message: message,
					pathName: pathName
				};
				const res = await fetch('/api/send', {
					method: 'POST',
					body: JSON.stringify(formData),
					headers: {
						'Content-Type': 'application/json'
					}
				});
				setIsLoading(false);
				if (res.ok) {
					const data = await res.json();
					setSended(true);
					console.log(data);
				} else {
					setError(true);
					setIsLoading(false);
				}
			}}>
			<div className="form__input-container">
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Tu nombre"
					required
				/>
				<label htmlFor="name">
					Nombre<span>*</span>
				</label>
			</div>
			<div className="form__input-container">
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="ejemplo@gmail.com"
					required
				/>
				<label htmlFor="email">
					Correo electrónico<span>*</span>
				</label>
			</div>
			<div className="form__input-container">
				<input
					type="tel"
					id="tel"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder="+56 9 1234-5678"
					required
				/>
				<label htmlFor="tel">Teléfono</label>
			</div>
			<div className="form__input-container">
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					id="message"
					rows={2}
					placeholder="Tu consulta"
					required
				/>
				<label htmlFor="message">
					Mensaje<span>*</span>
				</label>
			</div>
			<button
				type="submit"
				className={`${error ? 'disabled' : ''} ${sended ? 'sended' : ''}`}
				disabled={error || sended}>
				{isLoading
					? 'Enviando...'
					: sended
					? 'Correo enviado 🎉'
					: error
					? 'Ha ocurrido un error'
					: 'Enviar'}
			</button>
			{isLoading ? <Spinner /> : ''}
			{error ? (
				<p className="contact__errorMessage">
					Por favor comunicate con nosotros por{' '}
					<a href="https://wa.link/9758xy" target="_blank">
						Whatsapp
					</a>
				</p>
			) : (
				''
			)}
		</form>
	);
};
