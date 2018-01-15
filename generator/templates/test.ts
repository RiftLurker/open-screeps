import ava from 'ava';

import { example } from './index';

ava('Should act as an example to be used as a template', (t) => {
	example();
	t.pass('Calls example() once in order to trigger code coverage');
});
