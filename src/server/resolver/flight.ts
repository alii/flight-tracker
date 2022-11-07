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
		timezoneDelta: number;
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
	};

	/**
	 * Statistics of the flight right now
	 */
	stats: {
		/**
		 * The ground speed we are travelling at in MPH
		 */
		groundSpeed: number;

		/**
		 * The speed of which we are ascending or descending at in MPH
		 */
		verticalSpeed: number;

		/**
		 * The altitude in feet
		 */
		altitude: number;
	};
}

export interface Airport {
	code: string;
}
