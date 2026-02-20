---
layout: tutorial.njk
title: Python F-Strings
order: 26
permalink: /en/tutorial/python-f-strings/
---

F-Strings (formatted string literals) are a modern and most efficient way to format strings in Python. Introduced in Python 3.6, f-strings have become the de facto standard for string formatting due to their clean syntax and better performance.

### F-String Basic Syntax

F-strings start with the letter `f` or `F` before the quote, and Python expressions are written inside curly braces `{}`:

```python
name = "Budi"
age = 25

# Using f-string
print(f"Hello, my name is {name} and I am {age} years old")
# Output: Hello, my name is Budi and I am 25 years old

# Can also use capital F
print(F"Welcome, {name}!")
```

### Comparison with Old Methods

Before f-strings, there were several ways to format strings:

```python
name = "Andi"
score = 95.5

# Old way 1: Concatenation (+)
print("Name: " + name + ", Score: " + str(score))

# Old way 2: % formatting
print("Name: %s, Score: %.1f" % (name, score))

# Old way 3: .format()
print("Name: {}, Score: {}".format(name, score))

# Modern way: f-string (RECOMMENDED)
print(f"Name: {name}, Score: {score}")
```

F-strings are easier to read and faster to execute!

### Expressions in F-Strings

F-strings can evaluate any Python expression inside the curly braces:

```python
# Mathematical operations
a = 10
b = 5
print(f"Addition: {a + b}")       # Output: Addition: 15
print(f"Multiplication: {a * b}") # Output: Multiplication: 50
print(f"Division: {a / b:.2f}")   # Output: Division: 2.00

# Calling methods
name = "python"
print(f"Uppercase: {name.upper()}")  # Output: Uppercase: PYTHON
print(f"Capitalize: {name.capitalize()}")  # Output: Capitalize: Python

# Calling functions
import math
print(f"Root 16: {math.sqrt(16)}")   # Output: Root 16: 4.0

# Lists and indexing
fruits = ["apple", "orange", "mango"]
print(f"First fruit: {fruits[0]}")    # Output: First fruit: apple
```

### Number Formatting

F-strings have powerful format specifiers to control number display:

```python
# Decimal format
pi = 3.14159265359
print(f"Pi: {pi:.2f}")           # Output: Pi: 3.14
print(f"Pi: {pi:.4f}")           # Output: Pi: 3.1416

# Thousands separator format
population = 1500000
print(f"Population: {population:,}")       # Output: Population: 1,500,000
print(f"Population: {population:_}")       # Output: Population: 1_500_000

# Percentage format
ratio = 0.756
print(f"Percentage: {ratio:.1%}")      # Output: Percentage: 75.6%

# Minimum width format
number = 42
print(f"Number: {number:5}")       # Output: Number:    42 (width 5)
print(f"Number: {number:05}")      # Output: Number: 00042 (padding zero)

# Binary, octal, hexadecimal format
num = 255
print(f"Binary: {num:b}")        # Output: Binary: 11111111
print(f"Octal: {num:o}")         # Output: Octal: 377
print(f"Hex: {num:x}")           # Output: Hex: ff
print(f"Hex (uppercase): {num:X}")  # Output: Hex (uppercase): FF
```

### Format Alignment

```python
text = "Python"

# Left align (default)
print(f"{text:<15}")     # Output: "Python         "

# Right align
print(f"{text:>15}")     # Output: "         Python"

# Center align
print(f"{text:^15}")     # Output: "    Python     "

# With filler characters
print(f"{text:*^15}")    # Output: "****Python*****"
print(f"{text:-<15}")    # Output: "Python---------"
```

### F-String with Dictionary

```python
student = {
    "name": "Siti",
    "id": "12345",
    "gpa": 3.85
}

print(f"Name: {student['name']}, GPA: {student['gpa']}")
# Output: Name: Siti, GPA: 3.85
```

### Debugging with F-String (Python 3.8+)

The `=` specifier feature is very useful for debugging:

```python
x = 10
y = 20

# Old way
print(f"x = {x}, y = {y}")

# New way with = (Python 3.8+)
print(f"{x=}, {y=}")              # Output: x=10, y=20
print(f"{x + y=}")                # Output: x + y=30
print(f"{x * 2=}")                # Output: x * 2=20
```

### Multiline F-String

```python
name = "Andi"
job = "Developer"
city = "Jakarta"

# Using triple quotes
bio = f"""
User Profile
===============
Name      : {name}
Job       : {job}
City      : {city}
"""

print(bio)
```

### Escaping Curly Braces

If you want to display literal curly braces, use double brackets:

{% raw %}
```python
print(f"This is curly braces: {{}}")    # Output: This is curly braces: {}
print(f"Python Set: {{{1, 2, 3}}}")   # Output: Python Set: {1, 2, 3}
```
{% endraw %}

### Practical Example

```python
# Creating a simple table
products = [
    ("Laptop", 15000000),
    ("Mouse", 250000),
    ("Keyboard", 750000),
]

print(f"{'Product':<15}{'Price':>15}")
print("-" * 30)
for name, price in products:
    print(f"{name:<15}{price:>15,}")

# Output:
# Product                  Price
# ------------------------------
# Laptop            15,000,000
# Mouse                250,000
# Keyboard             750,000
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/src/en/tutorial/python-f-strings.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-virtual-environment/" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Virtual Environment</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-list-comprehension/" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">List Comprehension</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
