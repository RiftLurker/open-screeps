export function towerEffectivenessAtRange(
	range: number,
	max: number,
): number {
	if (range <= TOWER_OPTIMAL_RANGE) {
		return max;
 	}
	if (range >= TOWER_FALLOFF_RANGE) {
		return max  * (1 - TOWER_FALLOFF);
 	}

	const towerFalloffPerTile = TOWER_FALLOFF / (TOWER_FALLOFF_RANGE - TOWER_OPTIMAL_RANGE);

	return max * (1 - (range - TOWER_OPTIMAL_RANGE) * towerFalloffPerTile);
}
