'use client';

import '@/styles/components/copyTextButton.scss';
import { ReactNode, useState } from 'react';

interface Props {
	text: string;
	isLayout?: boolean;
	isSecondary?: boolean;
	content: ReactNode;
}

export const CopyTextButton = ({
	text,
	isLayout = false,
	isSecondary = false,
	content
}: Props) => {
	const [copied, setCopied] = useState(false);
	function copy(flag = true) {
		if (flag) {
			navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 1500);
		}
	}
	return (
		<button
			aria-label="Copiar contenido"
			className={`copyTextButton ${
				isLayout ? 'layout' : isSecondary ? 'secondary' : 'primary'
			}`}
			onClick={() => copy()}>
			<div className={`copyTextButton__message ${copied ? 'show' : ''}`}>
				<span>Copiado con éxito</span>
				<svg>
					<use href="/vectores/sprite.svg#check"></use>
				</svg>
			</div>
			{content}
		</button>
	);
};
