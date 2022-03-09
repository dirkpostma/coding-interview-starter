import { hello } from './hello'

test("solution returns 'Hello World!'", () => {
    expect(hello()).toStrictEqual('Hello World!');
});