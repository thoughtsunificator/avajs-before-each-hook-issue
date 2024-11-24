import nodeTest from 'node:test';
import assert from 'node:assert/strict';
import Foo from "./foo.js"

nodeTest.beforeEach((test) => {
	test.foo = new Foo()
	test.foo.bar({ foo: test.foo })
})

nodeTest("Call from within hook (Node): Case 1", (test) => {
	const { foo } = test
	assert.strictEqual(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})

nodeTest("Call from within hook (Node): Case 2", (test) => {
	const { foo } = test
	assert.strictEqual(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})

nodeTest("Call from within hook (Node): Case 3", (test) => {
	const { foo } = test
	assert.strictEqual(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})
