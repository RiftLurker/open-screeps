import ava from 'ava';

import { isCreepAlive } from './index';

declare const global: any;

function stubGame() {
	global.Game = {
		creeps: {
			dave: {},
			bob: {},
		},
	};
}

ava('Should return the right values for is creep alive', (t) => {
	stubGame();

	t.true(isCreepAlive('dave'));
	t.false(isCreepAlive('phil'));
});
