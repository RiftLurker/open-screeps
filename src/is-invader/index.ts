export const USERNAME = 'Invader';

export function isInvader(creep: Creep): boolean {
	return creep.owner.username === USERNAME;
}
