'use client';
import { MdMenu } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';

export default function Navbar() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const lang = pathname === '/' ? defaultLocale : pathname.split('/')[1];
		setLangName(lang);
		setLinkList(NavLinksList[`LINK_${lang.toUpperCase()}`] || []);
	}, [pathname]);

	return (
		<header className='w-full sticky top-0 z-50 bg-primary shadow-md'>
			<div className='container mx-auto px-5 py-4 flex justify-between items-center'>
				<a
					aria-label='Santos Advocacia'
					className='flex items-center gap-3'
					href={`/${langName}`}
				>
					<div className='w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-lg'>
						SA
					</div>
					<div className='text-white'>
						<p className='font-bold text-base leading-tight'>Santos Advocacia</p>
						<p className='text-xs text-secondary'>OAB/SP 123.456</p>
					</div>
				</a>

				<ul className='hidden md:flex items-center gap-6'>
					{linkList.map((link, index) => (
						<li key={index}>
							<a
								aria-label={link.name}
								href={`/${langName}${link.url}`}
								className='text-white/80 hover:text-secondary text-sm font-medium transition-colors duration-200'
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>

				<div className='flex items-center gap-3'>
					<a
						href={`/${langName}#contato`}
						className='hidden md:inline-flex items-center gap-2 bg-secondary hover:bg-accent text-primary font-semibold text-sm px-5 py-2 rounded-full transition-colors duration-200'
					>
						Agende uma Consulta
					</a>

					<details className='flex md:hidden dropdown dropdown-end'>
						<summary className='btn btn-ghost p-1 text-white'>
							<MdMenu size={22} />
						</summary>
						<ul className='menu dropdown-content z-[100] p-2 shadow bg-primary text-white rounded-box w-56 mt-2'>
							{linkList.map((link, index) => (
								<li key={index}>
									<a
										aria-label={link.name}
										href={`/${langName}${link.url}`}
										className='text-white/80 hover:text-secondary'
									>
										{link.name}
									</a>
								</li>
							))}
							<li className='mt-2'>
								<a
									href={`/${langName}#contato`}
									className='bg-secondary text-primary font-semibold rounded-full justify-center'
								>
									Agende uma Consulta
								</a>
							</li>
						</ul>
					</details>
				</div>
			</div>
		</header>
	);
}
