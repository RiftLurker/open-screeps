import test from 'ava';

import { example } from './index';

test('Should act as an example to be used as a template', t => {
	example();
	t.pass('Calls example() once in order to trigger code coverage');
});
