Design patterns are typical solutions to common problems in software design. They represent best practices used by experienced object-oriented software developers. Design patterns are not finished designs that can be transformed directly into code but are templates for how to solve problems that can be used in many different situations.

Design patterns can be categorized into three main types:

1. **Creational Patterns**: These patterns provide ways to create objects while hiding the creation logic, rather than instantiating objects directly using new operators. This makes the program more flexible in deciding which objects need to be created for a given case.
   - **Singleton**: Ensures that a class has only one instance and provides a global point of access to it.
   - **Factory Method**: Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.
   - **Abstract Factory**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
   - **Builder**: Separates the construction of a complex object from its representation, allowing the same construction process to create various representations.
   - **Prototype**: Specifies the kinds of objects to create using a prototypical instance and creates new objects by copying this prototype.

2. **Structural Patterns**: These patterns deal with object composition or how objects and classes can be composed to form larger structures.
   - **Adapter**: Allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces.
   - **Composite**: Composes objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.
   - **Proxy**: Provides a surrogate or placeholder for another object to control access to it.
   - **Decorator**: Adds behavior to objects dynamically by placing them inside special wrapper objects.
   - **Facade**: Provides a simplified interface to a complex subsystem.
   - **Flyweight**: Reduces the cost of creating and manipulating a large number of similar objects.
   - **Bridge**: Decouples an abstraction from its implementation so that the two can vary independently.

3. **Behavioral Patterns**: These patterns are concerned with algorithms and the assignment of responsibilities between objects. They describe not just the patterns of objects or classes but also the patterns of communication between them.
   - **Observer**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
   - **Strategy**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from the clients that use it.
   - **Command**: Encapsulates a request as an object, thereby letting you parameterize clients with queues, requests, and operations.
   - **Chain of Responsibility**: Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
   - **Mediator**: Defines an object that encapsulates how a set of objects interact. It promotes loose coupling by keeping objects from referring to each other explicitly.
   - **Iterator**: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
   - **Template Method**: Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
   - **State**: Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
   - **Visitor**: Lets you define a new operation without changing the classes of the elements on which it operates.
   - **Interpreter**: Defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
   - **Memento**: As previously described, captures and restores an object's internal state without violating encapsulation.

These patterns help make systems more flexible, reusable, and maintainable. They also provide a common language for developers to communicate solutions to recurring problems.
