import test from 'ava';

import { isMyRoom } from './index';

declare const global: any;

function stubGame(){
	global.Game = {
		rooms: {
			'W1N1': {
				controller: {
					my: true
				}
			},
			'W2N1': {
				controller: {
					my: false
				}
			},
			'W3N1': {}
		}
	}
}

test('Should only return true for owned rooms', t => {
	stubGame();

	t.true(isMyRoom('W1N1'));
	t.false(isMyRoom('W2N1'));
	t.false(isMyRoom('W3N1'));
	t.false(isMyRoom('E1N1'));
	t.true(isMyRoom(Game.rooms['W1N1']));
	t.false(isMyRoom(Game.rooms['W3N1']));
	t.false(isMyRoom(''))
});
