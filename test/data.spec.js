import { example, anotherExample } from '../src/data.js';


describe('example', () => { //esta es la estructura basica de los test
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

/*it('is a function', () => {
    expect(typeof example).toBe('function');
  });*/

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
