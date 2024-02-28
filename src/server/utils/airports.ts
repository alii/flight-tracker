export function tryIcaoToIata(icao: string) {
	return (
		{
			EGLL: 'LHR',
			KJFK: 'JFK',
		}[icao] ?? icao
	);
}

export function knownTimezoneBetweenIatas(a: string, b: string) {
	const map = {
		LHR_JFK: -5,
		JFK_LHR: 5,
	};

	const key = `${a}_${b}`.toUpperCase();

	return key in map ? map[key as keyof typeof map] : null;
}
