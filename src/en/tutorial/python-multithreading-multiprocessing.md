---
layout: tutorial.njk
title: Multithreading & Multiprocessing Python
order: 33
permalink: /en/tutorial/python-multithreading-multiprocessing/
---

In modern computing, we often hear terms like *parallelism* and *concurrency*. In Python, there are two main ways to do multiple things "at once": **Multithreading** and **Multiprocessing**.

The choice between them depends heavily on the type of task you are working on: whether it is **I/O Bound** or **CPU Bound**.

### 1. I/O Bound vs CPU Bound

- **I/O Bound**: Program spends most of its time waiting for input/output (example: network requests, reading disk files, database queries). CPU is often idle.
- **CPU Bound**: Program spends its time doing mathematical calculations or heavy data processing. CPU works at 100%.

### 2. Multithreading (For I/O Bound)

Threading uses threads inside the same single process. Threads share the same memory.

However, Python (CPython) has a **GIL (Global Interpreter Lock)**, which prevents two Python threads from executing bytecode simultaneously on a single CPU core. So, Multithreading in Python **does not** make CPU-bound code faster (it can even be slower due to overhead).

But, Multithreading is **very fast** for I/O Bound because when one thread waits (e.g., waiting for web response), other threads can run.

```python
import threading
import time

def download_page(url):
    print(f"Start downloading {url}...")
    time.sleep(2) # Simulate network delay
    print(f"Finished downloading {url}")

start = time.time()

threads = []
urls = ["web1", "web2", "web3"]

for url in urls:
    t = threading.Thread(target=download_page, args=(url,))
    threads.append(t)
    t.start()

# Wait for all threads to complete
for t in threads:
    t.join()

end = time.time()
print(f"Total time: {end - start:.2f} seconds")
# Output around 2 seconds, not 6 seconds!
```

### 3. Multiprocessing (For CPU Bound)

Multiprocessing creates separate new Python processes. Each process has its own Python interpreter and memory space. This bypasses GIL, so it can utilize multi-core CPU maximally.

Use this for computationally heavy tasks.

```python
import multiprocessing
import time

def heavy_square_calculation(number):
    print(f"Process {number} starts...")
    result = sum(i * i for i in range(10**7)) # Heavy calculation
    print(f"Process {number} finished.")
    return result

if __name__ == "__main__":
    start = time.time()
    
    # Create 2 processes running parallel on different CPU cores
    p1 = multiprocessing.Process(target=heavy_square_calculation, args=(1,))
    p2 = multiprocessing.Process(target=heavy_square_calculation, args=(2,))
    
    p1.start()
    p2.start()
    
    p1.join()
    p2.join()
    
    end = time.time()
    print(f"Total time: {end - start:.2f} seconds")
```

*Note: You must protect the main code with `if __name__ == "__main__":` when using multiprocessing in Windows.*

### 4. Concurrent Futures (Modern Way)

Python provides `concurrent.futures` module which gives higher-level and easier interface for Threading and Multiprocessing.

```python
from concurrent.futures import ThreadPoolExecutor
import time

def task(n):
    time.sleep(1)
    return f"Task {n} finished"

start = time.time()

with ThreadPoolExecutor(max_workers=3) as executor:
    results = executor.map(task, [1, 2, 3])
    
    for result in results:
        print(result)

print(f"Time: {time.time() - start:.2f} seconds")
```
Replace `ThreadPoolExecutor` with `ProcessPoolExecutor` if you want to switch to multiprocessing.

### Conclusion

| Feature | Multithreading | Multiprocessing |
| :--- | :--- | :--- |
| **Memory** | Share memory (Shared) | Separate memory (Isolated) |
| **Overhead** | Low | High (needs start time) |
| **Suitable for** | I/O Bound (Network, File) | CPU Bound (Math, Data Processing) |
| **GIL** | Affected by GIL | Free from GIL |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-multithreading-multiprocessing.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-metaprogramming" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Metaprogramming</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-async-await" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Async Await</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
