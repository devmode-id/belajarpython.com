---
layout: tutorial.njk
title: Python Operators
order: 8
permalink: /en/tutorial/python-operators/
---

Operators are constructs that can manipulate the values of operands.

For example the operation 3 + 2 = 5. Here `3` and `2` are operands and `+` is the operator.

The Python programming language supports various kinds of operators, including:

- [Arithmetic Operators](#arithmetic-operators)
- [Comparison (Relational) Operators](#comparison-operators)
- [Assignment Operators](#assignment-operators)
- [Logical Operators](#logical-operators)
- [Bitwise Operators](#bitwise-operators)
- [Membership Operators](#membership-operators)
- [Identity Operators](#identity-operators)

### Arithmetic Operators <a name="arithmetic-operators"></a>

| Operator | Example | Explanation |
| -------------------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| Addition `+` | `1 + 3 = 4` | Adds the value of each operand or number |
| Subtraction `-` | `4 - 1 = 3` | Subtracts the operand value on the left using the operand on the right |
| Multiplication `*` | `2 * 4 = 8` | Multiplies operands/numbers |
| Division `/` | `10 / 5 = 2` | To divide the operand on the left using the operand on the right |
| Modulus `%` | `11 % 2 = 1` | Gets the remainder of the division from the operand on the left of the operator when divided by the operand on the right |
| Exponent `**` | `8 ** 2 = 64` | Raises the operand on the left of the operator to the power of the operand on the right of the operator |
| Floor Division `//` | `10 // 3 = 3` | Same as division. It's just that the digits behind the comma are removed |

Below is an example of using Arithmetic Operators in Python programming language

```python
#ARITHMETIC OPERATORS

#Addition
print(13 + 2)
apple = 7
orange = 9
fruit = apple + orange #
print(fruit)

#Subtraction
debt = 10000
pay = 5000
remainingDebt = debt - pay
print("Your remaining debt is ", remainingDebt)

#Multiplication
length = 15
width = 8
area = length * width
print(area)

#Division
cake = 16
child = 4
cakePerChild = cake / child
print("Each child will get cake parts as much as ", cakePerChild)

#Modulus
number1 = 14
number2 = 5
result = number1 % number2
print("Remainder of division from number ", number1, " and ", number2, " is ", result)

#Exponent
number3 = 8
number4 = 2
resultExponent = number3 ** number4
print(resultExponent)

#Floor Division
print(10//3)
#10 divided by 3 is 3.3333. Because it is rounded down it will produce value 3
```

### Comparison (Relational) Operators <a name="comparison-operators"></a>

Comparison operators are used to compare a value from each operand.

| Operator | Example | Explanation |
| --------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| Equal to `==` | `1 == 1` | True if each operand has the same value, then the condition is True. |
| Not equal to `!=` | `2 != 2` | False. Will produce the opposite value of the actual condition. |
| Greater than `>` | `5 > 3` | True If the left operand value is greater than the right operand value, then the condition becomes true. |
| Less than `<` | `5 < 3` | True If the left operand value is smaller than the right operand value, then the condition becomes true. |
| Greater than or equal to `>=` | `5 >= 3` | True If the left operand value is greater than the right operand value, or same, then the condition becomes true. |
| Less than or equal to `<=` | `5 <= 3` | True If the left operand value is smaller than the right operand value, or same, then the condition becomes true. |

Below is an example of using Comparison Operators in Python programming language

```python
# EQUAL TO
print(1 == 1) # Result will be True because one equals one
print(1 == 2) # Result will be False because one does not equal two

# NOT EQUAL TO
print(2 != 2) # Result will be False because two should be equal to two
print(2 != 3) # Result will be True because two is not equal to three

# GREATER THAN
print(5 > 3) # Result will be True because five is greater than three

# LESS THAN
print(5 < 3) # Result will be False because five is not smaller than three

# GREATER THAN OR EQUAL TO
print(5 >= 3) # Result will be True because five is greater than or equal to three

# LESS THAN OR EQUAL TO
print(5 <= 3) # Result will be False because five is not smaller than or equal to three
```

### Assignment Operators <a name="assignment-operators"></a>

Assignment operators are used to give or modify values into a variable.

| Operator | Example | Explanation |
| --------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Equal `=` | `a = 1` | Gives value on the right into the variable on the left. |
| Add equal `+=` | `a += 2` | Gives variable value with variabe value itself added with value on the right. |
| Subtract equal `-=` | `a -= 2` | Gives variable value with variable value itself subtracted by value on the right. |
| Multiply equal `*=` | `a *= 2` | Gives variable value with variable value itself multiplied by value on the right. |
| Divide equal `/=` | `a /= 4` | Gives variable value with variable value itself divided by value on the right. |
| Modulus equal `%=` | `a %= 3` | Gives variable value with variable value itself divided by value on the right. What is taken later is the remainder. |
| Exponent equal `**=` | `a **= 3` | Gives variable value with variable value itself raised to the power of value on the right. |
| Floor Division equal `//=` | `a //= 3` | Divides rounded operand left of operator with operand right of operator then the result is filled to left operand. |

### Operator Execution Priority in Python

Of all the operators above, each has a priority order where the first priority will be done first, and so on until the last priority.

| Operator | Description |
| --------------------------------- | ------------------------ |
| `**` | Arithmetic |
| `~, +, -` | Bitwise |
| `*, /, %, //` | Arithmetic |
| `+, -` | Arithmetic |
| `>>, <<` | Bitwise |
| `&` | Bitwise |
| `^` | Bitwise |
| `<=, <, >, >=` | Comparison |
| `==, !=` | Comparison |
| `=, %=, /=, //=, -=, +=, *=, **=` | Assignment |
| `is, is not` | Identity |
| `in, not in` | Membership |
| `not, or, and` | Logical |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-operators.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-variables" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Variables</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-conditions" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Conditions</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
