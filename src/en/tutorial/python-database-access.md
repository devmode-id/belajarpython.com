---
layout: tutorial.njk
title: Python Database Access
order: 22
permalink: /en/tutorial/python-database-access/
---

The Python standard interface for databases is the Python DB-API. Most Python database interfaces adhere to this standard.

You can select the right database for your application. Python Database API supports a wide range of database servers such as:
- GadFly
- mSQL
- MySQL
- PostgreSQL
- Microsoft SQL Server 2000
- Informix
- Interbase
- Oracle
- Sybase
- SQLite

You must download a separate DB API module for each database you need to access. For example, if you need to access an Oracle database as well as a MySQL database, you must download both the Oracle and MySQL database modules.

The DB API provides a minimal standard for working with databases using Python structures and syntax wherever possible. This API includes:

- Importing the API module.
- Acquiring a connection with the database.
- Issuing SQL statements and stored procedures.
- Closing the connection

Python has built-in support for SQLite. In this section, we will learn all concepts using MySQL. MySQLdb module, a popular interface with MySQL represents non-compatibility with Python 3. Instead, we'll use PyMySQL module.

### What is PyMySQL?

PyMySQL is an interface for connecting to a MySQL database server from Python. It implements the Python Database API v2.0 and contains a pure-Python MySQL client library. The goal of PyMySQL is to be a drop-in replacement for MySQLdb. You can see the full documentation on using PyMySQL at [https://pymysql.readthedocs.io/en/latest/](https://pymysql.readthedocs.io/en/latest/).

### How to Install PyMySQL

Before proceeding, make sure you have PyMySQL installed on your machine. Just type the following in your Python script and execute it.

`import pymysql.cursors`

If it produces the following result, it means the MySQLdb module is not installed:

`Traceback (most recent call last):`
    `File "test.py", line 3, in `
        `Import PyMySQL`
`ImportError: No module named PyMySQL`

To install PyMySQL module please use the following command/instruction in command prompt:

`python -m pip install PyMySQL`

### Database Connection

Before connecting to a MySQL database, make sure of the following points below:

- You have created a database TESTDB.
- You have created a table EMPLOYEE in TESTDB.
- This table has fields FIRST_NAME, LAST_NAME, AGE, SEX, and INCOME.
- User ID "testuser" and password "test123" are set to access TESTDB.
- Python module PyMySQL is installed properly on your machine.
- You have gone through MySQL tutorial to understand MySQL Basics

Below is an example of connection with MySQL database "TESTDB"

```python
import pymysql.cursors

# Open database connection
db = pymysql.connect("localhost","testuser","test123","TESTDB" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# execute SQL query using execute() method.
cursor.execute("SELECT VERSION()")

# Fetch a single row using fetchone() method.
data = cursor.fetchone()

print ("Database version : %s " % data)

# disconnect from server
db.close()
```

### Creating Database Table

```python
import pymysql.cursors

# Open database connection
db = pymysql.connect("localhost","testuser","test123","TESTDB" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Drop table if it already exist using execute() method.
cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")

# Create table as per requirement
sql = """CREATE TABLE EMPLOYEE (
   FIRST_NAME  CHAR(20) NOT NULL,
   LAST_NAME  CHAR(20),
   AGE INT,
   SEX CHAR(1),
   INCOME FLOAT )"""

cursor.execute(sql)

# disconnect from server
db.close()
```

### Insert Operation

The following example executes SQL INSERT statement to create a record into EMPLOYEE table

```python
import pymysql.cursors

# Open database connection
db = pymysql.connect("localhost","testuser","test123","TESTDB" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Prepare SQL query to INSERT a record into the database.
sql = """INSERT INTO EMPLOYEE(FIRST_NAME,
   LAST_NAME, AGE, SEX, INCOME)
   VALUES ('Mac', 'Mohan', 20, 'M', 2000)"""
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()

# disconnect from server
db.close()
```

The example above can be written as follows to create SQL queries dynamically

```python
import pymysql.cursors

# Open database connection
db = pymysql.connect("localhost","testuser","test123","TESTDB" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Prepare SQL query to INSERT a record into the database.
sql = "INSERT INTO EMPLOYEE(FIRST_NAME, \
   LAST_NAME, AGE, SEX, INCOME) \
   VALUES ('%s', '%s', '%d', '%c', '%d' )" % \
   ('Mac', 'Mohan', 20, 'M', 2000)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()

# disconnect from server
db.close()
```

### Read Operation

READ Operation on any database means to fetch some useful information from the database.

Once a database connection is established, you are ready to make a query into this database. You can use fetchone() method to fetch a single record or fetchall() method to fetch multiple values from a database table.

Fetchone() - This fetches the next row of a query result set. A result set is an object that is returned when a cursor object is used to query a table.

Fetchall() - This fetches all the rows in a result set. If some rows have already been extracted from the result set, the remaining rows are retrieved from the result set.

Rowcount - This is a read-only attribute and returns the number of rows that were affected by an execute() method.

The following procedure queries all records from EMPLOYEE table having salary more than 1000

```python
import pymysql.cursors

# Open database connection
db = pymysql.connect("localhost","testuser","test123","TESTDB" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Prepare SQL query to INSERT a record into the database.
sql = "SELECT * FROM EMPLOYEE \
       WHERE INCOME > '%d'" % (1000)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Fetch all the rows in a list of lists.
   results = cursor.fetchall()
   for row in results:
      fname = row[0]
      lname = row[1]
      age = row[2]
      sex = row[3]
      income = row[4]
      # Now print fetched result
      print ("fname = %s,lname = %s,age = %d,sex = %s,income = %d" % \
             (fname, lname, age, sex, income ))
except:
   print ("Error: unable to fetch data")

# disconnect from server
db.close()
```

After you execute the code above, result will appear as below :
`fname = Mac, lname = Mohan, age = 20, sex = M, income = 2000`

### Update Operation

UPDATE Operation on any database means to update one or more records, which are already available in the database.
The following procedure updates all the records having SEX as 'M'. Here, we increase AGE of all the males by one year.

```python
import pymysql.cursors

# Open database connection
db = pymysql.connect("localhost","testuser","test123","TESTDB" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Prepare SQL query to UPDATE required records
sql = "UPDATE EMPLOYEE SET AGE = AGE + 1 WHERE SEX = '%c'" % ('M')
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()

# disconnect from server
db.close()
```

### Delete Operation

DELETE Operation is required when you want to delete some records from your database. Following is the procedure to delete all records from EMPLOYEE where AGE is more than 20.

```python
import pymysql.cursors

# Open database connection
db = pymysql.connect("localhost","testuser","test123","TESTDB" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Prepare SQL query to DELETE required records
sql = "DELETE FROM EMPLOYEE WHERE AGE > '%d'" % (20)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()

# disconnect from server
db.close()
```

Also there are several other operations as follows :

- Commit Operation db.commit()
- Rollback Operation db.rollback()
- Disconnect Operation db.close()

If you want more complete documentation of python programming language, please open official documentation from Python - [Full Python Documentation](https://docs.python.org/3/)

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-database-access.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-class-objects" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Object &amp; Class</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-networking" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Networking</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
