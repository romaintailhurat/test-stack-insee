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

  it('should have a name', () => {
    let e = new Element();
    expect(e.name).to.be.a('string');
  });

  it('should create an Element by name', () => {
    let hydrogen = Element.create('hydrogen');
    expect(hydrogen.name).to.equal('Hydrogen');

    let helium = Element.create('helium');
    expect(helium.atomicNumber).to.equal(2);
    expect(helium.name).to.equal('Helium');
  });
});
