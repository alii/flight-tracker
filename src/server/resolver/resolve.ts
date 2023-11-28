import {api} from '../api';
import {Flight} from './flight';
import * as resolvers from './resolvers';

const resolve = () => [resolvers.inflightInternet()];

export async function resolveFlight(): Promise<Flight | null> {
	return Promise.any(resolve()).catch(() => null);
}

export const apiHandler = api({GET: () => resolveFlight()});
