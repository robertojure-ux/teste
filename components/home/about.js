'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaAward, FaHandshake } from 'react-icons/fa';

export default function About() {
	return (
		<section id='sobre' className='py-16 md:py-24'>
			<div className='w-full md:w-10/12 mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex flex-col gap-5 items-start md:items-center mb-12'
				>
					<div className='inline-flex items-center justify-center gap-2 border-2 border-primary px-6 py-2 rounded-full text-base font-semibold text-primary'>
						Sobre o Advogado
					</div>
					<h2 className='font-bold text-3xl md:text-5xl text-primary text-center !leading-[1.25em]'>
						Dr. Marcos Santos
					</h2>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className='relative'
					>
						<div className='relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-base-200'>
							<Image
								src='/image/about_1.jpg'
								alt='Dr. Marcos Santos'
								fill
								className='object-cover'
							/>
							<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6'>
								<p className='text-white font-bold text-lg'>Dr. Marcos Santos</p>
								<p className='text-secondary text-sm'>OAB/SP 123.456</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className='flex flex-col gap-6'
					>
						<p className='text-base-content/80 text-lg leading-relaxed'>
							Advogado com mais de <strong>15 anos de experiência</strong> nas áreas de Direito Civil, Trabalhista, Empresarial e de Família. Formado pela Faculdade de Direito da USP, com especialização em Direito Processual Civil pela PUC-SP e MBA em Gestão Jurídica Empresarial.
						</p>
						<p className='text-base-content/70 leading-relaxed'>
							Ao longo da carreira, atuei em mais de <strong>2.000 casos</strong>, conquistando resultados expressivos para clientes pessoas físicas e jurídicas. Meu compromisso é oferecer atendimento próximo, ético e altamente técnico, tratando cada caso com a seriedade que ele merece.
						</p>

						<div className='grid grid-cols-1 gap-4 mt-2'>
							{[
								{
									icon: FaGraduationCap,
									title: 'Formação',
									text: 'Direito USP · Especialização PUC-SP · MBA em Gestão Jurídica',
								},
								{
									icon: FaAward,
									title: 'Reconhecimento',
									text: 'Premiado entre os melhores advogados do estado por 3 anos consecutivos',
								},
								{
									icon: FaHandshake,
									title: 'Compromisso',
									text: 'Atendimento personalizado com foco no resultado e na satisfação do cliente',
								},
							].map((item, i) => (
								<div key={i} className='flex gap-4 items-start bg-base-200 rounded-xl p-4'>
									<div className='w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0'>
										<item.icon className='text-secondary' size={16} />
									</div>
									<div>
										<p className='font-semibold text-primary text-sm'>{item.title}</p>
										<p className='text-base-content/70 text-sm mt-0.5'>{item.text}</p>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
