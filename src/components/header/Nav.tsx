'use client';

import { MobileNav } from './MobileNav';
import { NavLinks } from './NavLinks';
import { useEffect, useState } from 'react';

interface Props {
	setIsOpen: Function;
	isOpen: boolean;
}

export const Nav = ({ setIsOpen, isOpen }: Props) => {
	useEffect(() => {
		const firstSectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						document.querySelector('.header')?.classList.add('isFixed');
					} else {
						document.querySelector('.header')?.classList.remove('isFixed');
					}
				});
			},
			{
				root: null,
				threshold: 0,
				rootMargin: '-100px'
			}
		);

		const firstSectionElement = document.querySelector('.firstSection');
		if (firstSectionElement) {
			firstSectionObserver.observe(firstSectionElement);
		}

		return () => {
			if (firstSectionElement) {
				firstSectionObserver.unobserve(firstSectionElement);
			}
		};
	}, []);
	return (
		<>
			<MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
			{/* {isOpen ? <NavLinks /> : ''} */}
			<NavLinks isOpen={isOpen} />
		</>
	);
};
