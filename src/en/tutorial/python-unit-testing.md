---
layout: tutorial.njk
title: Python Unit Testing
order: 36
permalink: /en/tutorial/python-unit-testing/
---

Unit Testing is a software testing method where individual units of source code (such as functions, methods, or classes) are tested to determine whether they are working correctly.

"But my code works now!"
Maybe it works now, but what if 6 months later you change one line of code and break other features? Unit tests are your safety net.

In Python, there are two main testing frameworks: `unittest` (built-in) and `pytest` (third-party, but very popular).

### 1. Using `unittest` (Built-in)

`unittest` is inspired by JUnit (Java). It uses Class-based approach.

Suppose we have a simple function:
```python
# calc.py
def add(x, y):
    return x + y

def divide(x, y):
    if y == 0:
        raise ValueError("Cannot divide by zero")
    return x / y
```

We create the test file:
```python
# test_calc.py
import unittest
from calc import add, divide

class TestCalc(unittest.TestCase):
    
    def test_add(self):
        self.assertEqual(add(3, 4), 7)
        self.assertEqual(add(-1, 1), 0)
        
    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        
        # Test exception
        with self.assertRaises(ValueError):
            divide(10, 0)

if __name__ == '__main__':
    unittest.main()
```

Run with: `python test_calc.py`

### 2. Using `pytest` (Modern Recommendation)

`pytest` is much more concise, powerful, and "Pythonic". It uses regular functions (not classes) and standard `assert` keyword.

Installation:
```bash
pip install pytest
```

Writing tests with pytest:
```python
# test_calc_pytest.py
import pytest
from calc import add, divide

def test_add():
    assert add(3, 4) == 7
    assert add(-1, 1) == 0

def test_divide():
    assert divide(10, 2) == 5

def test_divide_zero():
    with pytest.raises(ValueError):
        divide(10, 0)
```

Run simply by typing: `pytest` in terminal. Pytest will automatically look for files starting with `test_`.

### 3. Mocking Concept

Mocking is a technique of replacing parts of the system being tested with mock objects. This is useful when your code depends on external systems like API, Database, or File System.

Example: We want to test a function that makes an API request, but we don't want to actually make the request (because it's slow and needs internet).

Using `unittest.mock`:

```python
from unittest.mock import Mock, patch
import requests

# Function to test
def get_user_data(url):
    resp = requests.get(url)
    if resp.status_code == 200:
        return resp.json()
    return None

# Test with Mock
@patch('requests.get')
def test_get_user_data(mock_get):
    # Setup mock
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = {"id": 1, "name": "Budi"}
    
    # Put mock response into mock_get
    mock_get.return_value = mock_response
    
    # Run function
    result = get_user_data("http://fakeurl.com")
    
    # Assert
    assert result["name"] == "Budi"
    # Ensure requests.get is actually called with correct URL
    mock_get.assert_called_with("http://fakeurl.com")
```

### 4. Code Coverage

How much of your code is tested? Coverage tools can tell you which lines have not been touched by tests.

Install:
```bash
pip install pytest-cov
```

Run:
```bash
pytest --cov=my_project
```

### Conclusion
- **Unit Test** is mandatory for serious applications.
- **pytest** is preferred because of its clean syntax.
- **Mocking** is used to isolate units from external dependencies.
- Get used to writing tests before code (TDD - Test Driven Development) or at least along with the code.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-unit-testing.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-design-patterns" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Design Patterns</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-memory-management" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Memory Management</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
