---
layout: tutorial.njk
title: Python Object & Class
order: 21
permalink: /en/tutorial/python-class-objects/
---

Python has been an object-oriented language since it existed. Creating and using classes and objects are downright easy. This tutorial will help you become an expert in using Python's object-oriented programming support.

If you do not have any prior experience with object-oriented programming (OOP), you may want to consult an introductory course on it or at least a tutorial of some sort so that you have a grasp of the basic concepts.

If you understand the basic concepts of OOP here is an introduction of Object-Oriented Programming (OOP) to help you.

### Terminology in OOP

| Term | Explanation |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Class | A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. The attributes are data members (class variables and instance variables) and methods, accessed via dot notation. |
| Class variable | A variable that is shared by all instances of a class. Class variables are defined within a class but outside any of the class's methods. Class variables are not used as frequently as instance variables are. |
| Data member | A class variable or instance variable that holds data associated with a class and its objects. |
| Function overloading | The assignment of more than one behavior to a particular function. The operation performed varies by the types of objects or arguments involved. |
| Instance variable | A variable that is defined inside a method and belongs only to the current instance of a class. |
| Inheritance | The transfer of the characteristics of a class to other classes that are derived from it. |
| Instance | An individual object of a certain class. An object obj that belongs to a class Circle, for example, is an instance of the class Circle. |
| Instantiation | The creation of an instance of a class. |
| Method | A special kind of function that is defined in a class definition. |
| Object | A unique instance of a data structure that's defined by its class. An object comprises both data members (class variables and instance variables) and methods. |
| Operator overloading | The assignment of more than one function to a particular operator. |

### Creating Python Class

The class statement is used to create a new class definition. The name of the class immediately follows the keyword class followed by a colon as follows:

`class ClassName:` `'Optional class documentation string'` `class_suite`

Here is an example of creating a simple Python class:

```python
class Employee:
  'Common base class for all employees'
  empCount = 0

  def __init__(self, name, salary):
    self.name = name
    self.salary = salary
    Employee.empCount += 1

  def displayCount(self):
    print ("Total Employee %d" % Employee.empCount)

  def displayEmployee(self):
    print ("Name : ", self.name, ", Salary: ", self.salary)
```

### Creating Instance Objects

To create instances of a class, you call the class using class name and pass in whatever arguments its `__init__` method accepts.

```python
# This would create first object of Employee class
emp1 = Employee("Zara", 2000)
# This would create second object of Employee class
emp2 = Employee("Manni", 5000)
```

### Accessing Attributes

You access the object's attributes using the dot operator with object. Class variable would be accessed using class name as follows:

```python
emp1.displayEmployee()
emp2.displayEmployee()
print ("Total Employee %d" % Employee.empCount)
```

For the complete example, please see the code below.

```python
class Employee:
  'Common base class for all employees'
  empCount = 0

  def __init__(self, name, salary):
    self.name = name
    self.salary = salary
    Employee.empCount += 1

  def displayCount(self):
    print ("Total Employee %d" % Employee.empCount)

  def displayEmployee(self):
    print ("Name : ", self.name, ", Salary: ", self.salary)

#This would create first object of Employee class"
emp1 = Employee("Zara", 2000)
#This would create second object of Employee class"
emp2 = Employee("Manni", 5000)
emp1.displayEmployee()
emp2.displayEmployee()
print ("Total Employee %d" % Employee.empCount)
```

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-class-objects.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-exceptions" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Exception</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-database-access" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Database Access</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
