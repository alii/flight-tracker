import dayjs from 'dayjs';
import relativeTimePlugin from 'dayjs/plugin/relativeTime';
import {GetStaticProps} from 'next';
import useSWR from 'swr';
import {Card} from '../components/card';
import {Flight} from '../server/resolver/flight';
import {resolveFlight} from '../server/resolver/resolve';

dayjs.extend(relativeTimePlugin);

interface Props {
	flight: Flight | null;
}

const numberFormat = new Intl.NumberFormat();

export default function FlightTracker(props: Props) {
	const {data: flight = props.flight} = useSWR<Flight>('/api/flights/resolve');

	if (!flight) {
		return (
			<div className="mx-4">
				<main className="max-w-4xl mx-auto my-16 shadow-xl shadow-gray-900/5 dark:shadow-gray-100/5 border p-6 rounded-lg border-gray-200/50 bg-gray-200/20 dark:border-gray-500/20 dark:bg-gray-600/20 backdrop-blur-lg">
					<p>You are either not on a flight, or not flying on a supported airline.</p>
					<p className="italic text-sm opacity-60">
						If you think this is a mistake, please submit an issue to{' '}
						<code className="text-sm">alii/flight-tracker</code> when you land!
					</p>
				</main>
			</div>
		);
	}

	return (
		<div className="mx-4">
			<main className="max-w-4xl mx-auto my-16 space-y-8 shadow-xl shadow-gray-900/5 dark:shadow-gray-100/5 border p-6 rounded-lg border-gray-200/50 bg-gray-200/20 dark:border-gray-500/20 dark:bg-gray-600/20 backdrop-blur-lg">
				<div className="select-none border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
					<div className="w-full h-6 relative bg-gray-100/10 dark:bg-gray-800">
						<div
							style={{width: `${flight.completedPercent}%`}}
							className="transition-all h-6 top-0 left-0 bottom-0 bg-gray-100/50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 flex items-center justify-end pr-2 rounded-r-xl"
						>
							<p>{Math.floor(flight.completedPercent)}% ✈️</p>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<div className="flex items-center space-x-2">
						<h1 className="text-4xl font-bold relative">Flight Tracker</h1>

						<div className="mt-1.5">
							<span className="select-none text-sm animate-pulse bg-red-300 text-red-600 border-red-600 dark:bg-red-500 dark:text-red-900 dark:border-red-900 font-bold tracking-wide uppercase px-2 py-0.5 rounded-full border-4">
								Live
							</span>
						</div>
					</div>

					<p className="text-gray-500 dark:text-gray-400">
						You are on flight <span className="text-gray-700 dark:text-gray-300">{flight.number}</span> from{' '}
						<span className="text-gray-700 dark:text-gray-300">{flight.origin.airport.code}</span> to{' '}
						<span className="text-gray-700 dark:text-gray-300">{flight.destination.airport.code}</span>
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					<Card title="Destination" subtext={flight.destination.airport.name}>
						{flight.destination.airport.code}
					</Card>
					<Card title="Origin" subtext={flight.origin.airport.name}>
						{flight.origin.airport.code}
					</Card>
					<Card title="Landing in" subtext={dayjs(flight.expectedArrival).toDate().toLocaleString()}>
						~{dayjs(flight.expectedArrival).fromNow(true)}
					</Card>
					{flight.milesRemaining && (
						<Card title="Miles Remaining">{numberFormat.format(Math.floor(flight.milesRemaining))}</Card>
					)}
					{flight.stats.groundSpeed && <Card title="Ground Speed">{Math.floor(flight.stats.groundSpeed)} mph</Card>}
					{flight.stats.verticalSpeed !== null && (
						<Card title="Ascending" subtext={`Vertical speed: ${flight.stats.verticalSpeed.toPrecision(3)} mph`}>
							{flight.stats.verticalSpeed > 0 ? 'Yes' : 'No'}
						</Card>
					)}
					<Card title="Altitude">{numberFormat.format(Math.floor(flight.stats.altitude))} ft</Card>
					{flight.aircraft.model && <Card title="Aircraft Model">{flight.aircraft.model}</Card>}
					<Card title="Tail Number">{flight.aircraft.tailNumber}</Card>
					{flight.destination.timezoneDelta && (
						<Card title="Timezone Delta">{flight.destination.timezoneDelta} Hours</Card>
					)}
					{flight.stats.seatCount && <Card title="Seats on Aircraft">{flight.stats.seatCount} Seats</Card>}
					{flight.aircraft.doorsOpen !== null && (
						<Card title="Doors are open?">{flight.aircraft.doorsOpen ? 'Yes' : 'No (hopefully)'}</Card>
					)}
				</div>
			</main>
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			flight: await resolveFlight(),
		},
		revalidate: 10,
	};
};
