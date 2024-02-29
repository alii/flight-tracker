import {api} from '../api';
import {Flight} from './flight';
import {iberiaInternet, inflightInternet} from './resolvers';
import {virginAtlanticViasat} from './resolvers/virgin-atlantic-viasat';

const resolve = () => [inflightInternet(), iberiaInternet(), virginAtlanticViasat()];

export async function resolveFlight(): Promise<Flight | null> {
	return Promise.any(resolve()).catch(() => null);
}

export const apiHandler = api({GET: resolveFlight});
