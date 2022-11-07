import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import {AppProps} from 'next/app';
import {SWRConfig} from 'swr';
import {APIResponse} from 'nextkit';

export default function App({pageProps, Component}: AppProps) {
	return (
		<SWRConfig
			value={{
				async fetcher<T>(url: string): Promise<T> {
					const request = await fetch(url);
					const response = (await request.json()) as APIResponse<T>;

					if (!response.success) {
						throw new Error(response.message);
					}

					return response.data;
				},
			}}
		>
			<Component {...pageProps} />
		</SWRConfig>
	);
}
