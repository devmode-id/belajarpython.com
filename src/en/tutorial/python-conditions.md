---
layout: tutorial.njk
title: Python Conditions
order: 9
permalink: /en/tutorial/python-conditions/
---

### If Condition

Decision making (if condition) is used to anticipate conditions that occur during program execution and determine what actions will be taken according to the conditions.

In Python there are several statements/conditions including `if`, `else` and `elif`. `if` condition is used to execute code if the condition is true `True`.

If the condition is false `False` then the `if` statement/condition will not be executed.

Below is an example of using if condition in Python

```python
#If condition is a condition that will be executed by program if it is true or TRUE

score = 9

#if condition is true/TRUE then program will execute command below it
if(score > 7):
    print("Nine is Greater Than Seven") # True Condition, Executed

#if condition is false/FALSE then program will not execute command below it
if(score > 10):
    print("Nine is Greater Than Ten") # False Condition, Not Executed
```

From the example above, if the program is run it will print string `"Nine is Greater Than Seven"` once which is in the first if. In the second if, the statement is false, so the command `print("Nine is Greater Than Seven")` will not be executed.

### If Else Condition

Decision making (if else condition) is not only used to determine what action will be taken according to the condition, but also used to determine what action will be taken/run if the condition is not suitable.

In Python there are several statements/conditions including if, else and elif. If condition is used to execute code if the condition is true.

If else condition is a condition where if the statement is true `True` then the code in if will be executed, but if it is false `False` then it will execute code in else.

Below is an example of using if else condition in Python

```python
# If else condition is if condition is TRUE then it will be executed generally in if,
# but if it is FALSE then it will be executed code in else

score = 3
# If statement in if is TRUE then if will be executed,
# but if FALSE code in else will be executed.
if(score > 7):
    print("Congratulations You Passed")
else:
    print("Sorry You Did Not Pass")
```

In the example above, if the program is run it will print string `"Sorry You Did Not Pass"` because the statement in if is `False`.

### Elif Condition

Decision making (if elif condition) is a continuation/logical branching of "if condition". With elif we can create program code that will select several possibilities that could happen. Almost the same as "else" condition, the difference is "elif" condition can be many and not just one.

Below is an example of using elif condition in Python

```python
#Example of using elif condition

today = "Sunday"

if(today == "Monday"):
    print("I will go to college")
elif(today == "Tuesday"):
    print("I will go to college")
elif(today == "Wednesday"):
    print("I will go to college")
elif(today == "Thursday"):
    print("I will go to college")
elif(today == "Friday"):
    print("I will go to college")
elif(today == "Saturday"):
    print("I will go to college")
elif(today == "Sunday"):
    print("I will be on vacation")
```

In the example above, if the program is run it will print string `"I will be on vacation"`.

### Match Case (Python 3.10+)

Starting from Python 3.10, **Structural Pattern Matching** feature is available with `match-case` which is similar to `switch-case` in other programming languages. This is very useful to replace long `elif` chains.

```python
# Create match-case example (Python 3.10+)

today = "Sunday"

match today:
    case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":
        print("I will go to college")
    case "Saturday":
        print("I will do homework")
    case "Sunday":
        print("I will be on vacation")
    case _:
        print("Invalid day")
```

Pattern matching can also be used to match more complex data structures:

```python
# Match with data structure
def process_command(command):
    match command.split():
        case ["quit"]:
            print("Exit program")
        case ["hello", name]:
            print(f"Hello, {name}!")
        case ["add", x, y]:
            print(f"Result: {int(x) + int(y)}")
        case _:
            print("Unknown command")

process_command("hello Budi")  # Output: Hello, Budi!
process_command("add 5 3")  # Output: Result: 8
```

### Ternary Operator (One Line Condition)

Python also supports writing conditions in one line called ternary operator or conditional expression:

```python
# Ternary operator
age = 20
status = "Adult" if age >= 18 else "Child"
print(status)  # Output: Adult

# Another example
score = 85
result = "Pass" if score >= 60 else "Fail"
print(result)  # Output: Pass
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-conditions.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-operators" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Operators</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-loops" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Loop</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
