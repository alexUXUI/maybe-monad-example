var { Maybe, Just, Nothing } = require('../lib/maybe.js');

// console.log(`
//   do I have the things?
//   ${Maybe}
//   ${Just}
//   ${Nothing}
// `);

let maybeJust = Maybe.fromNullable(86712934);

console.log(maybeJust);

// maybeNothing = Maybe.fromNullable(null)
//                     .getOrElse('I\'m a default value' );

// console.log(maybeNothing);

// var justAndNothing = [
//   null, 
//   'String value', 
//   undefined, 
//   2364, 
//   false, 
//   'another thing'
// ];

// const makeSyncronous = array => Promise.resolve(justAndNothing.map(element => 

//   Maybe.fromNullable(element)).getOrElse(`~ default value ~`));

// makeSyncronous(justAndNothing).then(console.log);