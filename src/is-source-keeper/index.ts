export const SOURCEKEEPER_USERNAME = 'Source Keeper';

export function isSourceKeeper(target: string | Creep): boolean {
	if (target instanceof Creep) {
		return isSourceKeeper(target.owner.username);
	}
	return target === SOURCEKEEPER_USERNAME;
}
