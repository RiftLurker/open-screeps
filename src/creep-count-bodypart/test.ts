import ava from 'ava';
import * as lodash from 'lodash';

import { creepCountBodypart } from './index';

declare const global: any;

global._ = lodash

global.ATTACK = 'attack'
global.CARRY = 'carry'
global.CLAIM = 'claim'
global.MOVE = 'move'
global.RANGED_ATTACK = 'ranged_attack'
global.TOUGH = 'tough'
global.WORK = 'work'
global.HEAL = 'heal'

function stubGame() {
	global.Game = {
		creeps: {
			dave: {
				body: [
					{
						type: ATTACK,
						boost: undefined,
						hits: 100,
					},
					{
						type: MOVE,
						boost: undefined,
						hits: 100,
					},
					{
						type: MOVE,
						boost: undefined,
						hits: 100,
					}
				]
			},
		},
	};
}

ava('Should count the bodyparts', (t) => {
	stubGame();

	t.is(creepCountBodypart(Game.creeps.dave, ATTACK), 1);
	t.is(creepCountBodypart(Game.creeps.dave, MOVE), 2);
	t.is(creepCountBodypart(Game.creeps.dave, CARRY), 0);
});