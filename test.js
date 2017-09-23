import test from 'ava';
import isIp from 'is-ip';
import m from '.';

test('ipv4', t => {
	for (const x of m()) {
		t.true(isIp.v4(x));
	}
});

test('ipv6', t => {
	for (const x of m.v6()) {
		t.true(isIp.v6(x));
	}
});
