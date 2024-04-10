'use client';

import { ClipLoader } from 'react-spinners';

export const Spinner = () => {
	return (
		<div className="spinner">
			<span>Cargando</span>
			<ClipLoader color="#ffffff" size={24} />
		</div>
	);
};
