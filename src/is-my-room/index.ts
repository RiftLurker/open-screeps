export function isMyRoom(roomName: string): boolean{
  return !!(
    roomName in Game.rooms
    &&
    Game.rooms[roomName].controller
    &&
    Game.rooms[roomName].controller!.my
  );
}
