---
layout: tutorial.njk
title: Python Sets
order: 32
permalink: /en/tutorial/python-sets/
---

A Set is a collection data type in Python that stores a collection of unique and unordered elements. Sets are very efficient for membership testing, removing duplicates, and mathematical operations like union, intersection, and difference.

### Creating a Set

```python
# Using curly braces
fruits = {"apple", "orange", "mango"}
print(fruits)  # {'apple', 'orange', 'mango'}

# Using set() constructor
numbers = set([1, 2, 3, 4, 5])
print(numbers)  # {1, 2, 3, 4, 5}

# Empty set (MUST use set(), not {})
empty = set()
print(empty)  # set()
print(type(empty))  # <class 'set'>

# {} creates a dictionary, not a set!
not_set = {}
print(type(not_set))  # <class 'dict'>
```

### Set Characteristics

```python
# 1. Unique elements (no duplicates)
numbers = {1, 2, 2, 3, 3, 3, 4}
print(numbers)  # {1, 2, 3, 4}

# 2. Unordered
letters = {"c", "a", "b"}
print(letters)  # Order can vary

# 3. Cannot access by index
# letters[0]  # Error! TypeError

# 4. Elements must be hashable (immutable)
valid = {1, "hello", (1, 2)}  # OK
# invalid = {1, [1, 2]}  # Error! List is not hashable
```

### Adding and Removing Elements

```python
fruits = {"apple", "orange"}

# Add one element
fruits.add("mango")
print(fruits)  # {'apple', 'orange', 'mango'}

# Add multiple elements
fruits.update(["banana", "grape"])
print(fruits)  # {'apple', 'orange', 'mango', 'banana', 'grape'}

# Remove element (error if not found)
fruits.remove("apple")
print(fruits)

# Remove element (no error if not found)
fruits.discard("durian")  # No error
print(fruits)

# Remove random element
item = fruits.pop()
print(f"Removed: {item}")

# Remove all elements
fruits.clear()
print(fruits)  # set()
```

### Membership Operations

Sets are very fast for checking membership (O(1) complexity):

```python
numbers = {1, 2, 3, 4, 5}

# Check if exists in set
print(3 in numbers)      # True
print(10 in numbers)     # False
print(10 not in numbers) # True

# Comparison with list for large data
# Set: O(1) - very fast
# List: O(n) - slow for large data
```

### Mathematical Operations

#### Union

Combines all elements from both sets:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Using | operator
combined = A | B
print(combined)  # {1, 2, 3, 4, 5, 6}

# Using method
combined = A.union(B)
print(combined)  # {1, 2, 3, 4, 5, 6}
```

#### Intersection

Elements present in both sets:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Using & operator
intersection = A & B
print(intersection)  # {3, 4}

# Using method
intersection = A.intersection(B)
print(intersection)  # {3, 4}
```

#### Difference

Elements present in the first set but not in the second:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# A - B: Elements in A not in B
diff = A - B
print(diff)  # {1, 2}

# B - A: Elements in B not in A
diff = B - A
print(diff)  # {5, 6}

# Using method
diff = A.difference(B)
print(diff)  # {1, 2}
```

#### Symmetric Difference

Elements in either set, but not both:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Using ^ operator
sym_diff = A ^ B
print(sym_diff)  # {1, 2, 5, 6}

# Using method
sym_diff = A.symmetric_difference(B)
print(sym_diff)  # {1, 2, 5, 6}
```

### Subset and Superset

```python
A = {1, 2}
B = {1, 2, 3, 4, 5}

# A is subset of B (all elements of A are in B)
print(A.issubset(B))    # True
print(A <= B)           # True
print(A < B)            # True (proper subset)

# B is superset of A (B contains all elements of A)
print(B.issuperset(A))  # True
print(B >= A)           # True
print(B > A)            # True (proper superset)

# Check if no common elements
C = {10, 20, 30}
print(A.isdisjoint(C))  # True (no intersection)
print(A.isdisjoint(B))  # False (has intersection)
```

### Update Operations

Operations that modify the set in-place:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Update with union
A_copy = A.copy()
A_copy |= B
print(A_copy)  # {1, 2, 3, 4, 5, 6}

# Update with intersection
A_copy = A.copy()
A_copy &= B
print(A_copy)  # {3, 4}

# Update with difference
A_copy = A.copy()
A_copy -= B
print(A_copy)  # {1, 2}

# Or using methods
A_copy = A.copy()
A_copy.update(B)  # Union
A_copy.intersection_update(B)  # Intersection
A_copy.difference_update(B)  # Difference
```

### Frozenset (Immutable Set)

Frozenset is an immutable version of set:

```python
# Creating frozenset
fs = frozenset([1, 2, 3, 4])
print(fs)  # frozenset({1, 2, 3, 4})

# Cannot be modified
# fs.add(5)  # Error! AttributeError

# Can be used as dictionary key or set element
my_dict = {fs: "value"}
print(my_dict)

# Mathematical operations still work
fs2 = frozenset([3, 4, 5])
print(fs | fs2)  # frozenset({1, 2, 3, 4, 5})
print(fs & fs2)  # frozenset({3, 4})
```

### Set Comprehension

```python
# Set comprehension similar to list comprehension
squares = {x**2 for x in range(10)}
print(squares)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# With condition
evens = {x for x in range(20) if x % 2 == 0}
print(evens)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}

# From string (unique characters)
word = "mississippi"
unique_chars = {c for c in word}
print(unique_chars)  # {'m', 'i', 's', 'p'}
```

### Practical Example

```python
# 1. Removing duplicates
data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique = list(set(data))
print(unique)  # [1, 2, 3, 4]

# 2. Check if list has duplicates
def has_duplicates(lst):
    return len(lst) != len(set(lst))

print(has_duplicates([1, 2, 3]))    # False
print(has_duplicates([1, 2, 2, 3])) # True

# 3. Find common elements from two lists
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
common = set(list1) & set(list2)
print(common)  # {4, 5}

# 4. Find different elements
diff = set(list1) ^ set(list2)
print(diff)  # {1, 2, 3, 6, 7, 8}

# 5. Filter unique data with condition
transactions = [100, 200, 100, 300, 200, 400, 100]
large = {t for t in transactions if t > 150}
print(large)  # {200, 300, 400}

# 6. Input validation
valid_options = {"yes", "no", "maybe"}
user_input = "yes"
if user_input.lower() in valid_options:
    print("Valid input!")

# 7. Tag system
post1_tags = {"python", "programming", "tutorial"}
post2_tags = {"python", "web", "flask"}
post3_tags = {"javascript", "web", "react"}

# Posts with python tag
python_posts = [post1_tags, post2_tags]  # Manual check

# Common tags between post1 and post2
common = post1_tags & post2_tags
print(common)  # {'python'}

# All unique tags
all_tags = post1_tags | post2_tags | post3_tags
print(all_tags)  # {'python', 'programming', 'tutorial', 'web', 'flask', 'javascript', 'react'}
```

### Set vs List Performance

```python
import time

# Create large data
data_list = list(range(1000000))
data_set = set(data_list)

# Check membership in list
start = time.time()
result = 999999 in data_list
print(f"List: {time.time() - start:.6f} seconds")

# Check membership in set
start = time.time()
result = 999999 in data_set
print(f"Set: {time.time() - start:.6f} seconds")

# Set is much faster for membership testing!
```

### When to Use Sets?

✅ **Use sets when:**
- Need to store unique elements
- Frequent membership testing
- Need mathematical operations (union, intersection)
- Want to remove duplicates from a list

❌ **Do not use sets when:**
- Need to preserve element order (use list or dict)
- Need access by index
- Elements are not hashable (list, dict)

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/src/en/tutorial/python-sets.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-lambda/" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Lambda</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/what-is-python/" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Back to Start</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
