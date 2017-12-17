import test from 'ava';

import { isInvader, INVADER_USERNAME } from './index';

declare const global: any;

// @todo stub creep with sinon
// @todo spy if .owner.username is actually accessed

class StubCreep {
	public owner: { username: string };
	constructor(username: string) {
		this.owner = {
			username,
		};
	}
}

test.beforeEach(() => {
	global.Creep = StubCreep;
});

test('INVADER_USERNAME should match string "Invader"', t => {
	t.is(INVADER_USERNAME, 'Invader');
});

test('When passing a string, it should only return true when matching INVADER_USERNAME', t => {
	t.true(isInvader(INVADER_USERNAME));
	t.false(isInvader('PostCrafter'));
	t.false(isInvader('Source Keeper'));
	t.false(isInvader('Screeps'));
});

test('When passing a Creep should only return true when the owner is matching INVADER_USERNAME', t => {
	t.true(isInvader(stubCreep(INVADER_USERNAME)));
	t.false(isInvader(stubCreep('PostCrafter')));
	t.false(isInvader(stubCreep('Source Keeper')));
	t.false(isInvader(stubCreep('Screeps')));
});

test.todo('Generative testing with testcheck-js for any other test cases');

function stubCreep(ownerUsername: string): Creep {
	return new StubCreep(ownerUsername) as Creep;
}
