'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
	const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
	const [sent, setSent] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};

	return (
		<section id='contato' className='py-16 md:py-24 bg-base-200 -mx-5 px-5'>
			<div className='container mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex flex-col gap-4 items-center mb-12'
				>
					<div className='inline-flex items-center justify-center gap-2 border-2 border-primary px-6 py-2 rounded-full text-base font-semibold text-primary'>
						Contato
					</div>
					<h2 className='font-bold text-3xl md:text-5xl text-primary text-center !leading-[1.25em]'>
						Fale Conosco
					</h2>
					<p className='text-base-content/60 text-center text-lg max-w-xl'>
						Preencha o formulário abaixo e entraremos em contato em até 24 horas úteis.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-10/12 mx-auto'>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className='flex flex-col gap-6'
					>
						<div>
							<h3 className='font-bold text-xl text-primary mb-4'>Informações de Contato</h3>
							<div className='flex flex-col gap-4'>
								{[
									{ icon: FaPhone, label: 'Telefone', value: '(11) 3000-1234', href: 'tel:+551130001234' },
									{ icon: FaWhatsapp, label: 'WhatsApp', value: '(11) 93000-1234', href: 'https://wa.me/5511930001234' },
									{ icon: FaEnvelope, label: 'E-mail', value: 'contato@santosadvocacia.com.br', href: 'mailto:contato@santosadvocacia.com.br' },
									{ icon: FaMapMarkerAlt, label: 'Endereço', value: 'Av. Paulista, 1000 — Conj. 501\nBela Vista — São Paulo/SP\nCEP 01310-100', href: null },
								].map((item, i) => (
									<div key={i} className='flex gap-4 items-start'>
										<div className='w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5'>
											<item.icon className='text-secondary' size={15} />
										</div>
										<div>
											<p className='text-xs font-semibold text-base-content/50 uppercase tracking-wide'>{item.label}</p>
											{item.href ? (
												<a href={item.href} className='text-primary hover:text-secondary transition-colors font-medium text-sm mt-0.5 block'>
													{item.value}
												</a>
											) : (
												<p className='text-base-content/70 text-sm mt-0.5 whitespace-pre-line'>{item.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className='bg-primary rounded-2xl p-6 text-white'>
							<p className='font-semibold text-secondary mb-2'>Horário de Atendimento</p>
							<p className='text-white/80 text-sm'>Segunda a Sexta: 9h às 18h</p>
							<p className='text-white/80 text-sm'>Sábado: 9h às 12h (com agendamento)</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						{sent ? (
							<div className='flex flex-col items-center justify-center h-full gap-4 bg-base-100 rounded-2xl p-10 text-center shadow-sm'>
								<div className='w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center'>
									<FaEnvelope className='text-secondary' size={28} />
								</div>
								<h3 className='font-bold text-xl text-primary'>Mensagem enviada!</h3>
								<p className='text-base-content/60'>
									Recebemos seu contato. Nossa equipe retornará em até 24 horas úteis.
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className='bg-base-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4'>
								<div>
									<label className='block text-sm font-medium text-base-content/70 mb-1'>Nome completo *</label>
									<input
										name='name'
										type='text'
										required
										value={form.name}
										onChange={handleChange}
										placeholder='Seu nome'
										className='w-full border border-base-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors'
									/>
								</div>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
									<div>
										<label className='block text-sm font-medium text-base-content/70 mb-1'>Telefone *</label>
										<input
											name='phone'
											type='tel'
											required
											value={form.phone}
											onChange={handleChange}
											placeholder='(11) 9 0000-0000'
											className='w-full border border-base-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors'
										/>
									</div>
									<div>
										<label className='block text-sm font-medium text-base-content/70 mb-1'>E-mail *</label>
										<input
											name='email'
											type='email'
											required
											value={form.email}
											onChange={handleChange}
											placeholder='seu@email.com'
											className='w-full border border-base-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors'
										/>
									</div>
								</div>
								<div>
									<label className='block text-sm font-medium text-base-content/70 mb-1'>Mensagem *</label>
									<textarea
										name='message'
										required
										value={form.message}
										onChange={handleChange}
										placeholder='Descreva brevemente sua situação jurídica...'
										rows={5}
										className='w-full border border-base-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none'
									/>
								</div>
								<p className='text-xs text-base-content/40'>
									Suas informações são confidenciais e protegidas pelo sigilo profissional.
								</p>
								<button
									type='submit'
									className='w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-full transition-all shadow-md hover:shadow-lg text-sm'
								>
									Enviar Mensagem
								</button>
							</form>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
