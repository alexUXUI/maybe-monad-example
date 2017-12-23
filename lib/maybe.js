class Maybe {
  static fromNullable(value) {
    return value ? 
      new Just(value) : 
      new Nothing();
  }

  static just(value) {
    return new Just(value);
  }

  static nothing(value) {
    return new Nothing(value);
  }

  static of() {
    return value;
  }
}

class Nothing extends Maybe {
  constructor() {
    super();
  }

  getOrElse(other) {
    return Maybe.fromNullable(other);
  }
}

class Just extends Maybe {
  constructor(value) {
    super(); 
    this.value = value;
  }

  getOrElse() {
    return Maybe.fromNullable(this.value);
  }
}
    
module.exports = {
  Maybe,
  Just,
  Nothing
}