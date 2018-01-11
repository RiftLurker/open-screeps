# is-my-room
> Check wether a room is yours

## Install
```sh
$ npm install @open-screeps/is-my-room
```

## Usage
```typescript
import { isMyRoom } from '@open-screeps/is-my-room';

const myRooms = _.filter(Game.rooms, room => isMyRoom(room))
```

## Related
- [is-room-visible](https://github.com/PostCrafter/open-screeps/tree/master/src/is-room-visible)

## License
[MIT](../../license.md)
