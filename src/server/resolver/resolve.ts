import {api} from '../api';
import {Flight} from './flight';
import {inflightInternet} from './resolvers/inflight-internet';
import {virginAtlanticViasat} from './resolvers/virgin-atlantic-viasat';

const resolve = () => [inflightInternet(), virginAtlanticViasat()];

export async function resolveFlight(): Promise<Flight | null> {
	return Promise.any(resolve()).catch(() => null);
}

export const apiHandler = api({GET: resolveFlight});
