/**

*/

import { describe, it } from 'mocha';
import { expect } from 'chai';
import Element from '../src/Element';

describe('Mendeleiev element', () => {
  it('should have an atomic number', () => {
    let e = new Element();
    expect(e.atomicNumber).to.be.a('number');
    expect(e.atomicNumber).to.be.below(104);
  });

  it('should have a chemical symbol', () => {
    let e = new Element();
    expect(e.chemicalSymbol).to.be.a('string');
  });
});
