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
	ipAddress: string;
	macAddress: string;
	systemInfo: SystemInfo;
	flightInfoFIG2?: FlightInfoFIG2;
}

export interface FlightInfoFIG2 {
	flight: {
		id: 53151920;
		key_time: '2022-11-07T14:40:00Z';
		flight_state: 'IN_AIR';
		flight_number: '861';
		flight_identifier: 'ACA861';
		oooi: {off: '2022-11-07T15:05:48Z'; attributes: {}};
		gps: {
			time: '2022-11-07T17:11:39Z';
			latitude: 66.22802;
			longitude: -13.00426;
			speed: 564;
			flight_level: 360;
			calculations: {
				bearing_from_departure: 341.5332598051963;
				distance_from_departure: 963.2632216777838;
				bearing_to_arrival: 309.8208533345177;
				distance_to_arrival: 3181.9703040169084;
				direct_course_distance: 4091.669508613431;
				attributes: {};
			};
			attributes: {};
			estimated: {
				time: '2022-11-07T17:12:57.325Z';
				latitude: 66.35890542834558;
				longitude: -13.39469302022517;
				speed: 564;
				calculations: {
					bearing_from_departure: 341.2748794921726;
					distance_from_departure: 974.7513115068099;
					bearing_to_arrival: 309.4628818465625;
					distance_to_arrival: 3169.6994688434193;
					direct_course_distance: 4091.669508613431;
					attributes: {};
				};
				attributes: {};
			};
			course: 310;
		};
		time_above_service_level: {
			first_known: '2022-11-07T15:05:48Z';
			last_known: '2022-11-07T17:03:47Z';
			attributes: {};
		};
		attributes: {};
	};
	aircraft: {
		id: 6802;
		registration_number: 'CFRSI';
		airline_icao: {attributes: {}; owner: 'ACA'; partner: 'ACA'};
		fleet_number: '846';
		aircraft_type: 'B787-900';
		seat_count: 298;
		airlines: [
			{
				id: 2476;
				name: 'Air Canada';
				icao: 'ACA';
				iata: 'AC';
				currency: 'CAD';
				locale: 'en-US';
				call_sign: 'AIR CANADA';
				incorporated_country: 'CA';
				incorporated_country_name: 'Canada';
				attributes: {};
			},
		];
		connections: [
			{
				id: 12455;
				aircraft_id: 6802;
				connectivity_type: '2KU';
				connectivity_type_last_changed: '2020-04-10T17:29:40.437Z';
				attributes: {};
				connectivity_installed_by_oem: true;
			},
		];
		attributes: {
			firehose_sync: 'true';
			product: 'flight_track';
			video_capability: 'GGV';
			connectivity_identifier: 'CFRSI';
			firehose_sync_lock: 'false';
			serial_number: '37176';
			gogo_business: 'EXTERNAL';
			source: 'NAV';
			official_registration: 'C-FRSI';
			transaction_routing_id: 'C1';
			manufacturer: 'BOE';
			connectivity_provider: 'INST';
			mode_s_code: 'C02EC1';
			source_id: '24;mBKoAAJ7/0MARgBSAFMASQ==10;13182176400;';
			class: 'LARGE_JET';
			make: '787-900';
			status: 'Active';
		};
	};
	departure: {
		airport: {
			id: 16440;
			icao: 'EGLL';
			iata: 'LHR';
			name: 'Heathrow';
			mailing_address: {
				municipality: 'London';
				administrative_area: 'GLA';
				administrative_area_name: 'Greater London Authority';
				country: 'GB';
				country_name: 'United Kingdom';
				postal_code: 'TW6';
				attributes: {};
			};
			location: {latitude: 51.4775; longitude: -0.4613888888888889; elevation: 32; attributes: {}};
			time_zone_offset: 0;
			attributes: {
				product_region: 'INT';
				marketing_municipality: 'London';
				billing_municipality: 'London-Heathrow';
				icao_update_time: '1525277217415';
			};
		};
		time: {
			actual: '2022-11-07T15:05:48Z';
			estimated: '2022-11-07T15:05:48Z';
			computed: '2022-11-07T15:05:48Z';
			attributes: {};
			scheduled: '2022-11-07T14:40:00Z';
		};
		attributes: {};
	};
	arrival: {
		airport: {
			id: 16194;
			icao: 'CYVR';
			iata: 'YVR';
			name: 'Vancouver Intl';
			mailing_address: {
				municipality: 'Vancouver';
				administrative_area: 'BC';
				administrative_area_name: 'British Columbia';
				country: 'CA';
				country_name: 'Canada';
				postal_code: 'V7B 0A4';
				attributes: {};
			};
			location: {
				latitude: 49.194694444444444;
				longitude: -123.18396666666668;
				elevation: 4;
				attributes: {};
			};
			time_zone_offset: -8;
			attributes: {
				product_region: 'DOM';
				marketing_municipality: 'Vancouver';
				billing_municipality: 'Richmond';
				icao_update_time: '1525277023028';
			};
		};
		time: {
			estimated: '2022-11-07T23:48:00Z';
			computed: '2022-11-07T23:48:00Z';
			attributes: {};
			scheduled: '2022-11-07T23:22:12Z';
		};
		attributes: {};
	};
	statusCode: 200;
	statusMessage: 'OK';
}

export interface FlightInfo {
	logo: null;
	airlineName: null;
	airlineCode: string;
	airlineCodeIata: null;
	tailNumber: string;
	flightNumberInfo: string;
	flightNumberAlpha: null;
	flightNumberNumeric: null;
	departureAirportCode: string;
	destinationAirportCode: string;
	departureAirportCodeIata: string;
	destinationAirportCodeIata: string;
	departureAirportLatitude: number;
	destinationAirportLatitude: number;
	departureAirportLongitude: number;
	destinationAirportLongitude: number;
	origin: null;
	destination: null;
	departureCity: null;
	destinationCity: null;
	expectedArrival: string;
	departureTime: string;
	abpVersion: string;
	acpuVersion: string;
	videoService: boolean;
	latitude: number;
	longitude: number;
	altitude: number;
	localTime: null;
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
	alerts: null[];
}

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

export const airCanada: Resolver = async () => {
	const request = await fetch('https://wifi.inflightinternet.com/abp/v2/statusTray?fig2=true', {
		headers: {
			'accept': 'application/json, text/plain, */*',
			'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
			'Referer': 'https://wifi.inflightinternet.com/app/ifc/gobrowse',
		},
		body: null,
		method: 'GET',
	});

	const response = (await request.json()) as Root;

	const departureTime = dayjs(response.Response.flightInfo.departureTime).toDate().getTime();
	const expectedArrivalTime = dayjs(response.Response.flightInfo.expectedArrival).toDate().getTime();

	return {
		number: response.Response.flightInfo.flightNumberInfo,
		completedPercent: percentageBetweenTimestamps(departureTime, expectedArrivalTime),
		expectedArrival: response.Response.flightInfo.expectedArrival,

		destination: {
			airport: {
				code: response.Response.flightInfo.destinationAirportCodeIata,
			},
			timezoneDelta: response.Response.flightInfo.destinationTimeZoneOffset,
		},

		departure: {
			airport: {
				code: response.Response.flightInfo.departureAirportCodeIata,
			},
		},

		aircraft: {
			tailNumber: response.Response.flightInfo.tailNumber,
			model: response.Response.flightInfoFIG2
				? response.Response.flightInfoFIG2.aircraft.attributes.manufacturer +
				  response.Response.flightInfoFIG2.aircraft.attributes.make
				: null,
		},

		stats: {
			groundSpeed: response.Response.flightInfo.hspeed,
			verticalSpeed: response.Response.flightInfo.vspeed,
			altitude: response.Response.flightInfo.altitude,
		},
	};
};
