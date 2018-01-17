import ava from 'ava';

import { isObjectVisible } from './index';

declare const global: any;

function stubGame() {
	const objects: {[id: string]: {} | null} = {
		foo: {},
		bar: null,
	};

	global.Game = {
		getObjectById: (id: string) => {
			return objects[id];
		},
	};
}

ava('Should return the right values', (t) => {
	stubGame();

	t.true(isObjectVisible('foo'));
	t.false(isObjectVisible('bar'));
});
