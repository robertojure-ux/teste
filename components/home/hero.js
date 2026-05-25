'use client';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBalanceScale } from 'react-icons/fa';

export default function Hero({ locale, CTALocale }) {
	return (
		<section
			id='inicio'
			className='relative flex flex-col items-start md:items-center py-20 md:py-32 overflow-hidden'
		>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, type: 'spring', stiffness: 80, damping: 12 }}
				className='relative z-10 w-full md:w-9/12 mx-auto text-center'
			>
				<div className='inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6'>
					<FaBalanceScale size={12} />
					Advocacia especializada há mais de 15 anos
				</div>

				<h1 className='font-bold text-4xl md:text-6xl text-primary !leading-[1.2em] mb-6'>
					{locale.h1}
				</h1>

				<p className='w-full md:w-8/12 mx-auto text-lg md:text-xl text-base-content/70 text-center mb-10 leading-relaxed'>
					{locale.h2}
				</p>

				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<a
						href='#contato'
						className='inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl'
					>
						<FaCalendarAlt size={15} />
						{CTALocale.btn1}
					</a>
					<a
						href='#areas'
						className='inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all'
					>
						{CTALocale.btn2}
					</a>
				</div>
			</motion.div>

			<div className='hidden md:grid grid-cols-3 gap-6 mt-20 w-full md:w-10/12 mx-auto relative z-10'>
				{[
					{ number: '15+', label: 'Anos de Experiência' },
					{ number: '2.000+', label: 'Casos Concluídos' },
					{ number: '98%', label: 'Clientes Satisfeitos' },
				].map((stat, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 + i * 0.15 }}
						className='text-center bg-base-100 border border-base-300 rounded-2xl py-8 px-4 shadow-sm'
					>
						<p className='text-4xl font-bold text-secondary mb-1'>{stat.number}</p>
						<p className='text-sm text-base-content/60 font-medium'>{stat.label}</p>
					</motion.div>
				))}
			</div>

			<div className='absolute w-full left-0 top-0 h-full -z-0 pointer-events-none'>
				<div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5'></div>
				<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' className='opacity-20'>
					<defs>
						<pattern id='grid' patternUnits='userSpaceOnUse' width='40' height='40'>
							<path d='M 40 0 L 0 0 0 40' fill='none' stroke='#0f2044' strokeWidth='0.5' />
						</pattern>
					</defs>
					<rect width='100%' height='100%' fill='url(#grid)' />
				</svg>
			</div>
		</section>
	);
}
