---
layout: tutorial.njk
title: Python List Comprehension
order: 27
permalink: /en/tutorial/python-list-comprehension/
---

List Comprehension is a concise and elegant way to create a new list from an existing list. It is one of the most pythonic features that keeps code clean and readable.

### Basic Syntax

```python
# Syntax: [expression for item in iterable]

# Normal way with loop
squares = []
for x in range(5):
    squares.append(x ** 2)
print(squares)  # [0, 1, 4, 9, 16]

# With list comprehension (shorter!)
squares = [x ** 2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
```

### With Conditional (if)

You can add conditions to filter elements:

```python
# Syntax: [expression for item in iterable if condition]

# Even numbers only
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Only positive numbers from a list
data = [-5, 3, -2, 8, -1, 7]
positive = [x for x in data if x > 0]
print(positive)  # [3, 8, 7]

# Filter strings that start with a specific letter
fruits = ["apple", "orange", "grape", "mango", "avocado"]
a_fruits = [f for f in fruits if f.startswith("a")]
print(a_fruits)  # ['apple', 'avocado']
```

### With if-else

To use if-else, place it before `for`:

```python
# Syntax: [if_expression if condition else else_expression for item in iterable]

# Replace negative numbers with 0
numbers = [-3, 5, -1, 8, -2, 6]
result = [x if x > 0 else 0 for x in numbers]
print(result)  # [0, 5, 0, 8, 0, 6]

# Label even/odd
label = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(label)  # ['even', 'odd', 'even', 'odd', 'even']
```

### Nested List Comprehension

To process nested lists:

```python
# Flatten nested list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Create matrix with list comprehension
matrix = [[j for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

# Multiplication matrix
mult_matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(mult_matrix)  # [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
```

### With Functions

```python
# Using function in list comprehension
words = ["hello", "world", "python"]
uppercase = [w.upper() for w in words]
print(uppercase)  # ['HELLO', 'WORLD', 'PYTHON']

# Using custom function
def square(n):
    return n ** 2

result = [square(x) for x in range(5)]
print(result)  # [0, 1, 4, 9, 16]

# Using lambda
result = [(lambda x: x ** 2)(x) for x in range(5)]
print(result)  # [0, 1, 4, 9, 16]
```

### Dictionary Comprehension

The same concept applies to dictionaries:

```python
# Syntax: {key: value for item in iterable}

# Create dictionary from list
names = ["Andi", "Budi", "Citra"]
lengths = {n: len(n) for n in names}
print(lengths)  # {'Andi': 4, 'Budi': 4, 'Citra': 5}

# Dictionary with condition
numbers = range(1, 6)
squares = {x: x**2 for x in numbers if x % 2 == 1}
print(squares)  # {1: 1, 3: 9, 5: 25}

# Invert dictionary
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print(inverted)  # {1: 'a', 2: 'b', 3: 'c'}
```

### Set Comprehension

Same as list, but produces a set (no duplicates):

```python
# Syntax: {expression for item in iterable}

# Set from list with duplicates
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique = {x for x in numbers}
print(unique)  # {1, 2, 3, 4}

# Set with condition
even_unique = {x for x in range(20) if x % 2 == 0}
print(even_unique)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}
```

### Generator Expression

Similar to list comprehension but uses parentheses () and is memory efficient:

```python
# Generator expression (lazy evaluation)
gen = (x ** 2 for x in range(1000000))
print(gen)  # <generator object ...>

# Only computes when needed
print(next(gen))  # 0
print(next(gen))  # 1
print(sum(gen))   # Sum of the rest

# Useful for large data
# List: stores everything in memory
# Generator: computes one by one
```

### Practical Example

```python
# 1. Cleaning data
dirty_data = ["  Andi  ", "BUDI", "citra  ", "  DENI"]
clean_data = [name.strip().title() for name in dirty_data]
print(clean_data)  # ['Andi', 'Budi', 'Citra', 'Deni']

# 2. Extract file extension
files = ["doc.pdf", "image.png", "data.csv", "script.py"]
extensions = [f.split(".")[-1] for f in files]
print(extensions)  # ['pdf', 'png', 'csv', 'py']

# 3. Filter and transform at once
scores = [45, 78, 92, 56, 88, 34, 95]
passed = [f"Score: {n} (Passed)" for n in scores if n >= 60]
print(passed)  # ['Score: 78 (Passed)', 'Score: 92 (Passed)', ...]

# 4. Zip two lists
names = ["Andi", "Budi", "Citra"]
ages = [25, 30, 28]
combined = {n: a for n, a in zip(names, ages)}
print(combined)  # {'Andi': 25, 'Budi': 30, 'Citra': 28}

# 5. Create lookup table
letters = "abcdefghij"
positions = {l: i for i, l in enumerate(letters, start=1)}
print(positions)  # {'a': 1, 'b': 2, 'c': 3, ...}
```

### When to Use List Comprehension?

✅ **Use** list comprehension when:
- Creating a new list from simple transformations
- Filtering elements from a list
- Code becomes more readable

❌ **Avoid** list comprehension when:
- Logic is too complex (more than 2 conditions)
- Requires multiple statements
- Sacrifices code readability

```python
# Too complex - use normal loop
# AVOID:
result = [func(x) if cond1(x) else other(x) for x in data if cond2(x) and cond3(x)]

# BETTER:
result = []
for x in data:
    if cond2(x) and cond3(x):
        if cond1(x):
            result.append(func(x))
        else:
            result.append(other(x))
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/src/en/tutorial/python-list-comprehension.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-f-strings/" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python F-Strings</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-decorators/" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Decorators</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
