import dayjs from 'dayjs';
import {knownTimezoneBetweenIatas, tryIcaoToIata} from '../../utils/airports';
import {percentageBetweenTimestamps} from '../../utils/time';
import {Flight} from '../flight';
import {Resolver} from '../types';

const exampleres = {
	alertId: '30101',
	authorizationState: 0,
	authType: null,
	category: 'PED',
	connectionState: 2,
	destinationConditions: 'Light rain',
	destinationTemperature: 50.0,
	destinationWeatherIcon: 12,
	doorState: 'Closed',
	guid: '77c707b0-d645-11ee-9f37-0a0581a64a03',
	ifeState: null,
	isConnected: true,
	isAuthorized: true,
	lanIpAddress: '172.19.1.117',
	macAddress: '603e5f670194',
	language: 'en',
	browserLanguage: 'en',
	isPausedUser: false,
	isPausedSystem: true,
	isProfileExpired: false,
	serviceTierId: 382,
	serviceUid: 'hi@alistair.sh',
	serviceTimeRemaining: 74624,
	messagesNew: 1,
	messagesOld: 0,
	isServiceAvailable: true,
	profileHash: 'c54ec86580fd78741efd4ab2dde9926d',
	flightOrigin: 'EGLL',
	flightDestination: 'KJFK',
	flightNumber: 'VIR45W    ',
	flightMinutesRemaining: 229.0,
	destinationEta: null,
	tailId: 'G-VLDY',
	altitude: 37992.9,
	latitude: 54.8855,
	longitude: -44.3108,
	heading: -110.061,
	wowState: 'Off',
	purchaseAvailability: true,
	username: null,
	typeId: 0,
	serviceStartTime: '2024-02-28T14:20:26Z',
	waveform: 'AfterBurner',
	logLevel: 95,
};

type exampleres = typeof exampleres;

export const virginAtlanticViasat: Resolver = async () => {
	const now = Date.now();

	const response = await fetch(`https://virgin-atlantic-wifi.viasat.com/device?random=${now}`, {
		headers: {
			'accept': 'application/json',
			'accept-language': 'en',
			'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"macOS"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'Referer': 'https://virgin-atlantic-wifi.viasat.com/',
			'Referrer-Policy': 'origin',
		},
		method: 'GET',
	});

	if (!response.ok) {
		await response.body?.cancel();
		throw new Error('Could not load virgin atlantic viasat');
	}

	const body = (await response.json()) as exampleres;

	const expectedArrival = dayjs().add(body.flightMinutesRemaining, 'minutes');
	const startTime = dayjs(body.serviceStartTime);

	const completedPercent = percentageBetweenTimestamps(
		startTime.toDate().getTime(),
		expectedArrival.toDate().getTime(),
	);

	const flight: Flight = {
		number: body.flightNumber,
		expectedArrival: expectedArrival.toISOString(),
		completedPercent,
		milesRemaining: null,
		origin: {
			airport: {
				code: tryIcaoToIata(body.flightOrigin),
			},
		},
		destination: {
			airport: {
				code: tryIcaoToIata(body.flightDestination),
			},
			timezoneDelta: knownTimezoneBetweenIatas(tryIcaoToIata(body.flightOrigin), tryIcaoToIata(body.flightDestination)),
		},
		aircraft: {
			tailNumber: body.tailId,
			model: null,
			doorsOpen: body.doorState !== 'Closed',
		},
		stats: {
			groundSpeed: null,
			verticalSpeed: null,
			altitude: body.altitude,
			seatCount: null,
		},
	};

	return flight;
};
