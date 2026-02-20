---
layout: tutorial.njk
title: Python Web Development
order: 24
permalink: /en/tutorial/python-web-development/
---

Web development is a broad term for conceptualizing, creating, deploying, and operating web applications and application programming interfaces for the Web.

### Python Use in Web Development

Python can be used to build server-side web applications. While a web framework is not required to build a web application, it is rare that developers would not use an existing open source library to speed up their progress in getting their application working.

Python is not used in a web browser. The language executed in browsers like Chrome, Firefox, and Internet Explorer is JavaScript. Projects such as pyjs can compile from Python to JavaScript. However, most Python developers write their web applications using a combination of Python and JavaScript. Python is executed on the server side while JavaScript is downloaded to the client and executed by the web browser.

To create a website using Python as its programming language, the method is very easy. But keep in mind that previously you must have mastered HTML, CSS and Javascript.

### Python Web Frameworks

The most popular and easy-to-learn web development frameworks in python are Django, Flask, and FastAPI.

#### Flask

Flask is a python microframework that is easy to learn, easy to install and very simple development.

Here are some of its advantages:

- easy to use
- built-in development server and debugger
- integrated unit testing support
- restful request dispatching
- uses Jinja2 templating
- support for secure cookies (client side sessions)
- 100% WSGI 1.0 compliant
- Unicode based
- extensively documented

Flask Installation
`pip install Flask`

Hello World Web App with Flask

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

if __name__ == "__main__":
  app.run()
```

Run the server with the command:
`python hello.py`

Open [http://localhost:5000/](http://localhost:5000/) in your browser and `Hello World!` will appear

#### Django

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. It takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel.

The advantage of the Django Framework compared to others is in terms of scalability. This framework is suitable for large application development.

To install Django execute command below :
`pip install Django`

Once installed, create a new Django project:

```bash
django-admin startproject myproject
cd myproject
python manage.py runserver
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in browser and you will see Django welcome page.

#### FastAPI

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. FastAPI is very popular in 2025 because of its high performance and ease of use.

FastAPI advantages:

- Very fast: Performance on par with NodeJS and Go
- Fast to code: Increase development speed by 2-3 times
- Fewer bugs: Reduce about 40% of human errors
- Automatic documentation: Swagger UI and ReDoc automatically available
- Standard-based: OpenAPI and JSON Schema

FastAPI Installation:
`pip install fastapi uvicorn`

Hello World with FastAPI:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

Run server with command:
`uvicorn main:app --reload`

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to see the result, and [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) for interactive API documentation.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-web-development.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-networking" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Networking</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-regex" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python RegEx</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
