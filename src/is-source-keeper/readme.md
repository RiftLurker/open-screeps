# is-source-keeper
> Check if something is a Source Keeper

## Install
```sh
$ npm install @open-screeps/is-source-keeper
```

## Usage
```typescript
import { isSourceKeeper } from '@open-screeps/is-source-keeper';

const hostiles = Game.rooms.sim.find(FIND_HOSTILE_CREEPS);
const sourceKeepers = invaders.filter(isSourceKeeper);
```

## Related
- [is-invader](../is-invader/)

## License
[MIT](../../license.md)
