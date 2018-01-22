export function creepCountBodypart(creep: Creep, part: BodyPartConstant): number {
	return _.where(creep.body, {type: part}).length
}
