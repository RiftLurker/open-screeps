# is-creep-carrying
> Is the creep carrying the given resource

## Install
```sh
$ npm install @open-screeps/is-creep-carrying
```

## Usage
```typescript
import { isCreepCarrying } from '@open-screeps/is-creep-carrying';

if(isCreepCarrying(creep, RESOURCE_ENERGY)){
  creep.transfer(container, RESOURCE_ENERGY);
}
```

## Related

## License
[MIT](../../license.md)
