---
layout: tutorial.njk
title: Python Loop
order: 10
permalink: /en/tutorial/python-loops/
---

In general, statements in programming languages will be executed sequentially. The first statement in a function is run first, followed by the second, and so on. But there will be situations where you have to write a lot of code, where the code is very much. If done manually then you will only waste energy by writing hundreds or even thousands of codes. For that you need to use repetition (loop) in the Python programming language.

In Python programming language repetition is divided into 3 types, namely:

- While Loop
- For Loop
- Nested Loop

### While Loop

While Loop repetition in Python programming language executes statement many times as long as condition is true or `True`.

Below is an example of using While Loop repetition.

```python
#Example of using While Loop
#Note: Determining scope in Python can use tabs instead of using brackets

count = 0
while (count < 9):
  print ("The count is: ", count)
  count = count + 1

print ("Good bye!")
```

### For Loop

`for` repetition in Python has the ability to repeat items from any sequence, such as `list` or `string`.

Below is an example of using For Loop repetition.

```python
#Example of simple for loop
numbers = [1,2,3,4,5]
for x in numbers:
  print(x)

#Example of for loop
fruits = ["pineapple", "apple", "orange"]
for food in fruits:
  print ("I like to eat", food)
```

### Nested Loop

Python programming language allows using one loop inside another loop. The following section shows some examples to illustrate the concept.

Below is an example of using Nested Loop.

```python
#Example of using Nested Loop
#Note: Use of modulo on conditional assumes non-zero value as True and zero as False

i = 2
while(i < 100):
  j = 2
while(j <= (i/j)):
  if not(i%j): break
  j = j + 1
  if (j > i/j) : print(i, " is prime")
    i = i + 1

print("Good bye!")
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-loops.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-conditions" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Conditions</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-numbers" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Number</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
