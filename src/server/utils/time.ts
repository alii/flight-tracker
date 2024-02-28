import {clamp} from './math';

export function percentageBetweenTimestamps(from: number, to: number, now = Date.now()) {
	const elapsedJourneyTime = now - from;
	const totalJourneyTime = to - from;

	const percent = (elapsedJourneyTime / totalJourneyTime) * 100;

	return clamp(0, percent, 100);
}
