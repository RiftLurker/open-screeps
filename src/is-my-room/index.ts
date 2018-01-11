import {isRoomVisible} from '@open-screeps/is-room-visible'

export function isMyRoom(roomName: string | Room): boolean{
  if(!roomName){
    return false
  }

  let room: Room

  if(typeof roomName === 'string'){
    if(!isRoomVisible(roomName)){
      return false
    }

    room = Game.rooms[roomName]
  }else{
    room = roomName
  }

  if(!room.controller){
    return false
  }

  return room.controller.my
}
