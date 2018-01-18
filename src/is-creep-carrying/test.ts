import ava from 'ava';

import { isCreepCarrying } from './index';

declare const global: any;

function stubGame() {
	global.Game = {
		creeps: {
			dave: {
				carry: {
					energy: 0,
					power: 100,
				},
			},
			phil: {
				carry: {
					energy: 100,
					U: 90,
				},
			},
		},
	};
}

global.RESOURCE_POWER = 'power';
global.RESOURCE_ENERGY = 'energy';
global.RESOURCE_CATALYST = 'X';

ava('Should return the correct values', (t) => {
	stubGame();

	t.true(isCreepCarrying(Game.creeps.dave, RESOURCE_POWER));
	t.false(isCreepCarrying(Game.creeps.dave, RESOURCE_CATALYST));
	t.false(isCreepCarrying(Game.creeps.dave, RESOURCE_ENERGY));
	t.true(isCreepCarrying(Game.creeps.phil, RESOURCE_ENERGY));
	t.false(isCreepCarrying(Game.creeps.phil, RESOURCE_CATALYST));
});
