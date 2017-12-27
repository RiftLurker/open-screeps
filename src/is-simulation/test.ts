import test from 'ava';

import { isSimulation, ROOM_SIMULATION } from './index';

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

test('Should return true when the room `ROOM_SIMULATION` is visible.', t => {
	stubGame(ROOM_SIMULATION);
	t.true(isSimulation());
});

test('Should return false when the room `ROOM_SIMULATION` is not visible.', t => {
	stubGame('tutorial');
	t.false(isSimulation());
});
