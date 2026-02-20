---
layout: tutorial.njk
title: Python Type Hints
order: 29
permalink: /en/tutorial/python-type-hints/
---

Type Hints (type annotations) are a Python feature that allows you to specify the expected data type for variables, function parameters, and return values. Introduced in Python 3.5, type hints have become increasingly important for modern Python development.

### Why Use Type Hints?

Type hints provide many benefits:

- **Better documentation** - Code becomes self-documenting
- **Error detection** - IDEs and tools can detect bugs before runtime
- **More accurate autocomplete** - IDEs can provide better suggestions
- **Maintainability** - Makes code easier for other developers to understand
- **Safer refactoring** - Code changes are easier to validate

**Important:** Type hints in Python are optional and do not affect runtime. Python remains dynamically typed.

### Basic Syntax

```python
# Variable annotation
name: str = "Budi"
age: int = 25
height: float = 175.5
active: bool = True

# Function parameter and return type annotation
def greet(name: str) -> str:
    return f"Hello, {name}!"

def add(a: int, b: int) -> int:
    return a + b

# Function without return value
def print_info(message: str) -> None:
    print(message)
```

### Basic Data Types

```python
# Primitive types
x: int = 10
y: float = 3.14
z: str = "hello"
flag: bool = True
data: bytes = b"hello"

# None type
result: None = None
```

### Collection Types

For collection types, use the `typing` module (Python < 3.9) or built-in types (Python 3.9+):

```python
# Python 3.9+ (recommended)
numbers: list[int] = [1, 2, 3]
name_age: dict[str, int] = {"Andi": 25, "Budi": 30}
coordinates: tuple[float, float] = (3.14, 2.71)
unique: set[str] = {"apple", "orange"}

# Python 3.5 - 3.8 (use typing)
from typing import List, Dict, Tuple, Set

numbers: List[int] = [1, 2, 3]
name_age: Dict[str, int] = {"Andi": 25}
coordinates: Tuple[float, float] = (3.14, 2.71)
unique: Set[str] = {"apple", "orange"}
```

### Optional and Union

For values that can be None or multiple types:

```python
from typing import Optional, Union

# Optional - can be None or a specific type
def find_user(id: int) -> Optional[str]:
    if id == 1:
        return "Andi"
    return None

# Union - can be one of several types
def process(data: Union[str, int]) -> str:
    return str(data)

# Python 3.10+ syntax (recommended)
def find_user(id: int) -> str | None:
    if id == 1:
        return "Andi"
    return None

def process(data: str | int) -> str:
    return str(data)
```

### Callable (Function as Parameter)

```python
from typing import Callable

# Function that accepts another function as parameter
def apply_twice(func: Callable[[int], int], value: int) -> int:
    return func(func(value))

def double(x: int) -> int:
    return x * 2

result = apply_twice(double, 5)  # 20

# Callable with multiple arguments
def operation(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)
```

### Any Type

When the type can be anything:

```python
from typing import Any

def process_anything(data: Any) -> Any:
    return data
```

### Type Aliases

Create aliases for complex types:

```python
from typing import TypeAlias

# Type alias
UserId: TypeAlias = int
UserData: TypeAlias = dict[str, str | int]

def get_user(user_id: UserId) -> UserData:
    return {"name": "Andi", "age": 25}

# For more complex types
Matrix: TypeAlias = list[list[float]]

def transpose(matrix: Matrix) -> Matrix:
    return [[row[i] for row in matrix] for i in range(len(matrix[0]))]
```

### Generic Types

For functions that work with various types:

```python
from typing import TypeVar

T = TypeVar('T')

def first_element(items: list[T]) -> T:
    return items[0]

# Can be used with list of any type
number = first_element([1, 2, 3])        # int
word = first_element(["a", "b", "c"])   # str
```

### Literal Types

For values that must be specific:

```python
from typing import Literal

def set_status(status: Literal["active", "inactive", "pending"]) -> None:
    print(f"Status: {status}")

set_status("active")    # OK
set_status("unknown")   # Type error (detected by type checker)

# Useful for limited options
Mode = Literal["read", "write", "append"]

def open_file(path: str, mode: Mode) -> None:
    pass
```

### TypedDict

For dictionaries with a fixed structure:

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    age: int
    email: str

def create_user(data: User) -> None:
    print(f"Creating user: {data['name']}")

# Type checker will validate validity
user: User = {
    "name": "Andi",
    "age": 25,
    "email": "andi@example.com"
}
```

### Annotations for Class

```python
class Student:
    name: str
    id: str
    gpa: float
    
    def __init__(self, name: str, id: str) -> None:
        self.name = name
        self.id = id
        self.gpa = 0.0
    
    def set_gpa(self, gpa: float) -> None:
        self.gpa = gpa
    
    def get_info(self) -> str:
        return f"{self.name} ({self.id}): GPA {self.gpa}"
```

### Dataclasses with Type Hints

```python
from dataclasses import dataclass

@dataclass
class Product:
    name: str
    price: float
    stock: int = 0
    
    def total_value(self) -> float:
        return self.price * self.stock

product = Product("Laptop", 15000000, 10)
print(product.total_value())  # 150000000
```

### Tools for Type Checking

Type hints are not checked at runtime. Use the following tools:

#### 1. mypy

```bash
pip install mypy
mypy script.py
```

#### 2. pyright (VS Code Pylance)

Already integrated with VS Code via Pylance extension.

#### 3. pytype (Google)

```bash
pip install pytype
pytype script.py
```

### Complete Example

```python
from dataclasses import dataclass
from typing import Optional

@dataclass
class Address:
    street: str
    city: str
    zip_code: str

@dataclass  
class Employee:
    name: str
    email: str
    salary: float
    address: Optional[Address] = None
    
    def full_info(self) -> str:
        info = f"{self.name} - {self.email}"
        if self.address:
            info += f" ({self.address.city})"
        return info

def calculate_total_salary(employee_list: list[Employee]) -> float:
    return sum(k.salary for k in employee_list)

def find_employee(
    employee_list: list[Employee], 
    name: str
) -> Employee | None:
    for k in employee_list:
        if k.name.lower() == name.lower():
            return k
    return None

# Usage
address = Address("Jl. Sudirman", "Jakarta", "12190")
e1 = Employee("Andi", "andi@email.com", 10000000, address)
e2 = Employee("Budi", "budi@email.com", 12000000)

all_employees = [e1, e2]
print(calculate_total_salary(all_employees))  # 22000000
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/src/en/tutorial/python-type-hints.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-decorators/" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Decorators</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-async-await/" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Async Await</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
