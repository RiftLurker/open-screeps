# is-object-visible
> Is the game object visible

## Install
```sh
$ npm install @open-screeps/is-object-visible
```

## Usage
```typescript
import { isObjectVisible } from '@open-screeps/is-object-visible';

if(isObjectVisible('someid')){
  const source = Game.getObjectById<Source>('someid')
}
```

## Related
- [is-room-visible](https://github.com/PostCrafter/open-screeps/tree/master/src/is-room-visible)

## License
[MIT](../../license.md)
