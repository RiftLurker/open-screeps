import test from 'ava';

import { isRoomVisible } from './index';

declare const global: any;

function stubGame(...rooms: string[]) {
	type RoomsStub = {
		[roomName: string]: boolean;
	};

	global.Game = rooms.reduce((game, roomName) => {
		game.rooms[roomName] = true;
		return game;
	}, {
		rooms: {} as RoomsStub
	});
}

test('Should only return true if the object `Game.rooms` contains the specified key', t => {
	stubGame('E2S7');
	t.true(isRoomVisible('E2S7'));
	t.false(isRoomVisible('tutorial'));
	t.false(isRoomVisible('sim'));
});
