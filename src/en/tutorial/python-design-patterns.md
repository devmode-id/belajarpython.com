---
layout: tutorial.njk
title: Python Design Patterns
order: 35
permalink: /en/tutorial/python-design-patterns/
---

Design Patterns are common solutions that can be reused for problems that occur frequently in software design. It is not finished code, but rather a *template* or guide on how to solve a problem.

In Python, Design Patterns are often easier to implement (or even already built-in) compared to other languages like Java or C++.

### 1. Singleton Pattern

Goal: Ensure a class only has one instance.
Example usage: Database connection, application configuration.

```python
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            print("Creating new instance...")
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

s1 = Singleton()
s2 = Singleton()

print(s1 is s2) # True
```

Pythonic alternative using Decorator:

```python
def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class Database:
    pass
```

### 2. Factory Pattern

Goal: Create objects without specifying the exact logical class of the object that will be created.
Example usage: Plugin system, data serialization of various formats (JSON, XML).

```python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

def get_pet(pet="dog"):
    """The Factory Method"""
    pets = dict(dog=Dog(), cat=Cat())
    return pets[pet]

d = get_pet("dog")
print(d.speak())

c = get_pet("cat")
print(c.speak())
```

### 3. Observer Pattern (Pub-Sub)

Goal: Define a one-to-many dependency, so that when one object changes, all its dependencies are notified.
Example usage: Event handling, notification system.

```python
class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)

    def notify(self, message):
        for observer in self._observers:
            observer.update(message)

class Observer:
    def update(self, message):
        raise NotImplementedError

class EmailNotifier(Observer):
    def update(self, message):
        print(f"Sending Email: {message}")

class SMSNotifier(Observer):
    def update(self, message):
        print(f"Sending SMS: {message}")

# Usage
subject = Subject()
subject.attach(EmailNotifier())
subject.attach(SMSNotifier())

subject.notify("Server Down!")
# Output:
# Sending Email: Server Down!
# Sending SMS: Server Down!
```

### 4. Strategy Pattern

Goal: Define a family of algorithms, encapsulate each one, and make them interchangeable.
Example usage: Sorting strategy, Shopping discount, Payment gateway.

```python
from typing import Callable

class PaymentProcessor:
    def __init__(self, strategy: Callable[[int], None]):
        self.strategy = strategy
    
    def pay(self, amount):
        self.strategy(amount)

# Strategies
def pay_by_cc(amount):
    print(f"Paying {amount} with Credit Card")

def pay_by_paypal(amount):
    print(f"Paying {amount} with PayPal")

# Runtime selection
cart = PaymentProcessor(pay_by_cc)
cart.pay(100)

cart = PaymentProcessor(pay_by_paypal)
cart.pay(100)
```

In Python, because functions are first-class objects, Strategy Pattern is often enough by *passing functions* like above, without needing to create complicated interface classes.

### 5. Decorator Pattern

As discussed in previous tutorials, this pattern allows adding behavior to an object dynamically. Python has *built-in* support for this pattern with the `@` syntax.

### Conclusion

- **Singleton**: Only one instance.
- **Factory**: Dynamic object creation.
- **Observer**: Event notification to multiple subscribers.
- **Strategy**: Swapping algorithms at runtime.
- Learn these patterns so your code is more modular and *maintainable*, but remember: don't over-engineer!

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-design-patterns.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-async-await" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Async Await</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-unit-testing" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Unit Testing</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
