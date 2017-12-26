# is-room-visible
> Check whether a room is currently visible

## Install
```sh
$ npm install @open-screeps/is-room-visible
```

## Usage
```typescript
import { isRoomVisible } from '@open-screeps/is-room-visible';

const observerTargets = Object.keys(Memory.rooms).filter(r => isRoomVisible(r));
```

## Related
- [is-simulation](https://github.com/PostCrafter/open-screeps/tree/master/src/is-simulation)

## License
[MIT](../../license.md)
