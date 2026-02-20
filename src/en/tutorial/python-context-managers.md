---
layout: tutorial.njk
title: Python Context Managers
order: 31
permalink: /en/tutorial/python-context-managers/
---

Context Managers are a very elegant Python feature for managing resources. They ensure resources (like files, network connections, or databases) are opened and closed properly, even if an error occurs in the middle of the process.

Have you ever forgotten to close a file after opening it? In Python, this can be easily avoided using the `with` keyword.

### 1. The `with` Keyword

The most common way to use a Context Manager is with the `with` statement.

**Without Context Manager (Risk of Leak!):**
```python
file = open("data.txt", "w")
try:
    file.write("Hello World")
finally:
    file.close() # We must manually close it
```

**With Context Manager (Safe & Clean):**
```python
with open("data.txt", "w") as file:
    file.write("Hello World")

# File is automatically closed here, even if there is an error during writing.
```

### 2. Creating Your Own Context Manager

You can create your own Context Manager by creating a class that has `__enter__` and `__exit__` methods.

`__enter__`: Executed when entering the `with` block. Its return value is given to the variable `as ...`.
`__exit__`: Executed when exiting the `with` block (normal finish or error).

#### Example: Database Connection Manager (Simulation)

```python
class ManageDB:
    def __init__(self, db_name):
        self.db_name = db_name

    def __enter__(self):
        print(f"--> Opening connection to {self.db_name}")
        return self # This object becomes 'db' variable

    def query(self, sql):
        print(f"Executing query: {sql}")

    def __exit__(self, exc_type, exc_value, traceback):
        print(f"<-- Closing connection to {self.db_name}")
        # If there is an error, exc_type is not None
        if exc_type:
            print(f"Error occurred: {exc_value}")
        # Return True if you want to suppress the error (so program doesn't crash)
        # Return False (default) if you want error to raise

# Usage
with ManageDB("users_db") as db:
    db.query("SELECT * FROM users")
    
# Output:
# --> Opening connection to users_db
# Executing query: SELECT * FROM users
# <-- Closing connection to users_db
```

### 3. Using `contextlib`

Python provides the `contextlib` module which makes it easier to create context managers using generators and the `@contextmanager` decorator. This is more concise than creating a class.

```python
from contextlib import contextmanager

@contextmanager
def open_my_file(name):
    try:
        print("Opening file...")
        f = open(name, "w")
        yield f
    finally:
        print("Closing file...")
        f.close()

# Usage
with open_my_file("test.txt") as f:
    f.write("Test 123")
```

Code before `yield` is `__enter__`, and code in `finally` block is `__exit__`.

### 4. Practical Example: Measuring Execution Time

We can create a context manager to measure how long a block of code runs.

```python
import time
from contextlib import contextmanager

@contextmanager
def timer():
    start = time.time()
    yield
    end = time.time()
    print(f"Execution time: {end - start:.4f} seconds")

with timer():
    # Simulate heavy process
    time.sleep(1)
    x = sum(range(1000000))

# Output: Execution time: 1.0xxx seconds
```

### Conclusion
- Use `with` whenever possible when working with files or connections.
- Implement `__enter__` and `__exit__` to create your own resource management.
- Use `@contextmanager` for a more functional and concise way.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-context-managers.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-iterators-generators" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Iterators & Generators</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-metaprogramming" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Metaprogramming</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
