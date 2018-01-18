import ava from 'ava';

import { towerEffectivenessAtRange } from './index';

declare const global: any;

global.TOWER_HITS = 3000;
global.TOWER_CAPACITY = 1000;
global.TOWER_ENERGY_COST = 10;
global.TOWER_POWER_ATTACK = 600;
global.TOWER_POWER_HEAL = 400;
global.TOWER_POWER_REPAIR = 800;
global.TOWER_OPTIMAL_RANGE = 5;
global.TOWER_FALLOFF_RANGE = 20;
global.TOWER_FALLOFF = 0.75;

ava('Should calculate the tower effectiveness for the given ranges', (t) => {
	t.is(towerEffectivenessAtRange(2), 600);
	t.is(towerEffectivenessAtRange(21), 150);
	t.is(towerEffectivenessAtRange(10), 450);
	t.is(towerEffectivenessAtRange(15), 300);
	t.is(towerEffectivenessAtRange(2, 'heal'), 400);
	t.is(towerEffectivenessAtRange(2, 'repair'), 800);
});
