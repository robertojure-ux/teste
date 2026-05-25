import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const locales = ['', 'pt', 'en', 'en-US', 'zh', 'zh-CN', 'zh-TW', 'zh-HK', 'ja', 'ar', 'es', 'ru', 'fr'];
export const localeNames = {
	pt: '🇧🇷 Português',
	en: '🇺🇸 English',
};
export const defaultLocale = 'pt';

export function getLocale(headers) {
	let languages = new Negotiator({ headers }).languages();
	return match(languages, locales, defaultLocale);
}

const dictionaries = {
	pt: () => import('@/locales/pt.json').then((module) => module.default),
	en: () => import('@/locales/en.json').then((module) => module.default),
	zh: () => import('@/locales/zh.json').then((module) => module.default),
	ja: () => import('@/locales/ja.json').then((module) => module.default),
	ar: () => import('@/locales/ar.json').then((module) => module.default),
	es: () => import('@/locales/es.json').then((module) => module.default),
	ru: () => import('@/locales/ru.json').then((module) => module.default),
	fr: () => import('@/locales/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
	if (['zh-CN', 'zh-TW', 'zh-HK'].includes(locale)) {
		locale = 'zh';
	}

	if (!Object.keys(dictionaries).includes(locale)) {
		locale = 'pt';
	}

	return dictionaries[locale]();
};
