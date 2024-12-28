
import en from '../../docs/i18n/en.json';
import ja from '../../docs/i18n/ja.json';

type Translations = {
	[key: string]: {
		[key: string]: {
			[key: string]: string;
		} | string;
	};
};

const translations: Translations = {
	en,
	ja,
};

export function t(key: string, locale: string = 'en'): string {
	const keys = key.split('.');
	let result = translations[locale];

	for (const k of keys) {
		const tempResult = result[k];
		if (typeof tempResult === 'string') {
			return tempResult;
		}
		result = tempResult;
		if (!result) {
			return key;
		}
	}

	return typeof result === 'string' ? result : key;
}