# avajs beforeEach hook issue

Test cases where a `Foo` object that has a `bar` method which tracks its calls. 
Within the `beforeEach` hook, a `Foo` object is constructed and its `bar` method is called with the argument `foo`, where `foo` is equal to the same `Foo` object.

## What's wrong

Running tests in parallel causes the `test.context.bar.prototype` to **not** be strictly equal to `foo.bar.mock.calls[0].arguments[0].foo.bar.prototype`.

- There is no difference between the three cases they're just here to demonstrate running test cases in parallel
- No issue occurs when running tests in serial mode or when there is only one case.
- The last test case will always succeed.

Tested on versions: 

- `6.2.0`

Inside the following env:

- Linux
- Node v23.1.0
- npm v10.9.0

## Actual

- `src/call-from-within-case.ava.test.js`: **KO**
- `src/call-from-within-hook.ava.test.js`: **KO**
- `src/no-hook.ava.test.js`: **OK**
- `src/serial.ava.test.js`: **OK**
- `src/call-from-within-hook.node.test.js`: **OK**

## Expected

It is expected that all tests pass.

## Run tests

Using ava test runner:
- `npm test`

Using node test runner:
- `npm run test:node`

## Debug

-  `npm test -- debug src/call-from-within-hook.ava.test.js`

Devtools:
* `curl 127.0.0.1:9229/json -s | jq .[].devtoolsFrontendUrl -r`
* Open the URL inside chrome.

CLI:

- `node inspect 127.0.0.1:9229`
