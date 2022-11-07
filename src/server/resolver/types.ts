import {Flight} from './flight';

export type Resolver = () => Promise<Flight>;
