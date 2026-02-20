---
layout: tutorial.njk
title: Python Memory Management
order: 37
permalink: /en/tutorial/python-memory-management/
---

One of the reasons Python is so popular is because developers don't have to worry about manual memory management like in C or C++. Python handles memory allocation and deallocation automatically.

However, understanding how Python manages memory behind the scenes is crucial for writing efficient code, especially when dealing with large amounts of data.

### 1. Heap and Stack

Python uses two types of memory:
- **Stack Memory**: Used for static function execution and local variables.
- **Heap Memory**: All Python objects and instances (like integers, lists, classes) are stored here. This is private and managed by the Python Memory Manager.

### 2. Reference Counting

Python's main strategy in memory management is **Reference Counting**.

Every object in Python has a "reference count". This number indicates how many variables refer to that object.

- When an object is created or referenced (`a = object`), the count increases (+1).
- When a reference is deleted (`del a`) or goes out of scope, the count decreases (-1).
- When the count reaches 0, the object's memory is immediately freed.

```python
import sys

a = []
# Get ref count (usually higher than expected because the argument to sys.getrefcount itself is also a temporary reference)
print(sys.getrefcount(a)) 

b = a
print(sys.getrefcount(a)) # Increases

del b
print(sys.getrefcount(a)) # Decreases
```

### 3. Garbage Collection (GC)

Reference counting has one fatal flaw: **Circular References**.

```python
a = []
b = []
a.append(b)
b.append(a) # Circular reference
```

If `a` and `b` are deleted, their reference count will never be 0 because they point to each other. This is where **Garbage Collector (GC)** comes in.

Python's GC is a separate mechanism that runs periodically to detect and clean up this "garbage" circular references.

You can manually control GC using the `gc` module:

```python
import gc

# Force run garbage collection
gc.collect()

# Disable automatic garbage collection
gc.disable()
```
*Tip: You rarely need to touch the `gc` module except for high-level optimization.*

### 4. Tips for Saving Memory

1. **Use Generators**: As discussed in the previous tutorial, generators do not load all data into RAM.
2. **Use `__slots__` in Classes**: If you create millions of instances of small classes, `__slots__` can save RAM significantly by disabling the dynamic `__dict__` per instance.

```python
class SaveMemory:
    __slots__ = ['name', 'age'] # Can only have these attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

3. **Be careful with Global Variables**: Global objects will never be deleted until the program stops, unless deleted manually.

### Conclusion
- Python uses **Reference Counting** as the main method.
- **Garbage Collector** is in charge of cleaning up circular references.
- You can write "memory-efficient" Python code by understanding how it works.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-memory-management.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-unit-testing" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Unit Testing</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-data-analytics" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Data Analytics</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
