const DEFAULT_VALUES = {
  atomicNumber : 1,
  chemicalSymbol : 'H',
  name : 'Hydrogen'
};

class Element {

  constructor() {
    this.atomicNumber = DEFAULT_VALUES.atomicNumber
    this.chemicalSymbol = DEFAULT_VALUES.chemicalSymbol;
    this.name = DEFAULT_VALUES.name;
  }
}

export default Element;
