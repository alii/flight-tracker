interface Props {
	title: string;
	children: string | number | (string | number)[];
	subtext?: string;
}

export function Card(props: Props) {
	return (
		<div className="space-y-2 bg-gray-200 dark:bg-gray-800 p-3 rounded-lg border border-gray-300 dark:border-gray-600">
			<h2 className="opacity-80">{props.title}</h2>
			<p className="text-2xl">{props.children}</p>
			{props.subtext !== undefined && <p className="text-sm opacity-50">{props.subtext}</p>}
		</div>
	);
}
