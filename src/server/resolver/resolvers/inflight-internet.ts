import dayjs from 'dayjs';
import {percentageBetweenTimestamps} from '../../utils/time';
import {Resolver} from '../types';

export interface Root {
	Response: Response;
}

export interface Response {
	status: number;
	flightInfo: FlightInfo;
	gogoFacts: string;
	serviceInfo: ServiceInfo;
	flightInfoFIG2?: FlightInfoFig2;
	ipAddress: string;
	macAddress: string;
	systemInfo: SystemInfo;
}

export interface FlightInfo {
	logo: unknown;
	airlineName: unknown;
	airlineCode: string;
	airlineCodeIata: unknown;
	tailNumber: string;
	flightNumberInfo: string;
	flightNumberAlpha: unknown;
	flightNumberNumeric: unknown;
	departureAirportCode: string;
	destinationAirportCode: string;
	departureAirportCodeIata: string;
	destinationAirportCodeIata: string;
	departureAirportLatitude: number;
	destinationAirportLatitude: number;
	departureAirportLongitude: number;
	destinationAirportLongitude: number;
	origin: unknown;
	destination: unknown;
	departureCity: unknown;
	destinationCity: unknown;
	expectedArrival: string;
	departureTime: string;
	abpVersion: string;
	acpuVersion: string;
	videoService: boolean;
	latitude: number;
	longitude: number;
	altitude: number;
	localTime: unknown;
	utcTime: string;
	destinationTimeZoneOffset: number;
	hspeed: number;
	vspeed: number;
}

export interface ServiceInfo {
	service: string;
	remaining: number;
	quality: string;
	productCode: string;
	alerts: unknown[];
}

export interface FlightInfoFig2 {
	flight: Flight;
	aircraft: Aircraft;
	departure: Departure;
	arrival: Arrival;
	statusCode: number;
	statusMessage: string;
}

export interface Flight {
	id: number;
	key_time: string;
	flight_state: string;
	flight_number: string;
	flight_identifier: string;
	oooi: Oooi;
	gps: Gps;
	time_above_service_level: TimeAboveServiceLevel;
	attributes: Attributes7;
}

export interface Oooi {
	off: string;
	attributes: Attributes;
}

export interface Attributes {}

export interface Gps {
	time: string;
	latitude: number;
	longitude: number;
	speed: number;
	flight_level: number;
	calculations: Calculations;
	attributes: Attributes3;
	estimated: Estimated;
	course: number;
}

export interface Calculations {
	bearing_from_departure: number;
	distance_from_departure: number;
	bearing_to_arrival: number;
	distance_to_arrival: number;
	direct_course_distance: number;
	attributes: Attributes2;
}

export interface Attributes2 {}

export interface Attributes3 {}

export interface Estimated {
	time: string;
	latitude: number;
	longitude: number;
	speed: number;
	calculations: Calculations2;
	attributes: Attributes5;
}

export interface Calculations2 {
	bearing_from_departure: number;
	distance_from_departure: number;
	bearing_to_arrival: number;
	distance_to_arrival: number;
	direct_course_distance: number;
	attributes: Attributes4;
}

export interface Attributes4 {}

export interface Attributes5 {}

export interface TimeAboveServiceLevel {
	first_known: string;
	last_known: string;
	attributes: Attributes6;
}

export interface Attributes6 {}

export interface Attributes7 {}

export interface Aircraft {
	id: number;
	registration_number: string;
	airline_icao: AirlineIcao;
	fleet_number: string;
	aircraft_type: string;
	seat_count: number;
	airlines: Airline[];
	connections: Connection[];
	attributes: Attributes11;
}

export interface AirlineIcao {
	attributes: Attributes8;
	owner: string;
	partner: string;
}

export interface Attributes8 {}

export interface Airline {
	id: number;
	name: string;
	icao: string;
	iata: string;
	currency: string;
	locale: string;
	call_sign: string;
	incorporated_country: string;
	incorporated_country_name: string;
	attributes: Attributes9;
}

export interface Attributes9 {}

export interface Connection {
	id: number;
	aircraft_id: number;
	connectivity_type: string;
	connectivity_type_last_changed: string;
	attributes: Attributes10;
	connectivity_installed_by_oem: boolean;
}

export interface Attributes10 {}

export interface Attributes11 {
	firehose_sync: string;
	product: string;
	video_capability: string;
	connectivity_identifier: string;
	firehose_sync_lock: string;
	serial_number: string;
	gogo_business: string;
	source: string;
	official_registration: string;
	transaction_routing_id: string;
	manufacturer: string;
	connectivity_provider: string;
	mode_s_code: string;
	source_id: string;
	class: string;
	make: string;
	status: string;
}

export interface Departure {
	airport: Airport;
	time: Time;
	attributes: Attributes16;
}

export interface Airport {
	id: number;
	icao: string;
	iata: string;
	name: string;
	mailing_address: MailingAddress;
	location: Location;
	time_zone_offset: number;
	attributes: Attributes14;
}

export interface MailingAddress {
	municipality: string;
	administrative_area: string;
	administrative_area_name: string;
	country: string;
	country_name: string;
	postal_code: string;
	attributes: Attributes12;
}

export interface Attributes12 {}

export interface Location {
	latitude: number;
	longitude: number;
	elevation: number;
	attributes: Attributes13;
}

export interface Attributes13 {}

export interface Attributes14 {
	product_region: string;
	marketing_municipality: string;
	billing_municipality: string;
	icao_update_time: string;
}

export interface Time {
	actual: string;
	estimated: string;
	computed: string;
	attributes: Attributes15;
	scheduled: string;
}

export interface Attributes15 {}

export interface Attributes16 {}

export interface Arrival {
	airport: Airport2;
	time: Time2;
	attributes: Attributes21;
}

export interface Airport2 {
	id: number;
	icao: string;
	iata: string;
	name: string;
	mailing_address: MailingAddress2;
	location: Location2;
	time_zone_offset: number;
	attributes: Attributes19;
}

export interface MailingAddress2 {
	municipality: string;
	administrative_area: string;
	administrative_area_name: string;
	country: string;
	country_name: string;
	postal_code: string;
	attributes: Attributes17;
}

export interface Attributes17 {}

export interface Location2 {
	latitude: number;
	longitude: number;
	elevation: number;
	attributes: Attributes18;
}

export interface Attributes18 {}

export interface Attributes19 {
	product_region: string;
	marketing_municipality: string;
	billing_municipality: string;
	icao_update_time: string;
}

export interface Time2 {
	estimated: string;
	computed: string;
	attributes: Attributes20;
	scheduled: string;
}

export interface Attributes20 {}

export interface Attributes21 {}

export interface SystemInfo {
	wapType: string;
	systemType: string;
	arincEnabled: string;
	horizontalVelocity: string;
	verticalVelocity: string;
	aboveGndLevel: string;
	aboveSeaLevel: string;
	flightPhase: string;
	flightNo: string;
	timeToLand: string;
	paxSsidStatus: string;
	casSsidStatus: string;
	countryCode: string;
	airportCode: string;
	linkState: string;
	linkType: string;
	tunnelState: string;
	tunnelType: string;
	ifcPaxServiceState: string;
	ifcCasServiceState: string;
	currentLinkStatusCode: string;
	currentLinkStatusDescription: string;
	noSubscribedUsers: string;
	aircraftType: string;
}

export const inflightInternet: Resolver = async () => {
	const response = await fetch('https://wifi.inflightinternet.com/abp/v2/statusTray?fig2=true', {
		headers: {
			'accept': 'application/json, text/plain, */*',
			'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
			'Referer': 'https://wifi.inflightinternet.com/app/ifc/gobrowse',
		},
		method: 'GET',
	});

	if (response.status !== 200) {
		await response.body?.cancel();
		throw new Error(
			`Couldn't load InflightInternet. Request failed with status ${response.statusText} (${response.status})`,
		);
	}

	const body = (await response.json()) as Root;

	const departureTime = dayjs(body.Response.flightInfo.departureTime).toDate().getTime();
	const expectedArrivalTime = dayjs(body.Response.flightInfo.expectedArrival).toDate().getTime();

	return {
		number: body.Response.flightInfo.flightNumberInfo,
		completedPercent: percentageBetweenTimestamps(departureTime, expectedArrivalTime),
		expectedArrival: body.Response.flightInfo.expectedArrival,
		milesRemaining: body.Response.flightInfoFIG2?.flight.gps.calculations.distance_to_arrival ?? null,

		destination: {
			airport: {
				code: body.Response.flightInfo.destinationAirportCodeIata,
			},
			timezoneDelta: body.Response.flightInfo.destinationTimeZoneOffset,
		},

		origin: {
			airport: {
				code: body.Response.flightInfo.departureAirportCodeIata,
			},
		},

		aircraft: {
			tailNumber: body.Response.flightInfo.tailNumber,
			model: body.Response.flightInfoFIG2
				? body.Response.flightInfoFIG2.aircraft.attributes.manufacturer +
				  body.Response.flightInfoFIG2.aircraft.attributes.make
				: null,
			doorsOpen: null,
		},

		stats: {
			groundSpeed: body.Response.flightInfo.hspeed,
			verticalSpeed: body.Response.flightInfo.vspeed,
			altitude: body.Response.flightInfo.altitude,
			seatCount: body.Response.flightInfoFIG2?.aircraft.seat_count ?? null,
		},
	};
};
