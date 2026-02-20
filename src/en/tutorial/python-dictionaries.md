---
layout: tutorial.njk
title: Python Dictionary
order: 15
permalink: /en/tutorial/python-dictionaries/
---

Python dictionary is different from List or Tuple. Because each sequence contains key and value. Each key is separated from its value by a colon (:), the items are separated by commas, and the whole thing is enclosed in curly braces. An empty dictionary without items is written with just two curly braces, like this: {}.

Dictionary keys can be of any type, but keys must be of an immutable data type such as strings, numbers, or tuples.

### Accessing Values in Python Dictionary

To access Dictionary elements, you can use the familiar square brackets along with the key to obtain its value. Here is a simple example :

```python
#Example how to create Dictionary in Python

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
print ("dict['Name']: ", dict['Name'])
print ("dict['Age']: ", dict['Age'])
```

### Updating Values in Python Dictionary

You can update a Dictionary by adding a new entry or a key-value pair, modifying an existing entry, or deleting an existing entry as shown in the simple example given below.

```python
#Update python dictionary

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
dict['Age'] = 8; # Modify existing entry
dict['School'] = "DPS School" # Add new entry

print ("dict['Age']: ", dict['Age'])
print ("dict['School']: ", dict['School'])
```

### Deleting Python Dictionary Elements

You can either remove individual dictionary elements or clear the entire contents of a dictionary. You can also delete entire dictionary in a single operation.

To explicitly remove an entire dictionary, just use the del statement. Here is a simple example :

```python
#Example how to delete in Python Dictionary

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

del dict['Name'] # remove entry with key 'Name'
dict.clear() # remove all entries in dict
del dict # delete entire dictionary

print ("dict['Age']: ", dict['Age'])
print ("dict['School']: ", dict['School'])
```

### Built-in Functions on Python Dictionary

Python includes built-in functions as follows :

| Python Function | Explanation |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `len(dict)` | Gives the total length of the dictionary. This would be equal to the number of items in the dictionary. |
| `str(dict) ` | Produces a printable string representation of a dictionary |
| `type(variable)` | Returns the type of the passed variable. If passed variable is dictionary, then it would return a dictionary type. |

### Built-in Methods on Python Dictionary

Python includes built-in methods as follows :

| Python Method | Explanation |
| ------------------------------------- | ----------------------------------------------------------------------------------------- |
| `dict.clear() ` | Removes all elements of dictionary |
| `dict.copy() ` | Returns a shallow copy of dictionary |
| `dict.fromkeys() ` | Create a new dictionary with keys from seq and values set to value. |
| `dict.get(key, default=None) ` | For key, returns value or default if key not in dictionary |
| `dict.items() ` | Returns a list of dict's (key, value) tuple pairs |
| `dict.keys() ` | Returns list of dictionary keys |
| ` dict.setdefault(key, default=None)` | Similar to get(), but will set dict[key]=default if key is not already in dict |
| `dict.update(dict2) ` | Adds dictionary dict2's key-values pairs to dict |
| `dict.values() ` | Returns list of dictionary values |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-dictionaries.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-tuples" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Tuple</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-date-time" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Date &amp; Time</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
