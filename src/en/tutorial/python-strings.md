---
layout: tutorial.njk
title: Python String
order: 12
permalink: /en/tutorial/python-strings/
---

Strings are the most popular type in programming languages. We can create them simply by enclosing characters in quotes. Python treats single quotes the same as double quotes. Creating a string is as easy as assigning a value to a variable.

Below is a simple example of a string in Python programming language.

```python
print("Hello World")
```

### Accessing Values in Strings

Python does not use character type; these are treated as strings of length one, thus also considered a substring.

To access substrings, use square brackets for slicing along with the index or indices to obtain your substring. For example:

```python
name = 'John Doe'
message = "John Doe learns python language at Belajarpython"
print ("name[0]: ", name[0])
print ("message[1:4]: ", message[1:4])
```

When the code above is executed, it produces the following result:

`name[0]: J`
`message[1:4]: ohn`

### Updating Strings

You can "update" an existing string by (re)assigning a variable to another string. The new value can be related to its previous value or to a completely different string altogether. For example:

```python
message = 'Hello World'
print ("Updated String :- ", message[:6] + 'Python')
```

When the code above is executed, it produces the following result:

`Updated String :- Hello Python`

### Python Escape Characters

Below is a table of escape characters or non-printable characters that can be represented with backslash notation prefix.

| Backslash Notation | Hexadecimal Character | Explanation |
| ---------------- | -------------------- | --------------------------------------------------------------- |
| `\a ` | `0x07 ` | Bell or alert |
| `\b ` | `0x08 ` | Backspace |
| `\cx ` | | Control-x |
| `\C-x ` | | Control-x |
| `\e ` | `0x1b ` | Escape |
| `\f ` | `0x0c ` | Formfeed |
| `\M-\C-x ` | | Meta-Control-x |
| `\n ` | `0x0a ` | Newline |
| `\nnn ` | | Octal notation, where n is in the range 0..7 |
| `\r ` | `0x0d ` | Carriage return |
| `\s ` | `0x20 ` | Space |
| `\t ` | `0x09 ` | Tab |
| `\v ` | `0x0b ` | Vertical tab |
| `\x ` | | Character x |
| `\xnn ` | | Hexadecimal notation, where n is in the range 0..9, a..f, or A..F |

### Python String Special Operators

Assume string variable a is 'Hello' and variable b is 'Python', then below are the operators that can be used on both strings in those variables. `a = "Hello"` `b = "Python"`

| Operator | Example | Explanation |
| --------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `+ ` | `a + b ` | will result into HelloPython Concatenation - Adds values on both sides of the operator |
| `* ` | `a*2` | will result into HelloHello Repetition - Creates new string, concatenating multiple copies of the same string |
| ` []` | `a[1]` | will result into e Slice - Gives character from the given index |
| `[ : ]` | `a[1:4]` | will result into ell Range Slice - Gives characters from the given range |
| `in` | `H in a ` | will result into 1 Membership - Returns true if a character exists in the given string |
| ` not in` | ` Z not in a` | will result into 1 Membership - Returns true if a character does not exist in the given string |
| `r/R ` | `print r'\n' prints \n and print R'\n'prints \n` | Raw String - Suppresses actual meaning of Escape characters. Syntax for raw strings is exactly same as normal strings except the raw string operator, letter "r", which precedes the quote. "R" can be lowercase (r) or uppercase (R) and must be placed immediately before the first quote. |
| `%` | | Format - Performs String formatting |

### Python String Formatting Operator

One of Python's coolest features is the string format operator %. This operator is unique to strings and makes up to have functions from C's printf() family.
Here is a simple example: `print ("My name is %s and weight is %d kg!" % ('Zara', 21)) `

Here is the complete list of symbols that can be used together with % :

| Operator | Explanation |
| -------- | ------------------------------------------------ |
| `%c` | character |
| `%s` | String conversion via str() prior to formatting |
| `%i` | Signed decimal integer |
| `%d` | Signed decimal integer |
| `%u` | Unsigned decimal integer |
| `%o` | Octal integer |
| `%x` | Hexadecimal integer (lowercase letters) |
| `%X` | Hexadecimal integer (uppercase letters) |
| `%e` | Exponential notation (with lowercase 'e') |
| `%E` | Exponential notation (with uppercase 'E') |
| `%f` | Floating point real number |
| `%g` | The shorter of %f and %e |
| `%G` | The shorter of %f and %E |

### Python Triple Quotes

Python triple quotes are used by allowing strings to span multiple lines, including literal NEWLINEs, TABs, and other special characters.
The syntax for triple quotes consists of three single or double quotes written consecutively.
Here is an example:

```python
triplequotes = """this is a long string that is made up of
several lines and non-printable characters such as
TAB ( \t ) and they will show up that way when displayed.
NEWLINEs within the string, whether explicitly given like
this within the brackets [ \n ], or just a NEWLINE within
the variable assignment will also show up.
"""
print (triplequotes)
```

### Python Unicode Strings

In Python 3, all strings are represented in Unicode. Whereas in Python 2 they are stored internally as 8-bit ASCII, so 'u' prefix is required to make it Unicode. But this is no longer needed now.

### Built-in String Methods

Python includes the following built-in methods to manipulate strings:

| Method | Explanation |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `capitalize()` | Capitalizes first letter of string |
| `center(width, fillchar)` | Returns a space-padded string with the original string centered to a total of width columns. |
| `count(str, beg = 0,end = len(string))` | Counts how many times str occurs in string or in a substring of string if starting index beg and ending index end are given. |
| `endswith(suffix, beg = 0, end = len(string))` | Determines if string or a substring of string (if starting index beg and ending index end are given) ends with suffix; returns true if so and false otherwise. |
| `find(str, beg = 0 end = len(string))` | Determine if str occurs in string or in a substring of string if starting index beg and ending index end are given returns index if found and -1 otherwise. |
| `index(str, beg = 0, end = len(string))` | Same as find(), but raises an exception if str not found. |
| `isalnum()` | Returns true if string has at least 1 character and all characters are alphanumeric and false otherwise. |
| `isalpha()` | Returns true if string has at least 1 character and all characters are alphabetic and false otherwise. |
| `isdigit()` | Returns true if string contains only digits and false otherwise. |
| `islower()` | Returns true if string has at least 1 cased character and all cased characters are in lowercase and false otherwise. |
| `isnumeric()` | Returns true if a unicode string contains only numeric characters and false otherwise. |
| `isspace()` | Returns true if string contains only whitespace characters and false otherwise. |
| `istitle()` | Returns true if string is properly "titlecased" and false otherwise. |
| `isupper()` | Returns true if string has at least one cased character and all cased characters are in uppercase and false otherwise. |
| `join(seq)` | Merges (concatenates) the string representations of elements in sequence seq into a string, with separator string. |
| `len(string)` | Returns the length of the string |
| `ljust(width[, fillchar])` | Returns a space-padded string with the original string left-justified to a total of width columns. |
| `lower()` | Converts all uppercase letters in string to lowercase. |
| `lstrip()` | Removes all leading whitespace in string. |
| `max(str)` | Returns the max alphabetic character from the string str. |
| `min(str)` | Returns the min alphabetic character from the string str. |
| `replace(old, new [, max])` | Replaces all occurrences of old in string with new or at most max occurrences if max given. |
| `rfind(str, beg = 0,end = len(string))` | Same as find(), but search backwards in string. |
| `rindex( str, beg = 0, end = len(string))` | Same as index(), but search backwards in string. |
| `rjust(width,[, fillchar])` | Returns a space-padded string with the original string right-justified to a total of width columns. |
| `rstrip()` | Removes all trailing whitespace of string. |
| `split(str="", num=string.count(str))` | Splits string according to delimiter str (space if not provided) and returns list of substrings; split into at most num substrings if given. |
| `splitlines( num=string.count('\n')) ` | Splits string at all (or num) NEWLINEs and returns a list of each line with NEWLINEs removed. |
| `startswith(str, beg=0,end=len(string)` | Determines if string or a substring of string (if starting index beg and ending index end are given) starts with substring str; returns true if so and false otherwise. |
| `strip([chars])` | Performs both lstrip() and rstrip() on string |
| `swapcase()` | Inverts case for all letters in string. |
| `title()` | Returns "titlecased" version of string, that is, all words begin with uppercase and the rest are lowercase. |
| `upper()` | Converts lowercase letters in string to uppercase. |
| `zfill (width)` | Returns original string left-padded with zeros to a total of width characters; intended for numbers, zfill() retains any sign given (less one zero). |
| `isdecimal()` | Returns true if a unicode string contains only decimal characters and false otherwise. |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-strings.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-numbers" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Number</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-lists" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python List</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
