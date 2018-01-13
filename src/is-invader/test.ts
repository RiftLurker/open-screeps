import ava from 'ava';

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

ava.beforeEach(() => {
	global.Creep = StubCreep;
});

ava('INVADER_USERNAME should match string "Invader"', (t) => {
	t.is(INVADER_USERNAME, 'Invader');
});

ava('When passing a string, it should only return true when matching INVADER_USERNAME', (t) => {
	t.true(isInvader(INVADER_USERNAME));
	t.false(isInvader('PostCrafter'));
	t.false(isInvader('Source Keeper'));
	t.false(isInvader('Screeps'));
});

ava(
	'When passing a Creep should only return true when the owner is matching INVADER_USERNAME',
	(t) => {
		t.true(isInvader(stubCreep(INVADER_USERNAME)));
		t.false(isInvader(stubCreep('PostCrafter')));
		t.false(isInvader(stubCreep('Source Keeper')));
		t.false(isInvader(stubCreep('Screeps')));
	},
);

ava.todo('Generative testing with testcheck-js for any other ava cases');

function stubCreep(ownerUsername: string): Creep {
	return new StubCreep(ownerUsername) as Creep;
}
