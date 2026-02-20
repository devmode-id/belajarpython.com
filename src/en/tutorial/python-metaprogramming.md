---
layout: tutorial.njk
title: Python Metaprogramming
order: 32
permalink: /en/tutorial/python-metaprogramming/
---

Metaprogramming is a concept where computer programs have the ability to treat programs as their data. It means that a program can be designed to read, generate, analyze or transform other programs, and even modify itself while running. In short: **code that writes code**.

In Python, this is a very deep and complex topic, but extremely *powerful* if used wisely. One of the main features of metaprogramming in Python is **Metaclasses**.

### 1. What is a Class?
Before understanding metaclasses, remember that in Python, **a Class is also an Object**. When you define a `class`, Python executes it and creates a class object in memory.

```python
class ObjectCreator:
    pass

my_obj = ObjectCreator()
print(my_obj) # Instance of ObjectCreator

print(ObjectCreator) # ObjectCreator itself is an object!
```

Since Class is an object, then:
- You can store it in a variable.
- Pass it as an argument.
- Add attributes to it dynamically.

### 2. The Magical `type()` Function

Usually we use `type()` to check data types.
```python
print(type(1)) # <class 'int'>
```

But, `type()` can also be used to **create classes dynamically**.

Syntax: `type(name, bases, attrs)`
*   `name`: Class name (string).
*   `bases`: Tuple of parent classes (for inheritance).
*   `attrs`: Dictionary of class attributes and methods.

```python
# Regular Way
class Monkey:
    def eat(self):
        print("Eating banana")

# Metaprogramming Way (Exactly same!)
def eat_function(self):
    print("Eating banana")

DynamicMonkey = type('DynamicMonkey', (), {'eat': eat_function})

m = DynamicMonkey()
m.eat() # Output: Eating banana
```

### 3. Metaclass

A Metaclass is the "factory" that creates Classes.
- **Object** is an instance of **Class**.
- **Class** is an instance of **Metaclass**.

By default, the metaclass for all classes in Python is `type`.

```python
class MyClass:
    pass

print(type(MyClass)) # <class 'type'>
```

#### Creating Custom Metaclass
You can create your own metaclass to control how a class is created. This is often used to validate class attributes or create strict APIs (like in Django Models).

To create a metaclass, inherit from `type`. We use the `metaclass=` argument in class definition.

**Example: Forcing all class attribute names to be Uppercase**

```python
class UpperAttrMeta(type):
    # __new__ is called before __init__
    def __new__(upperattr_metaclass, future_class_name, 
                future_class_parents, future_class_attr):
        
        # Create new attribute dictionary with uppercase keys
        uppercase_attr = {}
        for name, val in future_class_attr.items():
            if not name.startswith('__'): # Don't change magic methods
                uppercase_attr[name.upper()] = val
            else:
                uppercase_attr[name] = val
        
        # Call type.__new__ to create class
        return type(future_class_name, future_class_parents, uppercase_attr)

# Using Metaclass
class Foo(metaclass=UpperAttrMeta):
    bar = 'bip'

print(hasattr(Foo, 'bar')) # False (because changed to BAR)
print(hasattr(Foo, 'BAR')) # True
print(Foo.BAR) # 'bip'
```

### 4. When to Use Metaclass?
The answer: **Almost never**, unless you are building a framework.

> "Metaclasses are deeper magic than 99% of users should ever worry about. If you wonder whether you need them, you don't." - Tim Peters (Python Guru)

However, understanding it gives deep insights into how Python works behind the scenes.

### Conclusion
- **type()** can create classes dynamically.
- **Metaclass** is the class of a Class.
- Used to modify Class creation automatically.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-metaprogramming.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-context-managers" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Context Managers</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-multithreading-multiprocessing" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Multithreading</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
