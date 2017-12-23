export function isRoomVisible(roomName: string): boolean {
	return roomName in Game.rooms;
}
