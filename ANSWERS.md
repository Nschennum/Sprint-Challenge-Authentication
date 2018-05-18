<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware: Middleware are essentially pieces of code that extend functionality to your request handlers, and are defined outside or the request handler to be reusable. They can be used globally at the applicaiton level, or locally, working only with specified requests in a project. They are essentially a middleman between the client's request, and the handler's response; the funciton with (req) and (res) respectivly. 

Sessions: Sessions, as used in Express, are a way of persisting state through multiple different client requests, for a dynamic/connected user experience with the application. They are added to the request object (req), and allow you to add on key/value pairs to them as you would any other object literal in JavaScript: primarily with dot syntax. Express Sessions need to be installed as a module for them to function. Also, they can store the data in four different locations depending on their implementation: in application memory, in a cookie, in the memory cache, or on the database itself.

Bcrypt: Bcrypt is a library used for encripting data stored on a server so that it is not saved as plain text, which is easily hacked by hackers using rainbow tables, etc. It does this via a process called "Hashing", which is essentially converting the plain text input data and adding anther long string of information, known as a "Salt," which Bcrypt also generates, so that the user input can be stored safely. 

JWT: JSON Web Tokens(JWT) are an industry upgrade from a cookie server session. They are a secure way of authenticating access and passing data back and forth between the client and server and JSON objects. There is a header, payload, and signature, all of which play unique parts in facilitating the interaction between front-end and back-end. The server specifies a 'secret' string which is used in a HMAC algorithm for encryption or a public/private key pair. 

2.  What does bcrypt do in order to prevent attacks?

If plain text passwords were stored as they are, a dump of server's data can easily grant access to user accounts. The process of Hashing with bcrypt is a one way encryption that encodes and extends a user pass word with a key, algorythm code, and an enncryption exponent that extends the amount of time the password spends in the encription algorithm extending the encrypted password out to a long comppex string. Depending on the length and characters(mixed characters and longer strings adding to the security complexity), ic could take hackers using rainbow tables a rediculous amount or years to decode your password, hence rendering your password and data secure.

3.  What are the three parts of the JSON Web Token?

Header: contains algorythm identifier for for type of token(JWT), and hashing algorithm used (EX: HMAC)

Payload: This section of the JWT houses the "Claims" of type 'registered', 'public', and 'private'; it usually contains identifiying information about the user and other metadata.

The Signature: Where the Hashing Algorithm takes into account the Header, Payload, and Secret; adding a large encrypted tag that is used to verify the user and information sent in via JWT to interact with the server.