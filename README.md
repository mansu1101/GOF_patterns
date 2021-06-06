# GOF_patterns
#Why do we need design patterns?
--> _Solve common problems like._

1) How to properly create a class.
  
2) How to instantiate an object.
  
3) How to interact b/w objects.
  
4) How to write loosely coupled code.
  
5) How to write reusable code.

#What is a design pattern?

1) Well defined solution to a common problem.

2) Industry standard Approach.
 
3) Template, not a solution.

4) Language independent.

#What is the benefits of design patterns?
1) Robust code.

2) Code re-usability.

3) High maintainability. 

4) Reduce total cost of Ownership.

5) Loosely coupled application.

#Types of design patterns 

`Creational:`

    1. Singleton
    2. Factory
    3. Abstract Factory
    4. Builder
    5. Prototype

`Structural:` 

    6. Adapter
    7. Composite
    8. Proxy
    9. fly weight
    10. Facade
    11. Bridge
    12. Decorator

`Behavioural:`

    13. Template Method
    14. Mediator
    15. Chain of Responsibility
    16. Observers
    17. Strategy
    18. Command
    19. State 
    20. Visitor
    21. Iterator
    22. Interpreter
    23. Memento


#Design Patterns Best Practices 
1) Keep it simple.
2) Excess of everything is bad.
3) Focus on loosely coupled code.
4) Design first, Code later.

#Why we should use build pattern?
There are three major issues with Factory and Abstract Factory design patterns when the Object contains a lot of attributes.
1) Too Many arguments to pass from client program to the Factory class that can be error prone because most of the time, the type of arguments are same and from client side its hard to maintain the order of the argument.
2) Some of the parameters might be optional but in Factory pattern, we are forced to send all the parameters and optional parameters need to send as NULL.
3) If the object is heavy and its creation is complex, then all that complexity will be part of Factory classes that is confusing.



