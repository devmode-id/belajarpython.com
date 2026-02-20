---
layout: tutorial.njk
title: Python Regular Expressions (RegEx)
order: 25
permalink: /en/tutorial/python-regex/
---

Regular Expression or RegEx is a sequence of characters that forms a search pattern. RegEx can be used to check if a string contains the specified search pattern.

![Illustration Regular Expressions (RegEx)](/img/regex-illustration.png)

For beginners, imagine RegEx as a much more advanced "Search" or "Find" (Ctrl+F) feature. If regular search feature can only find exact same words, RegEx allows you to find specific patterns, like finding all phone numbers, email addresses, or date formats in a very long document without needing to know specific text content.

Although at first RegEx looks confusing because it is full of unique symbols, mastering this technique will greatly help you in text processing and performing user input validation in your Python application much more efficiently.

Python has a built-in module named `re`, which can be used to work with Regular Expressions.

### Using re Module

To use RegEx in Python, you must import the `re` module:

```python
import re
```

### Functions in re Module

The `re` module offers a set of functions that allows us to search a string for a match:

| Function | Description |
| :--- | :--- |
| `findall` | Returns a list containing all matches |
| `search` | Returns a Match object if there is a match anywhere in the string |
| `split` | Returns a list where the string has been split at each match |
| `sub` | Replaces one or many matches with a string |

#### search() Function

The `search()` function searches the string for a match, and returns a Match object if there is a match. If more than one match is found, only the first occurrence of the match is returned.

```python
import re

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)

if x:
  print("YES! We have a match!")
else:
  print("No match")
```

#### findall() Function

The `findall()` function returns a list containing all matches.

```python
import re

txt = "The rain in Spain"
x = re.findall("ai", txt)
print(x)
```

The list contains the matches in the order they are found. If no matches are found, an empty list is returned.

#### split() Function

The `split()` function returns a list where the string has been split at each match.

```python
import re

txt = "The rain in Spain"
x = re.split("\s", txt)
print(x)
```

You can control the number of occurrences by specifying the `maxsplit` parameter:

```python
import re

txt = "The rain in Spain"
x = re.split("\s", txt, 1)
print(x)
```

#### sub() Function

The `sub()` function replaces the matches with the text of your choice.

```python
import re

txt = "The rain in Spain"
x = re.sub("\s", "9", txt)
print(x)
```

You can control the number of replacements by specifying the `count` parameter:

```python
import re

txt = "The rain in Spain"
x = re.sub("\s", "9", txt, 2)
print(x)
```

### Metacharacters

Metacharacters are characters with a special meaning:

| Character | Description | Example |
| :--- | :--- | :--- |
| `[]` | A set of characters | `"[a-m]"` |
| `\` | Signals a special sequence (can also be used to escape special characters) | `"\d"` |
| `.` | Any character (except newline character) | `"he..o"` |
| `^` | Starts with | `"^hello"` |
| `$` | Ends with | `"world$"` |
| `*` | Zero or more occurrences | `"aix*"` |
| `+` | One or more occurrences | `"aix+"` |
| `{}` | Exactly the specified number of occurrences | `"al{2}"` |
| `\|` | Either or | `"falls\|stays"` |
| `()` | Capture and group | |

### Special Sequences

A special sequence is a `\` followed by one of the characters in the list below, and has a special meaning:

| Character | Description | Example |
| :--- | :--- | :--- |
| `\A` | Returns a match if the specified characters are at the beginning of the string | `"\AThe"` |
| `\b` | Returns a match where the specified characters are at the beginning or at the end of a word | `r"\bain"` `r"ain\b"` |
| `\B` | Returns a match where the specified characters are present, but NOT at the beginning (or at the end) of a word | `r"\Bain"` `r"ain\B"` |
| `\d` | Returns a match where the string contains digits (numbers from 0-9) | `"\d"` |
| `\D` | Returns a match where the string DOES NOT contain digits | `"\D"` |
| `\s` | Returns a match where the string contains a white space character | `"\s"` |
| `\S` | Returns a match where the string DOES NOT contain a white space character | `"\S"` |
| `\w` | Returns a match where the string contains any word characters (characters from a to Z, digits from 0-9, and the underscore _ character) | `"\w"` |
| `\W` | Returns a match where the string DOES NOT contain any word characters | `"\W"` |
| `\Z` | Returns a match if the specified characters are at the end of the string | `"Spain\Z"` |

### Sets

A set is a set of characters inside a pair of square brackets `[]` with a special meaning:

| Set | Description |
| :--- | :--- |
| `[arn]` | Returns a match where one of the specified characters (`a`, `r`, or `n`) are present |
| `[a-n]` | Returns a match for any lower case character, alphabetically between `a` and `n` |
| `[^arn]` | Returns a match for any character EXCEPT `a`, `r`, and `n` |
| `[0123]` | Returns a match where any of the specified digits (`0`, `1`, `2`, or `3`) are present |
| `[0-9]` | Returns a match for any digit between `0` and `9` |
| `[0-5][0-9]` | Returns a match for any two-digit numbers from `00` and `59` |
| `[a-zA-Z]` | Returns a match for any character alphabetically between `a` and `z`, lower case OR upper case |
| `[+]` | In sets, `+`, `*`, `.`, `\|`, `()`, `$`, `{}` has no special meaning, so `[+]` means: return a match for any `+` character in the string |

### Example

```python
import re

# Find string that contains lowercase letter between a and n
x = re.findall("[a-n]", txt)
print(x)
```

If no match is found, `findall()` will return an empty list.
---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-regex.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-web-development" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Web Development</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-json" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python JSON Data</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
