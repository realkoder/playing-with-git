import { getHelloWorld } from '../src/app';


test('returns the correct hello world message', () => {
  expect(getHelloWorld()).toBe('hello world');
});