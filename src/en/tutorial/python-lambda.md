---
layout: tutorial.njk
title: Python Lambda
order: 31
permalink: /en/tutorial/python-lambda/
---

Lambda is a short way to create anonymous functions (functions without a name) in Python. Lambda is very useful for simple operations that only need to be used once, especially as arguments for functions like `map()`, `filter()`, and `sorted()`.

### Basic Syntax

```python
# Syntax: lambda arguments: expression

# Normal function
def square(x):
    return x ** 2

# Equivalent lambda
square = lambda x: x ** 2

print(square(5))  # Output: 25
```

Lambda can only contain one expression and automatically returns the result.

### Lambda with Multiple Arguments

```python
# One argument
double = lambda x: x * 2
print(double(5))  # 10

# Two arguments
add = lambda a, b: a + b
print(add(3, 5))  # 8

# Three arguments
volume = lambda p, l, t: p * l * t
print(volume(2, 3, 4))  # 24

# No arguments
random_greeting = lambda: "Hello!"
print(random_greeting())  # Hello!
```

### Lambda with Default Arguments

```python
# Default argument
power = lambda x, n=2: x ** n
print(power(3))     # 9 (power of 2)
print(power(3, 3))  # 27 (power of 3)

# Multiple defaults
greet = lambda name, formal=False: f"Good Morning, {name}" if formal else f"Hi, {name}!"
print(greet("Budi"))            # Hi, Budi!
print(greet("Budi", formal=True))  # Good Morning, Budi
```

### Lambda with Conditional Expression

```python
# Ternary in lambda
check_even = lambda x: "Even" if x % 2 == 0 else "Odd"
print(check_even(4))  # Even
print(check_even(7))  # Odd

# Multiple conditions
letter_grade = lambda n: "A" if n >= 90 else "B" if n >= 80 else "C" if n >= 70 else "D"
print(letter_grade(95))  # A
print(letter_grade(75))  # C
```

### Lambda with Built-in Functions

#### map() - Transform every element

```python
numbers = [1, 2, 3, 4, 5]

# Square every number
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Convert to string
str_numbers = list(map(lambda x: str(x), numbers))
print(str_numbers)  # ['1', '2', '3', '4', '5']

# Map with two lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]
sum_lists = list(map(lambda x, y: x + y, list1, list2))
print(sum_lists)  # [5, 7, 9]
```

#### filter() - Filter elements based on condition

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Filter numbers greater than 5
large = list(filter(lambda x: x > 5, numbers))
print(large)  # [6, 7, 8, 9, 10]

# Filter empty strings
words = ["hello", "", "world", "", "python"]
non_empty = list(filter(lambda x: x, words))
print(non_empty)  # ['hello', 'world', 'python']
```

#### sorted() - Sorting with custom key

```python
# Sort by absolute value
numbers = [-5, 2, -3, 1, -4]
sorted_nums = sorted(numbers, key=lambda x: abs(x))
print(sorted_nums)  # [1, 2, -3, -4, -5]

# Sort list of tuples
students = [("Andi", 85), ("Budi", 92), ("Citra", 78)]
by_score = sorted(students, key=lambda x: x[1], reverse=True)
print(by_score)  # [('Budi', 92), ('Andi', 85), ('Citra', 78)]

# Sort list of dictionaries
data = [
    {"name": "Andi", "age": 25},
    {"name": "Budi", "age": 20},
    {"name": "Citra", "age": 30}
]
by_age = sorted(data, key=lambda x: x["age"])
print(by_age)
# [{'name': 'Budi', 'age': 20}, {'name': 'Andi', 'age': 25}, {'name': 'Citra', 'age': 30}]

# Sort string by length
words = ["python", "go", "javascript", "c"]
by_length = sorted(words, key=lambda x: len(x))
print(by_length)  # ['c', 'go', 'python', 'javascript']
```

#### reduce() - Aggregate into one value

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# Sum all numbers
total = reduce(lambda x, y: x + y, numbers)
print(total)  # 15

# Multiply all numbers
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120

# Find maximum
maximum = reduce(lambda x, y: x if x > y else y, numbers)
print(maximum)  # 5
```

### Lambda in Data Structures

```python
# Dictionary of functions
operations = {
    "add": lambda x, y: x + y,
    "subtract": lambda x, y: x - y,
    "multiply": lambda x, y: x * y,
    "divide": lambda x, y: x / y if y != 0 else "Error"
}

print(operations["add"](10, 5))  # 15
print(operations["multiply"](10, 5))    # 50

# List of lambdas
transformations = [
    lambda x: x * 2,
    lambda x: x ** 2,
    lambda x: x + 10
]

number = 5
for t in transformations:
    print(t(number))  # 10, 25, 15
```

### Immediately Invoked Lambda

Lambda that is executed immediately:

```python
# IIFE (Immediately Invoked Function Expression)
result = (lambda x, y: x + y)(3, 5)
print(result)  # 8

# Useful for one-time operations
data = (lambda: {"config": "value", "debug": True})()
print(data)  # {'config': 'value', 'debug': True}
```

### Lambda vs Regular Functions

| Aspect | Lambda | def Function |
|-------|--------|--------------|
| Name | Anonymous | Must have a name |
| Lines | Single expression | Multiple statements |
| Readability | For simple operations | For complex logic |
| Docstring | Cannot | Can |
| Type hints | Cannot | Can |

```python
# When to use lambda
data = [1, 2, 3, 4, 5]
result = list(map(lambda x: x * 2, data))  # ✅ Simple, disposable

# When to use def
def calculate_tax(salary, allowance=0, deduction=0):
    """
    Calculates income tax.
    
    Args:
        salary: Basic salary
        allowance: Total allowance
        deduction: Total deduction
        
    Returns:
        Tax amount to be paid
    """
    taxable_income = salary + allowance - deduction
    if taxable_income <= 50000000:
        return taxable_income * 0.05
    elif taxable_income <= 250000000:
        return taxable_income * 0.15
    else:
        return taxable_income * 0.25
```

### Practical Example

```python
# 1. Sorting complex data
products = [
    {"name": "Laptop", "price": 15000000, "rating": 4.5},
    {"name": "Mouse", "price": 250000, "rating": 4.8},
    {"name": "Keyboard", "price": 750000, "rating": 4.2}
]

# Sort by price (ascending)
by_price = sorted(products, key=lambda p: p["price"])

# Sort by rating (descending)
by_rating = sorted(products, key=lambda p: p["rating"], reverse=True)

# 2. Data transformation pipeline
data = ["  Hello  ", "WORLD", "  python  "]
cleaned = list(map(lambda s: s.strip().lower(), data))
print(cleaned)  # ['hello', 'world', 'python']

# 3. Event handlers (pseudo-code)
button_actions = {
    "save": lambda: print("Saving..."),
    "delete": lambda: print("Deleting..."),
    "export": lambda: print("Exporting...")
}

action = "save"
button_actions[action]()  # Saving...
```

### Tips and Best Practices

1. **Use lambda for simple operations** - If logic is more than one line, use `def`
2. **Don't overdo it** - Code should remain readable
3. **Avoid nested lambdas** - Hard to read and debug
4. **Consider list comprehension** - Often more readable than map+lambda

```python
# Lambda + map
result = list(map(lambda x: x * 2, data))

# List comprehension (more pythonic)
result = [x * 2 for x in data]
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/src/en/tutorial/python-lambda.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-async-await/" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Async Await</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-sets/" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Sets</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
