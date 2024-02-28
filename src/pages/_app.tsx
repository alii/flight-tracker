import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import {AppProps} from 'next/app';
import Head from 'next/head';
import {APIResponse} from 'nextkit';
import {SWRConfig, SWRConfiguration} from 'swr';

const config: SWRConfiguration = {
	refreshInterval: 5000,
	fetcher: async <T,>(url: string): Promise<T> => {
		const response = await fetch(url);
		const body = (await response.json()) as APIResponse<T>;

		if (!body.success) {
			throw new Error(body.message);
		}

		return body.data;
	},
};

export default function App({pageProps, Component}: AppProps) {
	return (
		<SWRConfig value={config}>
			<Head>
				<title>Flight Tracker</title>
			</Head>

			<Component {...pageProps} />
		</SWRConfig>
	);
}
