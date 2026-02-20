---
layout: tutorial.njk
title: Pip & Package Management Python
order: 28
permalink: /en/tutorial/python-pip-package/
---

Pip is the standard package manager for Python. Imagine Pip like an "App Store" (App Store or Play Store) specifically for Python programming language, where you can download and install thousands of additional modules created by the Python community worldwide.

For beginners, Pip is the gateway to Python's greatness. For example, if you want to create beautiful charts, perform complex data analysis, or even create a website, you don't need to write everything from scratch. You simply use Pip to install ready-made "packages", and you can immediately focus on building your application.

### What is a Package?

A Package contains all the files you need for a module. A module is a Python code library that you can include in your project.

### Check if Pip is Installed

Pip is usually installed along with Python. To check if pip is installed, run the following command in terminal:

```bash
pip --version
```

### Installing Packages

Installing packages is very easy. Simply use the `install` command followed by the package name. For example we will install a popular package named `requests`:

```bash
pip install requests
```

### Using Packages

Once the package is installed, you can use it in your Python code with the `import` command:

```python
import requests

x = requests.get('https://belajarpython.com')
print(x.status_code)
```

### Viewing Installed Packages List

Use the `list` command to see all packages that already exist in your system or environment:

```bash
pip list
```

### Removing Packages

If you no longer need a package, you can uninstall it:

```bash
pip uninstall requests
```

### Searching Packages on PyPI

All Python packages are centrally managed at the [PyPI (Python Package Index)](https://pypi.org/) site. You can search for thousands of useful packages there before installing them using Pip.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-pip-package.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-virtual-environment" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Virtual Environment</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/decorator-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Decorators &amp; Closures</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
