---
layout: tutorial.njk
title: Running Python
order: 3
permalink: /en/tutorial/running-python/
---

To run Python, there are many ways you can do it. You can use a _shell_, terminal or use an [IDE (Integrated Development Environment)](http://www.belajarpython.com/2015/05/integrated-development-environment-ide.html). Below are the steps to run Python in the easiest way.

> **Note**: You can also run and edit Python code directly on this website in every code snippet interactively! Look for the "Run" button on the code blocks.

### Linux

1. Open terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>
2. Type python then you will enter the Python shell.
3. Write your Python script, example: `print("Welcome to Python")`. If done press the <kbd>ENTER</kbd> key, and the Python script will be executed.
4. To exit from Python shell type `exit()`

_or_

1. Use a text editor, for example gedit.
2. Create a new file, and type your python script, example: `print("Welcome to Python")`.
3. Save As with extension `.py` (example: `print.py`).
4. Run file using Terminal.
5. Open terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>.
6. Enter the directory where your Python file is saved (example: `cd /Users/admin/Desktop/`).
7. Run the Python script using python followed by the filename (example: `python print.py`).
8. Your Python script will be executed/run.

### Windows

#### Using Shell

1. Open IDLE (python shell in windows), you can search for it in the <kbd>START</kbd> button.
2. Write your Python script, example: `print("Welcome to Python")`. If done press the <kbd>ENTER</kbd> key, and the Python script will be executed.

![Python Shell Windows](/img/menjalankan-python-windows.png 'Python Shell Windows')

3. To exit from Python shell type `exit()`

#### Using Script Editor

1. To run a script saved in a file, open IDLE (python shell in windows), you can search for it in the <kbd>START</kbd> button.
2. Click menu `File - New File`
3. Write Python script on the window that appears, example:

```python
print("Learn Python")
print("at belajarpython.com")
```

4. Save script via menu `File - Save`
5. Run program by clicking menu `Run - Run Module`

![Python Editor Windows](/img/menjalankan-python-windows-editor.png 'Python Editor Windows')

### Mac OS

1. Open terminal.
2. Type python then you will enter the Python shell.
3. Write your Python script, example: `print("Welcome to Python")`. If done press the <kbd>ENTER</kbd> key, and the Python script will be executed.
4. To exit from Python shell type `exit()`

_or_

1. Use a text editor.
2. Create a new file, and type your python script, example: `print("Welcome to Python")`.
3. Save As with extension `.py` (example: `print.py`).
4. Run file using Terminal.
5. Open terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>
6. Enter the directory where your Python file is saved (example: `cd /Users/admin/Desktop/`).
7. Run the Python script using python followed by the filename (example: `python print.py`).
8. Your Python script will be executed/run.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/running-python.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-installation" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Installation</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/hello-world-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Hello World Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
