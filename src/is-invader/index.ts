export const INVADER_USERNAME = 'Invader';

export function isInvader(target: string | Creep): boolean | never {
	if (target instanceof Creep) {
		return isInvader(target.owner.username);
	}
	return target === INVADER_USERNAME;
}
