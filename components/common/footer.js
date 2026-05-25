'use client';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { NavLinksList } from '@/lib/navLinksList';

export default function Footer() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const lang = pathname === '/' ? defaultLocale : pathname.split('/')[1];
		setLangName(lang);
		setLinkList(NavLinksList[`LINK_${lang.toUpperCase()}`] || []);
	}, [pathname]);

	return (
		<footer className='w-full bg-primary text-white'>
			<div className='container mx-auto px-5 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
					<div>
						<div className='flex items-center gap-3 mb-4'>
							<div className='w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-lg'>
								SA
							</div>
							<div>
								<p className='font-bold text-base leading-tight'>Santos Advocacia</p>
								<p className='text-xs text-secondary'>OAB/SP 123.456</p>
							</div>
						</div>
						<p className='text-white/70 text-sm leading-relaxed'>
							Assessoria jurídica especializada com ética, comprometimento e resultados comprovados há mais de 15 anos.
						</p>
					</div>

					<div>
						<h3 className='font-semibold text-secondary mb-4 uppercase text-xs tracking-widest'>Navegação</h3>
						<ul className='space-y-2'>
							{linkList.map((link, index) => (
								<li key={index}>
									<a
										href={`/${langName}${link.url}`}
										className='text-white/70 hover:text-secondary text-sm transition-colors'
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='font-semibold text-secondary mb-4 uppercase text-xs tracking-widest'>Contato</h3>
						<address className='not-italic text-white/70 text-sm space-y-2'>
							<p>Av. Paulista, 1000 — Conj. 501</p>
							<p>Bela Vista — São Paulo/SP</p>
							<p>CEP 01310-100</p>
							<p className='mt-3'>
								<a href='tel:+551130001234' className='hover:text-secondary transition-colors'>
									(11) 3000-1234
								</a>
							</p>
							<p>
								<a href='mailto:contato@santosadvocacia.com.br' className='hover:text-secondary transition-colors'>
									contato@santosadvocacia.com.br
								</a>
							</p>
						</address>

						<div className='flex gap-4 mt-5'>
							<a href='#' aria-label='Instagram' className='text-white/60 hover:text-secondary transition-colors'>
								<FaInstagram size={18} />
							</a>
							<a href='#' aria-label='LinkedIn' className='text-white/60 hover:text-secondary transition-colors'>
								<FaLinkedinIn size={18} />
							</a>
							<a href='#' aria-label='Facebook' className='text-white/60 hover:text-secondary transition-colors'>
								<FaFacebookF size={18} />
							</a>
							<a href='https://wa.me/5511930001234' aria-label='WhatsApp' className='text-white/60 hover:text-secondary transition-colors'>
								<FaWhatsapp size={18} />
							</a>
						</div>
					</div>
				</div>

				<div className='border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40'>
					<p>© {new Date().getFullYear()} Santos Advocacia. Todos os direitos reservados.</p>
					<p>OAB/SP 123.456 · Dr. Marcos Santos</p>
				</div>
			</div>
		</footer>
	);
}
