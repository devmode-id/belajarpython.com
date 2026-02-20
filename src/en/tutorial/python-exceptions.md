---
layout: tutorial.njk
title: Python Exception
order: 20
permalink: /en/tutorial/python-exceptions/
---

Python provides two very important features to handle unexpected error in your Python programs and to add debugging capabilities in them.

- Exception Handling
- Assertions
  An exception is an event, which occurs during the execution of a program that disrupts the normal flow of the program's instructions. In general, when a Python script encounters a situation that it cannot cope with, it raises an exception. An exception is a Python object that represents an error.

When a Python script raises an exception, it must either handle the exception immediately otherwise it terminates and quits.

### Standard Exceptions

| Name | Explanation |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Exception` | Base class for all exceptions |
| `StopIteration ` | Raised when the next() method of an iterator does not point to any object. |
| `SystemExit ` | Raised by sys.exit() function. |
| `StandardError ` | Base class for all built-in exceptions except StopIteration and SystemExit. |
| `ArithmeticError ` | Base class for all errors that occur for numeric calculation. |
| `OverflowError ` | Raised when a calculation exceeds maximum limit for a numeric type. |
| `FloatingPointError` | Raised when a floating point calculation fails. |
| `ZeroDivisonError ` | Raised when division or modulo by zero is performed for all numeric types. |
| `AssertionError` | Raised in case of failure of the Assert statement. |
| `AttributeError` | Raised in case of failure of attribute reference or assignment. |
| `EOFError` | Raised when there is no input from either the raw_input() or input() function and the end of file is reached. |
| `ImportError ` | Raised when an import statement fails. |
| `KeyboardInterrupt ` | Raised when the user interrupts program execution, usually by pressing Ctrl+c. |
| `LookupError` | Base class for all lookup errors. |
| `IndexError ` | Raised when an index is not found in a sequence. |
| `KeyError ` | Raised when the specified key is not found in the dictionary. |
| `NameError` | Raised when an identifier is not found in the local or global namespace. |
| `UnboundLocalError` | Raised when trying to access a local variable in a function or method but no value has been assigned to it. |
| `EnvironmentError` | Base class for all exceptions that occur outside the Python environment. |
| `IOError` | Raised when an input/ output operation fails, such as the print statement or the open() function when trying to open a file that does not exist. |
| `OSError` | Raised for operating system-related errors. |
| `SyntaxError` | Raised when there is an error in Python syntax. |
| `IndentationError` | Raised when indentation is not specified properly. |
| `SystemError` | Raised when the interpreter finds an internal problem, but when this error is encountered the Python interpreter does not exit. |
| `SystemExit ` | Raised when Python interpreter is quit by using the sys.exit() function. If not handled in the code, causes the interpreter to exit. |
| `TypeError` | Raised when an operation or function is attempted that is invalid for the specified data type. |
| `ValueError` | Raised when the built-in function for a data type has the valid type of arguments, but the arguments have invalid values specified. |
| `RuntimeError` | Raised when a generated error does not fall into any category. |
| `NotImplementedError` | Raised when an abstract method that needs to be implemented in an inherited class is not actually implemented. |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-exceptions.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-file-io" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python File I/O</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-class-objects" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Object &amp; Class</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
