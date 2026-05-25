export const manualChapters: Record<number, string> = {
	1: "Core Concepts",
	2: "Browser",
	3: "Clip Launcher",
	4: "Arranger",
	5: "Mixer",
	6: "Piano Roll",
	7: "Instruments",
	8: "Reference",
};

export function parseManualNumber(value: string): number[] {
	return value.split(".").map(part => Number.parseInt(part, 10));
}

export function compareManualNumbers(a: string, b: string): number {
	const aa = parseManualNumber(a);
	const bb = parseManualNumber(b);
	const length = Math.max(aa.length, bb.length);

	for (let i = 0; i < length; i += 1) {
		const av = aa[i] ?? 0;
		const bv = bb[i] ?? 0;
		if (av !== bv) return av - bv;
	}

	return 0;
}

export function getManualChapter(number: string): number {
	return parseManualNumber(number)[0] ?? 0;
}

export function formatManualLabel(number: string, title: string): string {
	return `${number} ${title}`;
}

export function formatHeadingNumber(pageNumber: string, index: number, depth: number): string {
	const parts = parseManualNumber(pageNumber);

	if (parts.length === 1) {
		if (depth === 2) {
			return `${parts[0]}.${index}`;
		}

		if (depth === 3) {
			return `${parts[0]}.${index}.1`;
		}
	}

	if (depth === 2) {
		return `${pageNumber}.${index}`;
	}

	if (depth === 3) {
		return `${pageNumber}.${index}`;
	}

	return pageNumber;
}
