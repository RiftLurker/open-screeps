# is-creep-spawning
> Is the named/supplied creep spawning?

## Install
```sh
$ npm install @open-screeps/is-creep-spawning
```

## Usage
```typescript
import { isCreepSpawning } from '@open-screeps/is-creep-spawning';

const spawningCreeps = _.filter(Game.creeps, (creep) => isCreepSpawning(creep))
```

## Related
- [is-creep-alive](https://github.com/PostCrafter/open-screeps/tree/master/src/is-creep-alive)

## License
[MIT](../../license.md)
