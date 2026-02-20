---
layout: tutorial.njk
title: Python Number
order: 11
permalink: /en/tutorial/python-numbers/
---

Number is a Python data type that stores numeric values. Number is an immutable data type. This means, changing the value of a number data type will result in a newly allocated object.

Number objects are created when you assign a value to them. For example: `firstNumber = 1`, `secondNumber = 33`

Python supports several Number data types including:

- Int
- Float
- Complex

Below are some examples of Number data types in Python:

| Int | Float | Complex |
| -------- | ------------- | ------------ |
| `20 ` | `0.1 ` | `3.14j ` |
| `300 ` | `1.20 ` | `35.j ` |
| `-13 ` | `-41.2 ` | `3.12e-12j ` |
| `020 ` | `32.23+e123 ` | `.873j ` |
| `-0103 ` | `-92. ` | `-.123+0J ` |
| `-0x212` | `-32.52e10 ` | `3e+123J ` |
| `0x56 ` | `60.2-E13 ` | `4.31e-4j ` |

### Python Number Data Type Conversion

In Python you can convert data types using functions. Below are some functions to convert Python number data types.

- `int(x)`
  to convert x to integer.
- `float(x)`
  to convert x to floating point number.
- `complex(x)`
  to convert x to complex number with real part x and imaginary part zero.
- `complex(x, y)`
  to convert x and y to complex number with real part x and imaginary part y.

### Python Mathematical Functions

In Python programming language there are functions to perform mathematical calculations, here is the list:

| Name | Usage | Explanation |
| ------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Absolute | `abs(x)` | Absolute value of x:(positive) distance between x and 0. |
| Ceiling | `ceil(x)` | Ceiling of x: smallest integer not less than x. |
| Exponent | `exp(x)` | Exponential value of x: ex |
| Fabs | `fabs(x)` | Absolute value of x. |
| Floor | `floor(x)` | Floor value of x: largest integer not greater than x. |
| Log | `log(x)` | Logarithm of x, for x > 0. |
| Log 10 | `log10(x)` | Base 10 logarithm of x, for x > 0. |
| Max | `max(x1, x2,...)` | Largest argument: Value closest to positive infinity |
| Min | `min(x1, x2,...)` | Smallest argument: value closest to negative infinity. |
| Modf | `modf(x)` | Fractional and integer parts of x in a two-item tuple. Both parts have the same sign as x. Integer part is returned as float. |
| Pow | `pow(x, y)` | Value of x \*\* y. |
| Round | `round(x [,n])` | X rounded to n digits from the decimal point. Python rounds away from zero as a tie-breaker: round (0.5) is 1.0 and round (-0.5) is -1.0. |
| Square Root | `sqrt(x)` | Square root of x for x > 0. |

### Python Random Number Functions

Random numbers are used for game applications, simulations, testing, security, and privacy. Python includes the following commonly used functions. Here is the list:

| Name | Usage | Explanation |
| --------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Choice | `choice(seq)` | Random item from a list, tuple, or string. |
| RandRange | `randrange ([start,] stop [,step])` | Randomly selected element from range (start, stop, step). |
| Random | `random()` | A random float r, such that 0 is less than or equal to r and r is less than 1 |
| Seed | `seed([x])` | Sets the integer starting value used in generating random numbers. Call this function before calling other random module functions. No return |
| Shuffle | `shuffle(lst)` | Shuffles list of items in place. No return |
| Uniform | `uniform(x, y)` | A random float r, such that x is less than or equal to r and r is less than y. |

### Python Trigonometric Functions

Python includes the following functions that perform trigonometric calculations. Here is the list:

| Name | Usage | Explanation |
| ------- | --------------------- | ------------------------------------------------- |
| Acos | `acos(x)` | Return arc cosine of x, in radians. |
| Asin | `asin(x)` | Return arc sine of x, in radians. |
| Atan | `atan(x)` | Return arc tangent of x, in radians. |
| Atan 2 | `atan2(y, x)` | Return atan (y / x), in radians. |
| Cosine | `cos(x)` | Return cosine of x radians. |
| Hypot | `hypot(x, y)` | Return Euclidean norm, sqrt (x * x + y * y). |
| Sine | `sin(x)` | Return sine of x radians. |
| Tangent | `tan(x)` | Return tangent of x radians. |
| Degrees | `degrees(x)` | Converts angle x from radians to degrees. |
| Radians | `radians(x)` | Converts angle x from degrees to radians. |

### Python Mathematical Constants

This module also defines two mathematical constants. Here is the list:

| Name | Usage | Explanation |
| ---- | ---------- | ----------------------- |
| Pi | `pi` | Mathematical constant Pi |
| e | `e` | Mathematical constant e |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-numbers.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-loops" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Loop</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-strings" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python String</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
