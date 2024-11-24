import ava from "ava"
import Foo from "./foo.js"

ava("No hook: Case 1", (test) => {
	const foo = new Foo()
	foo.bar({ foo })
	test.is(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})

ava("No hook: Case 2", (test) => {
	const foo = new Foo()
	foo.bar({ foo })
	test.is(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})

ava("No hook: Case 3", (test) => {
	const foo = new Foo()
	foo.bar({ foo })
	test.is(
		foo.bar.mock.calls[0].arguments[0].foo.bar.prototype,
		foo.bar.prototype,
		"Case 1 foo.bar.prototype strict equality failed"
	)
})
