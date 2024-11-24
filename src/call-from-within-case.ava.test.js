import ava from "ava"
import Foo from "./foo.js"

ava.beforeEach((test) => {
	test.context.foo = new Foo()
})

ava("Call from within test case: Case 1", (test) => {
	const { foo } = test.context
	test.context.foo.bar({ foo: test.context.foo })
	test.is(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})

ava("Call from within test case: Case 2", (test) => {
	const { foo } = test.context
	test.context.foo.bar({ foo: test.context.foo })
	test.is(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})

ava("Call from within test case: Case 3", (test) => {
	const { foo } = test.context
	test.context.foo.bar({ foo: test.context.foo })
	test.is(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})
