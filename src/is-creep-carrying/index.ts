export function isCreepCarrying(creep: Creep, resource: ResourceConstant): boolean {
	if (resource === RESOURCE_ENERGY) {
		return creep.carry.energy > 0;
	}

	return creep.carry[resource] !== undefined;
}
