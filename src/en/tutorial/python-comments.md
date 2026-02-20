---
layout: tutorial.njk
title: Python Comments
order: 5
permalink: /en/tutorial/python-comments/
---

Comments are code inside a Python script that is not executed or run by the machine. Comments are only used to mark or provide written explanations in the script.

Comments are commonly used to let others understand what the script does, or to remind the programmer themselves if they edit the script again someday.

To use comments you simply write a hash sign `#` followed by your comment or by using string literals opened and closed with """.

Below are examples of using comments in Python:

```python
#This is a comment

# This writing will not be executed

#comments with hash sign can only be used
#for
#one
#line

"""
Writing comments more than one line is
by using triple double quotes and
closed with triple double quotes too
"""

print("Hello World") #this is also a comment

#print("Welcome")

# comments can contain special characters !@#$%^&\*(),./;'[]\

#print name
print("Budi")

#print number/integer
print(123)
```

When you run the script above, you will see output in the form of `Hello World`, `Budi` and `123`, because the writing/comments written are not executed.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-comments.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/hello-world-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Hello World Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-data-types" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Data Types</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
