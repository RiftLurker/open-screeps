# tower-effectiveness-at-range
> Calculate the effectiveness of tower actions at the given range

## Install
```sh
$ npm install @open-screeps/tower-effectiveness-at-range
```

## Usage
```typescript
import { towerEffectivenessAtRange } from '@open-screeps/tower-effectiveness-at-range';

let damage = towerEffectivenessAtRange(creep.pos.getRangeTo(tower));

let heal = towerEffectivenessAtRange(creep.pos.getRangeTo(tower), 'heal');

let repair = towerEffectivenessAtRange(container.pos.getRangeTo(tower), 'repair');
```

## Related

## License
[MIT](../../license.md)
