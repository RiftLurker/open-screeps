import ava from 'ava';

import { isCreepFatigued } from './index';

declare const global: any;

function stubGame() {
	global.Game = {
		creeps: {
			dave: {
				fatigue: 10,
			},
			phil: {
				fatigue: 0,
			},
		},
	};
}

ava('Should return the correct values', (t) => {
	stubGame();

	t.true(isCreepFatigued(Game.creeps.dave));
	t.false(isCreepFatigued(Game.creeps.phil));
});
