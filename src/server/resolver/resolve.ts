import {api} from '../api';
import {Flight} from './flight';
import * as resolvers from './resolvers';

const resolve = () => [resolvers.airCanada()];

export async function resolveFlight(): Promise<Flight> {
	return Promise.any(resolve());
}

export const apiHandler = api({GET: () => resolveFlight()});
