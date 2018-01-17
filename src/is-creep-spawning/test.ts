import ava from 'ava';

import { isCreepSpawning } from './index';

declare const global: any;

function stubGame() {
	global.Game = {
		creeps: {
			dave: {
				spawning: true,
			},
			phil: {
				spawning: false,
			},
		},
	};
}

ava('Should return the right values for the given creeps', (t) => {
	stubGame();

	t.true(isCreepSpawning('dave'));
	t.false(isCreepSpawning('phil'));
	t.false(isCreepSpawning('jeff'));
	t.true(isCreepSpawning(Game.creeps['dave']));
});
