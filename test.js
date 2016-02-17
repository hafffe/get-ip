import test from 'ava';
import getIp from './';

test('result should be an array', async t => {
	t.true(Array.isArray(await getIp()));
});
