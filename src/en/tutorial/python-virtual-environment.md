---
layout: tutorial.njk
title: Python Virtual Environments (venv)
order: 27
permalink: /en/tutorial/python-virtual-environment/
---

A Virtual Environment is an isolated workspace that allows you to install libraries specific to one project without interfering with other projects. Imagine it like having several different toolboxes for every different home repair job.

For beginners, Virtual Environment is crucial because often one project requires different package versions than another project. Without a virtual environment, you risk breaking running programs by installing new packages. By using a virtual environment, your computer system stays clean and every project only has access to the tools it truly needs.

There are several ways to create a Virtual Environment in Python. Let's discuss the most common ones and the newest ones.

### Using Built-in Module: venv

Python comes equipped with `venv` module. This is the most common and standard way.

#### 1. How to Create venv

Open terminal or command prompt in your project directory, then run:

```bash
# Windows
python -m venv myenv

# macOS / Linux
python3 -m venv myenv
```

`myenv` is the name of the folder that will contain your virtual environment.

#### 2. How to Activate venv

Once created, you must activate it:

```bash
# Windows
myenv\Scripts\activate

# macOS / Linux
source myenv/bin/activate
```

Once active, you will see `(myenv)` in front of your terminal prompt.

#### 3. How to Deactivate

To exit from the virtual environment, simply type:

```bash
deactivate
```

---

### Modern Option: uv from Astral

If you want something much faster and modern, **uv** is the best choice right now. `uv` is a Python package and environment manager written in Rust, which speed is 10x to 100x faster than traditional tools.

#### 1. Installing uv

If you don't have it yet, install it first (using pip or official installer):

```bash
pip install uv
```

#### 2. Creating and Using Environment with uv

`uv` makes environment management highly automated:

```bash
# Create environment
uv venv

# Activate (same as normal venv)
.venv\Scripts\activate # Windows
source .venv/bin/activate # macOS/Linux

# Install packages very fast
uv pip install requests
```

One of `uv`'s advantages is its ability to manage Python versions itself without needing to manually install from Python website.

### Importance in the Professional World

In the professional work world, Virtual Environment is no longer an option, but a mandatory standard. When working in large teams or managing systems on *cloud* servers, you must ensure that the application you build has a clear dependency list and does not clash with other applications. This ensures the principle of *reproducibility*, where your colleagues can run the exact same code with the exact same results on their computers.

Additionally, Virtual Environment facilitates the *deployment* process. When the application is ready to be shipped to production server, you simply provide the list of packages (usually in `requirements.txt` file) that are inside that virtual environment. Without this tool, moving code from developer's computer to server would be a technical nightmare full of errors due to library version differences.

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-virtual-environment.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-json" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python JSON Data</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-pip-package" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Pip &amp; Package</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
