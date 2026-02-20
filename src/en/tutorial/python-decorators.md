---
layout: tutorial.njk
title: Python Decorators & Closures
order: 29
permalink: /en/tutorial/python-decorators/
---

Decorators and Closures are two advanced concepts in Python that are very *powerful*. Although they sound intimidating, they are the foundation of much of the "magic" that happens in popular frameworks like Django, Flask, and FastAPI.

Imagine you have a gift (a function). You want to wrap that gift in beautiful wrapping paper (decorator) before giving it to someone else. You don't change the contents of the gift, but you "beautify" or add features to the gift from the outside. That is the essence of a Decorator: modifying the behavior of a function without changing its original code.

Before getting into Decorators, we need to understand the concept of **Closures** first.

### 1. Closures

A closure is a function that "remembers" the variables from the scope where it was created, even after that scope has finished executing.

#### Nested Function Concept
In Python, we can create functions inside functions:

```python
def outer(x):
    def inner(y):
        return x + y
    return inner
```

#### Creating a Closure
Look at this example:

```python
def multiplier_maker(n):
    def multiplier(x):
        return x * n
    return multiplier

# Create closure
times_three = multiplier_maker(3)
times_five = multiplier_maker(5)

print(times_three(10))  # Output: 30
print(times_five(10))  # Output: 50
```

Here, the `times_three` function still "remembers" that the value of `n` is 3, even though the `multiplier_maker` function has finished executing. This is a Closure.

### 2. Decorators

A decorator is basically a Closure that takes a function as an argument and returns a replacement function (wrapper).

#### Simple Decorator
```python
def my_decorator(func):
    def wrapper():
        print("Before function is called")
        func()
        print("After function is called")
    return wrapper

@my_decorator
def say_hello():
    print("Hello World!")

say_hello()
```

#### Output:
```
Before function is called
Hello World!
After function is called
```

### 3. Decorator with Arguments (`*args`, `**kwargs`)

To make a decorator work with any function (which has any number of parameters), use `*args` and `**kwargs`.

```python
def log_function(func):
    def wrapper(*args, **kwargs):
        print(f"Function call: {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log_function
def add(a, b):
    return a + b

print(add(3, 5)) 
# Output:
# Function call: add
# 8
```

### 4. Real World Examples

#### Timer Decorator (Measuring Execution Time)
Very useful for performance optimization.

```python
import time
from functools import wraps

def timer(func):
    @wraps(func)  # Best practice: preserve original function metadata
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} ran for {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def heavy_process():
    time.sleep(1)
    return "Done"

heavy_process()
```

#### Authentication Decorator (Flask Example)
Ensures user is logged in before accessing certain pages.

```python
def login_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not current_user.is_authenticated:
            return redirect('/login')
        return func(*args, **kwargs)
    return wrapper

@app.route('/dashboard')
@login_required
def dashboard():
    return "Dashboard Page"
```

### Conclusion
- **Closure**: A function that remembers the state from its outer scope.
- **Decorator**: An elegant way to use Closures to modify functions.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-decorators.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-pip-package" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Pip & Package</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-iterators-generators" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Iterators & Generators</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
