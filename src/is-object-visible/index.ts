export function isObjectVisible(id: string): boolean {
	return !(Game.getObjectById(id) === null);
}
