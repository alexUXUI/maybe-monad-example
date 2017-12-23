const chai = require('chai');
const expect = require("chai").expect;
const { Maybe, Just, Nothing } = require('../lib/maybe.js');

describe('\n Maybe Monad test suite:', () => {
  
  describe('\n Maybe Monads tests:', () => {
    it('should exist', () => {
      expect(Maybe).to.not.be.undefined;
    });

    it('should have the corresponding methods', () => {
      expect(Maybe.just).to.be.an.instanceof(Function);
      expect(Maybe.nothing).to.be.an.instanceof(Function);
      expect(Maybe.of).to.be.an.instanceof(Function);
    });
  });

  describe('\n Just Monad suite:', () => {
    it('Maybe should have a sub-type of Just', () => {
      expect(Just).to.not.be.undefined;
      const testJust = new Just(123);
      expect(testJust.getOrElse).to.be.an.instanceof(Function);
    });

    it('should return a monad wrapper when a default is set', () => {
      expect(
        Maybe.fromNullable(123).getOrElse('set a default value')
      ).to.deep.equal({ value: 123 });
    });

    it('should return a monad wrapper if no defualt if specified', () => {
      expect(
        Maybe.fromNullable(123)
      ).to.deep.equal({ value: 123 });
    });
  });

  describe('\n Nothing Monad Suite:', () => {
    it('Nothing should exist', () => {
      expect(Nothing).to.not.be.undefined;
    });
    
    it('Nothing shoud have methods', () => {
      const testNothing = new Nothing(undefined);
      expect(testNothing.getOrElse).to.be.an.instanceof(Function);
    });

    it('should return a monad wrapper when a default is set', () => {
      expect(
        Maybe.fromNullable(undefined).getOrElse('set a default value')
      ).to.deep.equal({value: 'set a default value'});
    });

    it('should not return a monad wrapper if no defualt if specified', () => {
      expect(Maybe.fromNullable(null)).to.deep.equal({});
    });
  });

});