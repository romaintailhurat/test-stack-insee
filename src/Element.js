const DEFAULT_VALUES = {
  atomicNumber : 1,
  chemicalSymbol : 'H',
  name : 'Hydrogen'
};

const ELEMENTS_VALUE = {
  'hydrogen' : {
    name : 'Hydrogen',
    atomicNumber : 1,
    chemicalSymbol : 'H'
  },
  'helium' : {
    name : 'Helium',
    atomicNumber : 2,
    chemicalSymbol : 'He'
  }
}

/* Represents an atomic element according to the Mendeleiev periodic table. */
class Element {

  constructor(name = DEFAULT_VALUES.name,
              atomicNumber = DEFAULT_VALUES.atomicNumber,
              chemicalSymbol = DEFAULT_VALUES.chemicalSymbol) {
    this.name = name;
    this.atomicNumber = atomicNumber;
    this.chemicalSymbol = chemicalSymbol;
  }

  static create(name) {
    let n = ELEMENTS_VALUE[name].name;
    let atomicNumber = ELEMENTS_VALUE[name].atomicNumber;
    let chemicalSymbol = ELEMENTS_VALUE[name].chemicalSymbol;
    return new Element(n, atomicNumber, chemicalSymbol);
  }
}

export default Element;
