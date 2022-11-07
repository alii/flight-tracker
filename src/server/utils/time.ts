export function percentageBetweenTimestamps(from: number, to: number, now = Date.now()) {
	const elapsedJourneyTime = now - from;
	const totalJourneyTime = to - from;

	return (elapsedJourneyTime / totalJourneyTime) * 100;
}
