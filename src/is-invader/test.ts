import test from 'ava';

import { isInvader, USERNAME } from './index';

test('USERNAME should match string "Invader"', t => {
	t.is(USERNAME, 'Invader')
});

test('Should return true for matching owner username', t => {
	t.true(isInvader(stubCreep('Invader')))
});

test.todo('Generative testing with testcheck-js for any other test cases');

test('Should return false for unmatching owner username', t => {
	t.false(isInvader(stubCreep('PostCrafter')));
	t.false(isInvader(stubCreep('Source Keeper')));
	t.false(isInvader(stubCreep('Screeps')));
});

function stubCreep(ownerUsername: string): Creep {
	return {
		owner: {
			username: ownerUsername,
		},
	} as Creep;
}
