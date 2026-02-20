---
layout: tutorial.njk
title: Working with JSON Data in Python
order: 26
permalink: /en/tutorial/python-json/
---

JSON (JavaScript Object Notation) is a popular format used for storing and transporting data. In the programming world, JSON is often used when you are fetching data from the internet (APIs) or when applications exchange information with each other.

For beginners, imagine JSON as a "shopping list" that is very neat and readable by both humans and computers. Because its form is similar to *Dictionary* in Python, learning JSON will feel familiar and very useful when you start building applications that connect to web services or save application configurations.

Below is the structure and short explanation about JSON object:

![Illustration JSON Structure Explanation](/img/belajar-json-pada-python.jpg)

Python has a built-in package called `json`, which can be used to work with JSON data.

### Importing JSON Module

To use JSON in Python, you must import the `json` module:

```python
import json
```

### Parse JSON - Convert from JSON to Python

If you have a JSON string, you can parse it by using the `json.loads()` method. The result will be a Python dictionary.

```python
import json

# some JSON:
x =  '{ "name":"John", "age":30, "city":"New York"}'

# parse x:
y = json.loads(x)

# the result is a Python dictionary:
print(y["age"])
```

### Convert from Python to JSON

If you have a Python object, you can convert it into a JSON string by using the `json.dumps()` method.

```python
import json

# a Python object (dict):
x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}

# convert into JSON:
y = json.dumps(x)

# the result is a JSON string:
print(y)
```

You can convert Python objects of the following types, into JSON strings:
* dict
* list
* tuple
* string
* int
* float
* True
* False
* None

### Format the Result

The example above prints a JSON string, but it is not very easy to read, with no indentations and line breaks.

The `json.dumps()` method has parameters to make it easier to read the result:

```python
import json

x = {
  "name": "John",
  "age": 30,
  "married": True,
  "children": ("Ann","Billy"),
  "pets": None,
  "cars": [
    {"model": "BMW 230", "mpg": 27.5},
    {"model": "Ford Edge", "mpg": 24.1}
  ]
}

# use four indents to make it easier to read the result:
print(json.dumps(x, indent=4))
```

You can also define the separators, default is (", ", ": "), which means using a comma and a space to separate each object, and a colon and a space to separate key and value:

```python
import json

x = {
  "name": "John",
  "age": 30,
  "married": True,
  "children": ("Ann","Billy"),
  "pets": None,
  "cars": [
    {"model": "BMW 230", "mpg": 27.5},
    {"model": "Ford Edge", "mpg": 24.1}
  ]
}

# use . and a space to separate objects, and an = and a space to separate keys from their values:
print(json.dumps(x, indent=4, sort_keys=True))
```

JSON is very frequently used when you fetch data from the internet (API) or when applications exchange information. So, it is important to understand how to work with JSON in Python.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-json.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-regex" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python RegEx</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-virtual-environment" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Virtual Environment</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
