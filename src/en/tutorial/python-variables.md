---
layout: tutorial.njk
title: Python Variables
order: 7
permalink: /en/tutorial/python-variables/
---

Variables are memory locations reserved to store values. This means that when you create a variable you reserve some space in memory. Variables store data carried out during program execution, where later the contents of these variables can be changed by certain operations on the program that uses variables.

Variables can store various kinds of data types. In Python programming, variables have dynamic properties, meaning Python variables do not need to be declared with a specific data type and Python variables can be changed when the program runs.

Writing Python variables itself also has certain rules, namely:

1. The first character must be a letter or underscore `_`
2. The next character can be a letter, underscore `_` or number
3. Characters in variable names are case-sensitive. This means lowercase and uppercase letters are distinguished. For example, the variable `firstName` and `firstname` are different variables.

To start creating variables in Python it is very easy, you simply write the variable then fill it with a value by adding an equal sign `=` followed by the value you want to enter.

Below is an example of using variables in the Python programming language:

```python
#process of entering data into variable
name = "John Doe"
#process of printing variable
print(name)

#value and data type in variable can be changed
age = 20 #initial value
print(age) #print age value
type(age) #check age data type
age = "twenty one" #value after changed
print(age) #print age value
type(age) #check age data type

firstName = "Budi"
lastName = "Susanto"
name = firstName + " " + lastName
age = 22
hobby = "Swimming"
print("Biodata\n", name, "\n", age, "\n", hobby)

#other variable examples
thisisvariable = "Hello"
this_is_also_variable = "Hi"
_thisisvariablealso = "Hi"
thisisvariable222 = "Bye"

length = 10
width = 5
area = length * width
print(area)
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-variables.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-data-types" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Data Types</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-operators" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Operators</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
