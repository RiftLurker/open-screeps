# is-creep-alive
> Returns true if the creep is alive

## Install
```sh
$ npm install @open-screeps/is-creep-alive
```

## Usage
```typescript
import { isCreepAlive } from '@open-screeps/is-creep-alive';

const livingCreeps = _.filter(Memory.creepList, (creepName) => isCreepAlive(creepName))
```

## Related
- [is-room-visible](https://github.com/PostCrafter/open-screeps/tree/master/src/is-room-visible)

## License
[MIT](../../license.md)
