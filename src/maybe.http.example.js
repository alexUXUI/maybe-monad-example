var axios = require('axios');
var { Maybe } = require('../lib/maybe.js');

/**
 * Here's another real world use case for maybe monads: HTTP Requests
 * We can use the Maybe monad to handle potentially null responses.
 * We do this instead of manually checking if there's a response in
 * EVERY SINGLE request method callback function. Rather than manually check,
 * we simply reuse the Maybe Monad.
 */

axios.get('http://localhost:3000/null-resource').then(response => {

  var handleResponse = Maybe
                        .fromNullable(response.data)
                        .getOrElse('something');

  console.log(handleResponse); // Just { value: 'something' }

}).catch(error => console.log(error));

axios.get('http://localhost:3000/not-null-uri').then(response => {
    
  var handleResponse = Maybe
                        .fromNullable(response.data)
                        .getOrElse('something');

  console.log(handleResponse); // { data: 'all types of wonderful data!' }

}).catch(error => console.log(error));