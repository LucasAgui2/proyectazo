interface EmailTemplateProps {
	firstName: string;
	email?: string;
	phone: string;
	message: string;
	pathName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	firstName,
	email,
	phone,
	message,
	pathName
}) => (
	<div>
		<h1>Nombre: {firstName}</h1>
		<h2>Correo: {email}</h2>
		<h2>Teléfono: {phone}</h2>
		<h2>Mensaje: {message}</h2>
		<p>Correo enviado desde: {pathName}</p>
	</div>
);
