---
layout: tutorial.njk
title: Hello World Python
order: 4
permalink: /en/tutorial/hello-world-python/
---

The Python language syntax is almost the same as general programming languages like Java or PHP.

### Basic Syntax

Below is an example of a Python function used for printing. In Python to print, simply use the `print()` function, where something to be printed must be placed between the opening and closing parentheses. Even in Python version 2.x you don't have to use curly braces, just separate with spaces.

If you want to print String data types directly, you must put them inside valid quotes first.

```python
print("Hello World")
```

When you run the script above, you will see output in the form of text `Hello World`.

### Python Case Sensitivity

Python is case sensitive, this means uppercase and lowercase letters make a difference. For example, if you use the print function with lowercase `print()` it will work. It is different if you use uppercase `Print()` or `PRINT()`, an error message will appear.

This rule applies to variable names or other functions.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/hello-world-python.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/running-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Running Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-comments" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Comments</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
