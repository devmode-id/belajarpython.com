---
layout: tutorial.njk
title: Python Tuple
order: 14
permalink: /en/tutorial/python-tuples/
---

A tuple is a Python object sequence that is immutable. Tuples are sequences, just like lists. The main difference between tuples and lists is that tuples cannot be changed unlike Python Lists. Tuples use parentheses, whereas Python Lists use square brackets.

Creating a tuple is as easy as putting comma-separated values. Optionally, you can put these comma-separated values between parentheses also. For example :

```python
#Simple example of creating tuple in python programming language

tup1 = ('physics', 'chemistry', 1993, 2017)
tup2 = (1, 2, 3, 4, 5 )
tup3 = "a", "b", "c", "d"
```

The empty tuple is written as two parentheses containing nothing, example : tup1 = ();
To write a tuple containing a single value you have to include a comma, even though there is only one value, e.g. : tup1 = (50,)
Like String indices, tuple indices start at 0, and they can be sliced, concatenated, and so on.

### Accessing Values in Python Tuple

To access values in a tuple, use square brackets for slicing along with the index or indices to obtain values available at that index. For example :

```python
#How to access tuple values

tup1 = ('physics', 'chemistry', 1993, 2017)
tup2 = (1, 2, 3, 4, 5, 6, 7 )

print ("tup1[0]: ", tup1[0])
print ("tup2[1:5]: ", tup2[1:5])
```

After you execute the code above, the result will be as below :

`tup1[0]: physics`
`tup2[1:5]: (2, 3, 4, 5)`

### Updating Values in Python Tuple

Tuples are immutable, which means you cannot update or change the values of tuple elements. You are able to take portions of existing tuples to create new tuples as the following example demonstrates.

```python
tup1 = (12, 34.56)
tup2 = ('abc', 'xyz')

# Action like below cannot be done on python tuple

# Because indeed value on python tuple cannot be changed

# tup1[0] = 100;

# So, create new tuple as follows

tup3 = tup1 + tup2
print (tup3)
```

### Deleting Values in Python Tuple

Removing individual tuple elements is not possible. There is nothing wrong with putting together another tuple with the undesired elements discarded.

To explicitly remove an entire tuple, just use the del statement. For example :

```python
tup = ('physics', 'chemistry', 1993, 2017)
print(tup)

# delete tuple with del statement

del tup

# then recreate new tuple with desired elements

tup = ('Language', 'Literacy', 2020)
print("After deleting tuple :", tup)
```

### Basic Operations on Python Tuple

Tuples respond to the + and * operators much like Strings; they mean concatenation and repetition here too, except that the result is a new tuple, not a string.

In fact, Tuples respond to all of the general sequence operations we used on Strings in the previous chapter. Below is a table of list of basic operations on Python Tuple.

| Python Expression | Result | Explanation |
| ----------------------------------------- | -------------------------------------- | ------------- |
| `len((1, 2, 3))` | `3` | Length |
| `(1, 2, 3) + (4, 5, 6) ` | `(1, 2, 3, 4, 5, 6)` | Concatenation |
| `('Hello!',) \* 4` | `('Hello!', 'Hello!', 'Hello!', 'Hello!')` | Repetition |
| `3 in (1, 2, 3)` | `True` | Membership |
| `for x in (1,2,3) : print (x, end = ' ')` | `1 2 3` | Iteration |

### Indexing, Slicing and Matrix on Python Tuple

Because tuples are sequences, indexing and slicing work the same way for tuples as they do for Strings, assuming the following input

Assuming following input : `T = ('C++', 'Java', 'Python')`

| Python Expression | Result | Explanation |
| ----------------- | -------------------- | -------------------------- |
| `T[2]` | `'Python'` | Offsets start at zero |
| `T[-2]` | `'Java'` | Negative: count from the right |
| `T[1:]` | `('Java', 'Python')` | Slicing fetches sections |

### Built-in Functions on Python Tuple

Python includes built-in functions as follows

| Python Function | Explanation |
| --------------------- | ------------------------------------------------ |
| `len(tuple)` | Gives total length of tuple. |
| `max(tuple)` | Returns item from tuple with max value. |
| `min(tuple)` | Returns item from tuple with min value. |
| `tuple(seq)` | Converts a list into tuple. |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-tuples.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-lists" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python List</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-dictionaries" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Dictionary</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
