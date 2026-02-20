---
layout: tutorial.njk
title: Python Data Types
order: 6
permalink: /en/tutorial/python-data-types/
---

Data type is a medium or memory on the computer used to hold information.

Python itself has quite unique data types if we compare it with other programming languages.

Here are the data types of the Python programming language:

| Data Type | Example | Explanation |
| ----------- | ------------------------ | ------------------------------------------------------------------------------------ |
| Boolean | `True` or `False` | Declares true `True` which has value `1`, or false `False` which has value `0` |
| String | `"Let's learn Python"` | Declares characters/sentences can be numbers, letters etc. (flanked by `"` or `'`) |
| Integer | `25` or `1209` | Declares integers |
| Float | `3.14` or `0.99` | Declares numbers that have decimal points |
| Hexadecimal | `0x9a` or `0x1d3` | Declares numbers in hex format (base 16 numbers) |
| Complex | `1 + 5j ` | Declares pairs of real and imaginary numbers |
| List | `['xyz', 786, 2.23]` | Sequence data that stores various data types and its contents can be changed |
| Tuple | `('xyz', 768, 2.23)` | Sequence data that stores various data types but its contents cannot be changed |
| Set | `{'apple', 'orange'}` | Unordered collection of unique data and cannot have duplicates |
| Dictionary | `{'name': 'adi','id':2}` | Sequence data that stores various data types in the form of key and value pairs |

To try various kinds of data types, please try the Python script below.

```python
#Boolean data type
print(True)

#String data type
print("Let's learn Python")
print('Learning Python is Very Easy')

#Integer data type
print(20)

#Float data type
print(3.14)

#Hexadecimal data type
print(0x9a)

#Complex data type
print(5j)

#List data type
print([1,2,3,4,5])
print(["one", "two", "three"])

#Tuple data type
print((1,2,3,4,5))
print(("one", "two", "three"))

#Set data type
print({1,2,3,4,5})
print({"apple", "orange", "mango"})

#Dictionary data type
print({"name":"Budi", 'age':20})
#Dictionary data type checked into biodata variable
biodata = {"name":"Andi", 'age':21} #process initialization of biodata variable
print(biodata) #process printing biodata variable containing Dictionary data type
print(type(biodata)) #function to check data type kind. will appear <class 'dict'> which means dict is dictionary data type
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-data-types.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-comments" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Comments</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-variables" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Variables</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
