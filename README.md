# Learning.NodeJSWithTypescript
For learning typescript, this project describes the application, at  Spartans and Heroes as users of system. The Spartans describes amount of death peoples and Heroes amount of saved peoples. 

Patterns and Principles in this project:

- Generic Repository Pattern
- Singleton Pattern
- Multi-layer Architecture Pattern

Tools:
- NodeJS
- TypeScript
- ExpressJS
- MongoDB
- Mongoose
- GulpJS
- VSCode Task Runners

Convention Refs: <br />
   <a href="https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines" target="_blank"> Coding guidelines Typescript - Microsoft</a> 

Run:
   <br><code>  > npm install </code>
    
   if not executing from VSCode: 
   <br><code> > gulp </code>

<h2> REST API Definitions: </h2>


CREATE <br />
   <code> > METHOD: POST </code> <br />
   <code> > PARAMS: {"name":"Leonidas King","amountPeopleKilled":120,"folk":"agoge"} </code> <br />
   <code> > URL: http://localhost:5000/spartans </code> <br />
   <code> > RETURN: success or error </code> <br />
<br />
<br />
   <code> > METHOD: POST </code> <br />
   <code> > PARAMS: {"name":"Goku God","power":"sayan","amountPeopleSaved":2000 } </code> <br />
   <code> > URL: http://localhost:5000/heroes </code> <br />
   <code> > RETURN: success or error </code> <br />
<br />
<br />    

RETRIEVE <br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:5000/heroes/ </code> <br />
   <code> > RETURN: [{"name":"Goku God","power":"sayan","amountPeopleSaved":2000 }]</code> <br />
<br />
<br />
  <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:5000/spartans/ </code> <br />
   <code> > RETURN: [{"name":"Leonidas King","amountPeopleKilled":120,"folk":"agoge"}] </code> <br />
<br />
<br />

GET ONE <br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:5000/heroes/56800b6b01c67c194e603e23 </code> <br />
   <code> > RETURN: {"name":"Goku God","power":"sayan","amountPeopleSaved":2000 } </code> <br />
   <code> > OBSERVATIONS: for this request, use item id in url (56800b6b01c67c194e603e23) </code>
<br />
<br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:5000/spartans/568564361cc5056325f52c3c </code> <br />
   <code> > RETURN: {"name":"Leonidas King","amountPeopleKilled":120,"folk":"agoge"} </code> <br />
   <code> > OBSERVATIONS: for this request, use item id in url (568564361cc5056325f52c3c) </code>
<br />
<br />

UPDATE <br />
   <code> > METHOD: PUT </code> <br />
   <code> > PARAMS: {"name":"UPDATED","power":"sayan","amountPeopleSaved":200 } </code> <br />
   <code> > URL: http://localhost:5000/heroes/56800afbf34739a94da174f0 </code> <br />
   <code> > RETURN: success or error </code> <br />
   <code> > OBSERVATIONS: for this request, use item id in url (56800afbf34739a94da174f0) </code>
<br />
<br />
   <code> > METHOD: PUT </code> <br />
   <code> > PARAMS: {"name":"UPDATED","amountPeopleKilled":2,"folk":"agoge" } </code> <br />
   <code> > URL: http://localhost:5000/heroes/56800afbf34739a94da174f0 </code> <br />
   <code> > RETURN: success or error </code> <br />
   <code> > OBSERVATIONS: for this request, use item id in url (56800afbf34739a94da174f0) </code>
<br />
<br />
DELETE <br />
   <code> > METHOD: DELETE </code> <br />
   <code> > URL: http://localhost:5000/heroes/56800afbf34739a94da174f0 </code> <br />
   <code> > RETURN: success or error </code> <br />
<br />
<br />

   <code> > METHOD: DELETE </code> <br />
   <code> > URL: http://localhost:5000/spartans/568564361cc5056325f52c3c </code> <br />
   <code> > RETURN: success or error </code> <br />
   <code> > OBSERVATIONS: for this request, use item id in url (568564361cc5056325f52c3c) </code>
<br /> 
<br />







