import { isCreepAlive } from '@open-screeps/is-creep-alive';

export function isCreepSpawning(creepName: string | Creep): boolean {
	let creep: Creep;

	if (typeof creepName === 'string') {
		if (!isCreepAlive(creepName)) {
			return false;
		}

		creep = Game.creeps[creepName];
	} else {
		creep = creepName;
	}

	return creep.spawning;
}
