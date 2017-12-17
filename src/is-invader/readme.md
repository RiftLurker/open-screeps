# is-invader
> Check if something is an Invader

## Install
```sh
$ npm install @open-screeps/is-invader
```

## Usage
```typescript
import { isInvader } from '@open-screeps/is-invader';

const hostiles = Game.rooms.sim.find(FIND_HOSTILE_CREEPS);
const invaders = invaders.filter(isInvader);
```

## Related
- [is-source-keeper](../is-source-keeper/)

## License
[MIT](../../license.md)
