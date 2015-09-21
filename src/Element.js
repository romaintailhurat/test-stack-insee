const DEFAULT_VALUES = {
  atomicNumber : 1,
  chemicalSymbol : 'H'
};

class Element {

  constructor() {
    this.atomicNumber = DEFAULT_VALUES.atomicNumber
    this.chemicalSymbol = DEFAULT_VALUES.chemicalSymbol;
  }
}

export default Element;
