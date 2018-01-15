export function isCreepAlive(creep: string): boolean {
	return creep in Game.creeps;
}
