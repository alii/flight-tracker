export interface Flight {
	/**
	 * The flight number. E.g. LH6812
	 */
	number: string;

	/**
	 * An ISO timestamp of when the flight is expected to arrive
	 */
	expectedArrival: string;

	/**
	 * How far this flight has been completed as a percent from 0-100
	 */
	completedPercent: number;

	/**
	 * Miles remaining
	 */
	milesRemaining: number | null;

	/**
	 * The place this flight departs from
	 */
	origin: {
		airport: Airport;
	};

	/**
	 * The destination for this flight
	 */
	destination: {
		airport: Airport;

		/**
		 * How far ahead or behind the timezone at the destination is
		 */
		timezoneDelta: number | null;
	};

	/**
	 * Information about the aircraft
	 */
	aircraft: {
		/**
		 * The tailnumber of this plane
		 */
		tailNumber: string;

		/**
		 * The model name. For example "Boeing 747"
		 */
		model: string | null;

		/**
		 * If the doors are open on the aircraft. Hopefully this is never true during the flight.
		 * Some providers will give this! Lol
		 */
		doorsOpen: boolean | null;
	};

	/**
	 * Statistics of the flight right now
	 */
	stats: {
		/**
		 * The ground speed we are travelling at in MPH
		 */
		groundSpeed: number | null;

		/**
		 * The speed of which we are ascending or descending at in MPH
		 */
		verticalSpeed: number | null;

		/**
		 * The altitude in feet
		 */
		altitude: number;

		seatCount: number | null;
	};
}

export interface Airport {
	code: string;
}
