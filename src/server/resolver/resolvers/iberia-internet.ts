import dayjs from 'dayjs';
import {percentageBetweenTimestamps} from '../../utils/time';
import {Resolver} from '../types';

export interface IberiaResponse {
	actualArrivalTime: null;
	actualDepartureTime: string; // ISO
	aircraftType: string;
	altitude: number;
	arrivalTimezoneOffsetHrs: number;
	connectionStatus: 'CONNECTED';
	departureTimezoneOffsetHrs: number;
	destinationIATA: string;
	destinationICAO: string;
	destinationName: string;
	distanceToDestination: null;
	estimatedArrivalTime: string; // ISO
	flightNumber: string;
	flightNumberEndingNumber: null;
	flightOpen: null;
	flightRoute: null;
	groundSpeed: 461;
	icao: string;
	internetStatus: 'ACTIVE';
	isatConnectionStatus: 'CONNECTED';
	isatInternetStatus: 'ACTIVE';
	originName: string;
	originIATA: string;
	originICAO: string;
	outsideAirTemperature: number;
	phase: null;
	scheduledDepartureTime: null;
	state: 'EN_ROUTE';
	tailNumber: string;
	takeoffDateTime: null;
	timeAtDestination: null;
	timeAtOrigin: null;
	timeToDestinationMinutes: number;
	totalFlightTimeMinutes: number;
	trueHeading: number;
	weightOnWheels: false;
	windDirection: number;
	windSpeed: number;
	restrictedInternet: boolean;
	latitude: null;
	longitude: null;
}

export const iberiaInternet: Resolver = async () => {
	const request = await fetch('https://api.air.dot-air.com/v1/flight-information-svc/flight-information', {
		headers: {
			accept: 'application/json',
		},
		method: 'GET',
	});

	if (request.status !== 200) {
		throw new Error(`Couldn't load Iberia. Request failed with status ${request.statusText} (${request.status})`);
	}

	const response = (await request.json()) as IberiaResponse;

	const departureTime = dayjs(response.actualDepartureTime).toDate().getTime();
	const expectedArrivalTime = dayjs(response.estimatedArrivalTime).toDate().getTime();

	return {
		number: response.flightNumber,
		completedPercent: percentageBetweenTimestamps(departureTime, expectedArrivalTime),
		expectedArrival: response.estimatedArrivalTime,
		milesRemaining: null,

		destination: {
			airport: {
				code: response.destinationIATA,
				name: response.destinationName,
			},
			timezoneDelta: response.arrivalTimezoneOffsetHrs,
		},

		origin: {
			airport: {
				code: response.originIATA,
				name: response.originName,
			},
		},

		aircraft: {
			tailNumber: response.tailNumber,
			model: response.aircraftType,
		},

		stats: {
			groundSpeed: response.groundSpeed,
			verticalSpeed: 0,
			altitude: response.altitude,
			seatCount: null,
		},
	};
};
