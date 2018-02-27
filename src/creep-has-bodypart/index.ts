export function creepHasBodypart(creep: Creep, bodypart: BodyPartConstant): boolean {
	return (_.where(creep.body, {type: bodypart}).length > 0)
}
