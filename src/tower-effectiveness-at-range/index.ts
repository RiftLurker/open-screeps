export function towerEffectivenessAtRange(
	range: number,
	action: 'attack' | 'heal' | 'repair' = 'attack',
): number {
	let max: number = 0;

	switch (action) {
	case 'attack':
		max = TOWER_POWER_ATTACK;
		break;
	case 'heal':
		max = TOWER_POWER_HEAL;
		break;
	case 'repair':
		max = TOWER_POWER_REPAIR;
		break;
	}

	if (range <= TOWER_OPTIMAL_RANGE) {
		return max;
 	}
	if (range >= TOWER_FALLOFF_RANGE) {
		return max  * (1 - TOWER_FALLOFF);
 	}

	const towerFalloffPerTile = TOWER_FALLOFF / (TOWER_FALLOFF_RANGE - TOWER_OPTIMAL_RANGE);

	return max * (1 - (range - TOWER_OPTIMAL_RANGE) * towerFalloffPerTile);
}
