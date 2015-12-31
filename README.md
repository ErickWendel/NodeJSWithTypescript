# Learning.NodeJSWithTypescript
For learning typescript, this project describes the application, at  Spartans and Heroes as users of system. The Spartans describes amount of death peoples and Heroes amount of saved peoples. 

Patterns and Principles in this project:

- Generic Repository Pattern
- Abstract Factory Pattern (In Refactoring proccess)
- Singleton Pattern
- Multi-layer Architecture Pattern
- SOLID Principles (In Refactoring proccess)

Tools:
- NodeJS
- TypeScript
- ExpressJS
- MongoDB
- Mongoose
- GulpJS
- VSCode Task Runners


Tests:
    For execution of this project, your need install this node packages:
    <br><code> npm install </code>
    
    if not executing from VSCode, 
    
    <br><code> gulp </code>

Execution:
CREATE
<br><code>curl -H POST -H "Content-Type: application/json" -d '{"name":"CREATED","amountPeopleKilled":2,"folk":"test"}' http://localhost:5000/spartans </code>
<br><code>curl -H POST -H "Content-Type: application/json" -d '{"name":"CREATED","power":"sayan","amountPeopleSaved":200 }' http://localhost:5000/heroes </code>

RETRIEVE
<br><code>curl http://localhost:5000/heroes/ </code>
<br><code>curl http://localhost:5000/spartans/ </code>


RETRIEVE ONE
<br><code>curl http://localhost:5000/heroes/56800b6b01c67c194e603e23 </code>
<br><code>curl http://localhost:5000/spartans/568564361cc5056325f52c3c </code>


UPDATE
<br><code>curl -H "Content-Type: application/json" -H "X-HTTP-Method-Override: PUT" -d '{"name":"UPDATED","power":"sayan","amountPeopleSaved":200 }' http://localhost:5000/heroes/56800afbf34739a94da174f0 </code>
<br><code>curl -H "Content-Type: application/json" -H "X-HTTP-Method-Override: PUT" -d '{"name":"UPDATED","amountPeopleKilled":2,"folk":"test"}' http://localhost:5000/spartans/567f774f4f5e68533ae2028f </code>


DELETE
<br><code>curl -X POST -H "X-HTTP-Method-Override: DELETE" http://localhost:5000/heroes/56800b6b01c67c194e603e23 </code>
<br><code>curl -X POST -H "X-HTTP-Method-Override: DELETE" http://localhost:5000/spartans/568564361cc5056325f52c3c </code>







