/**
 * A Foo object that has a bar method which has its calls tracked in a "mock" object property.
 */
function Foo() {
	const mock = { calls: [] }
	Object.getPrototypeOf(this.bar).mock = mock
	this.bar = function() {
		mock.calls.push({ arguments })
	}
}
Foo.prototype.bar = function() {}

export default Foo
