import { isRoomVisible } from '@open-screeps/is-room-visible';

export const ROOM_SIMULATION = 'sim';

export function isSimulation() {
	return isRoomVisible(ROOM_SIMULATION);
}
