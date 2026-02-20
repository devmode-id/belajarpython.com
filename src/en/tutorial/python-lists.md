---
layout: tutorial.njk
title: Python List
order: 13
permalink: /en/tutorial/python-lists/
---

In Python programming language, the most basic data structure is sequence or lists. Each sequential element will be assigned a number of its position or index. The first index in the list is zero, the second index is one and so on.

Python has six built-in types of sequences, but the most common are lists and tuples. There are some things you can do with all types of lists. These operations include indexing, slicing, adding, multiplying, and checking for membership. Usually, Python has built-in functions for finding list length and for finding its largest and smallest elements.

### Creating Python List

List is the most versatile data type available in Python, which can be written as a list of comma-separated values (items) between square brackets. The important thing about a list is that items in a list do not have to be of the same type.

Creating a list is very simple, just entering comma-separated values between square brackets. Below is a simple example of creating a list in Python.

```python
#Simple example of creating list in python programming language
list1 = ['chemistry', 'physics', 1993, 2017]
list2 = [1, 2, 3, 4, 5 ]
list3 = ["a", "b", "c", "d"]
```

### Accessing Values in Python List

To access values in a python list, use square brackets for slicing along with the index or indices to obtain values available at that index.

Here is an example of how to access values in a python list :

```python
#Way to access value in Python list

list1 = ['physics', 'chemistry', 1993, 2017]
list2 = [1, 2, 3, 4, 5, 6, 7 ]

print ("list1[0]: ", list1[0])
print ("list2[1:5]: ", list2[1:5])
```

After you execute the code above, the result will be as below :

`list1[0]: physics`
`list2[1:5]: [2, 3, 4, 5]`

### Updating Values in Python List

You can update one or more values inside a list by giving the slice on the left side of the assignment operator, and you can add values to a list with the append() method. For example :

```python
list = ['physics', 'chemistry', 1993, 2017]
print ("Value at index 2 : ", list[2])

list[2] = 2001
print ("New value at index 2 : ", list[2])
```

### Deleting Values in Python List

To remove values inside a python list, you can use one of the del statements if you know exactly the element you are deleting. You can use the remove() method if you do not know exactly which item to delete. For example :

```python
#Example of how to delete value in python list

list = ['physics', 'chemistry', 1993, 2017]

print (list)
del list[2]
print ("After value at index 2 is deleted : ", list)
```

### Basic Operations on Python List

Python lists respond to the + and * operators much like strings; they mean concatenation and repetition here too, except that the result is a new list, not a string.

In fact, lists respond to all of the general sequence operations we used on Strings in the previous chapter. Below is a table of list of basic operations on python list.

| Python Expression | Result | Explanation |
| ---------------------------------------- | -------------------------------------- | ------------- |
| `len([1, 2, 3, 4])` | `4` | Length |
| `[1, 2, 3] + [4, 5, 6]` | `[1, 2, 3, 4, 5, 6]` | Concatenation |
| `['Hello!'] * 4` | `['Hello!', 'Hello!', 'Hello!', 'Hello!']` | Repetition |
| `2 in [1, 2, 3]` | ` True` | Membership |
| `for x in [1,2,3] : print (x,end = ' ')` | `1 2 3` | Iteration |

### Indexing, Slicing and Matrix on Python List

Because lists are sequences, indexing and slicing work the same way for lists as they do for Strings.

Assuming following input :

`L = ['C++', 'Java', 'Python']`

| Python Expression | Result | Explanation |
| ----------------- | -------------------- | -------------------------- |
| `L[2]` | `'Python'` | Offsets start at zero |
| `L[-2]` | `'Java'` | Negative: count from the right |
| `[1:]` | `['Java', 'Python']` | Slicing fetches sections |

### Built-in Methods and Functions on Python List

Python includes built-in functions as follows :

| Python Function | Explanation |
| ---------------------- | ----------------------------------------------- |
| `len(list) ` | Gives total length of list. |
| `max(list) ` | Returns item from list with max value. |
| `min(list) ` | Returns item from list with min value. |
| `list(seq) ` | Converts a tuple into list. |

Python includes built-in methods as follows

| Python Methods | Explanation |
| -------------------------- | ------------------------------------------------------------- |
| `list.append(obj) ` | Appends object obj to list |
| `list.count(obj) ` | Returns count of how many times obj occurs in list |
| `list.extend(seq) ` | Appends contents of seq to list |
| `list.index(obj) ` | Returns the lowest index in list that obj appears |
| `list.insert(index, obj) ` | Inserts object obj into list at offset index |
| `list.pop(obj = list[-1])` | Removes and returns last object or obj from list |
| `list.remove(obj) ` | Removes object obj from list |
| `list.reverse() ` | Reverses objects of list in place |
| `list.sort([func]) ` | Sorts objects of list, use compare func if given |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-lists.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-strings" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python String</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-tuples" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Tuple</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
