var { Maybe } = require('../lib/maybe.js');

/**
 * So, we have our maybe monad. That's great, but when will
 * we ACTUALLY use it?! The following are some example of maybe
 * Monads in action in real world situations.
 */

 /** 
  * Example number one:
  * Key'ing into deeply nested object state.
  * 
  */

// Let's say we have a deeply nested Object of Objects
// Ex: const myObj = { a: { b : 'c' } }
const myObj = { a: { b : 'c' } };

/** 
 * I am SO tired of having to manually + imperatively check if every
 * object exists to SAFELY access 'c'
 */
let holderVarForC = myObj.a.b ? myObj.a.b : 'Im a default value' // this is AWFUL

/** 
 * Instead let's do it the functional, reuasable way:
 */
const safeAccessC = Maybe
                      .fromNullable(myObj.a.b)
                      .getOrElse('im a default value');

const safeAccessUndefined = Maybe
                              .fromNullable(myObj.a.b.c)
                              .getOrElse('im a default value');

console.log(safeAccessC); // Just { value: 'c' }
console.log(safeAccessUndefined); // Just { value: 'im a default value' }

/**
 * Lets examine another real world use case for Maybe monads:
 * A colleciton of value that may or may NOT exist
 */

 /**
  * for example lets say we have this colleciton:
  */
var justAndNothing = [
  null, 
  'String value', 
  undefined, 
  2364, 
  false, 
  'another thing'
];

// I am SO tired of having to do this
justAndNothing.map(el => {
  if(el != null || undefined) {
    console.log(el)
    return el
  } else {
    console.log(`El is not defined!`)
  }
})

/**
 * instead lets REUSE or logic and apply it to every array item
 */
const makeSyncronous = array => 
  Promise.resolve(justAndNothing.map(element => 
    Maybe.fromNullable(element).getOrElse(`~ default value ~`)
  )
);

makeSyncronous(justAndNothing).then(console.log);

