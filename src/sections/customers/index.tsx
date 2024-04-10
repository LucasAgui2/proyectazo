import '@/styles/sections/customers.scss';
import { CustomerImages } from './CustomerImages';

interface Props {
	bgLayout?: boolean;
}

export const Customers = ({ bgLayout = false }: Props) => {
	return (
		<div className={`customers ${bgLayout ? 'bgLayout' : ''} `}>
			<div className={`customers__slider`}>
				<div className="customers__slide">
					<CustomerImages />
				</div>
				<div className="customers__slide">
					<CustomerImages />
				</div>
			</div>
			<p className="customers__text">Han confiado en nosotros</p>
		</div>
	);
};
