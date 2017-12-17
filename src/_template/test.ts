import test from 'ava';
import { example } from './index';

test('Should act as an example to be used as a template', t => {
	example();
	t.fail('has to be replaced with an actual test');
});
