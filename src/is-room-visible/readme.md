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

## License
[MIT](../../license.md)
