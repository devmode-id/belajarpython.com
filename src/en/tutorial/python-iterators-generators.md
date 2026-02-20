---
layout: tutorial.njk
title: Python Iterators & Generators
order: 30
permalink: /en/tutorial/python-iterators-generators/
---

In the Python world, Iterators and Generators are keys to memory efficiency. They allow you to process large amounts of data (even infinite) without having to load everything into RAM at once.

Imagine you want to read a thick book. An iterator allows you to read page by page (loading only one page into memory), instead of trying to memorize a 1000-page book at once.

### 1. Iterators

An iterator is an object that contains a countable number of values. An iterator can be iterated upon, meaning you can traverse through all the values.

Technically, in Python, an iterator is an object which implements the iterator protocol, which consists of the methods `__iter__()` and `__next__()`.

#### Example Creating an Iterator
Let's create a simple iterator that returns numbers starting from 1 up to a certain limit.

```python
class MyNumbers:
    def __init__(self, limit):
        self.limit = limit
        self.num = 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.num <= self.limit:
            x = self.num
            self.num += 1
            return x
        else:
            raise StopIteration

myclass = MyNumbers(3)
myiter = iter(myclass)

print(next(myiter)) # Output: 1
print(next(myiter)) # Output: 2
print(next(myiter)) # Output: 3
# print(next(myiter)) # Will raise StopIteration error
```

When you use a `for` loop, Python automatically handles `__iter__()` and the `StopIteration` exception.

```python
for x in MyNumbers(3):
    print(x)
```

### 2. Generators

Generators are a simple way of creating iterators. Instead of writing a long class with `__iter__()` and `__next__()`, you simply define a regular function and use the `yield` keyword where you want to return data.

Each time `yield` is called, the function "pauses", saving all its variables, and resumes from that point when called again.

#### Simple Generator Example
```python
def number_generator(limit):
    num = 1
    while num <= limit:
        yield num
        num += 1

gen = number_generator(3)
# Generator is also an iterator!
print(next(gen)) # 1
print(next(gen)) # 2
print(next(gen)) # 3
```

#### Generator Advantage: Memory Efficiency
Imagine you need to process 1 million numbers.

**Using List (Consumes Memory):**
```python
def get_list():
    result = []
    for i in range(1000000):
        result.append(i)
    return result

# This will consume memory around 40MB+ for list of integers
```

**Using Generator (Saves Memory):**
```python
def get_generator():
    for i in range(1000000):
        yield i

# This consumes almost no extra memory, because numbers are generated one by one when requested.
```

### 3. Generator Expression

Similar to *List Comprehension*, but using regular parentheses `()`. It returns a generator object, not a list.

```python
# List Comprehension (Creates full list in memory)
squares_list = [x**2 for x in range(10)]
print(squares_list) # [0, 1, 4, ..., 81]

# Generator Expression (Lazy evaluation)
squares_gen = (x**2 for x in range(10))
print(squares_gen) # <generator object ...>

# To see content, must iterate
for i in squares_gen:
    print(i, end=" ")
```

### 4. Case Study: Reading Large Files
If you have to process a 10GB server log file.

**Wrong (Don't do this):**
```python
def read_file_wrong(filename):
    file = open(filename)
    content = file.read() # DANGER! Will load entire 10GB to RAM.
    return content.split("\n")
```

**Right (Use Generator):**
```python
def read_file_right(filename):
    for line in open(filename):
        yield line

# We can loop through 10GB file without memory issues
for line in read_file_right("server.log"):
    if "ERROR" in line:
        print(line)
```

### Conclusion
- **Iterator**: An object that can be iterated (`__next__`).
- **Generator**: A function that produces (`yield`) values one by one (lazy evaluation).
- Use Generators when working with large datasets or infinite data streams.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-iterators-generators.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-decorators" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Decorators & Closures</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-context-managers" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Context Managers</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
