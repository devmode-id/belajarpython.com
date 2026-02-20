---
layout: tutorial.njk
title: Python Async Await
order: 34
permalink: /en/tutorial/python-async-await/
---

Asynchronous programming with `async/await` is a programming paradigm that allows you to execute operations non-blocking. This is very useful for applications that perform many I/O operations such as HTTP requests, database access, or file reading.

### Why Asynchronous?

In traditional synchronous programming:

```python
# Synchronous - waiting one by one
result1 = fetch_data_from_api()      # Wait 2 seconds
result2 = fetch_data_from_database() # Wait 2 seconds
result3 = read_large_file()          # Wait 2 seconds
# Total: 6 seconds
```

With asynchronous:

```python
# Asynchronous - running concurrently
result1, result2, result3 = await asyncio.gather(
    fetch_data_from_api(),
    fetch_data_from_database(),
    read_large_file()
)
# Total: ~2 seconds (parallel)
```

### Basic Concepts

#### Coroutine

A function defined with `async def` is called a coroutine:

```python
import asyncio

# This is a coroutine
async def greeting():
    print("Hello!")
    return "Done"

# Executing coroutine
asyncio.run(greeting())
```

#### await

`await` is used to wait for the result of a coroutine or an async operation:

```python
import asyncio

async def long_process():
    print("Start process...")
    await asyncio.sleep(2)  # Simulate async operation
    print("Process finished!")
    return "Result"

async def main():
    result = await long_process()
    print(f"Got: {result}")

asyncio.run(main())
```

### Running Coroutines

There are several ways to run a coroutine:

```python
import asyncio

async def hello():
    await asyncio.sleep(1)
    return "Hello!"

# Method 1: asyncio.run() - for standalone script
if __name__ == "__main__":
    result = asyncio.run(hello())
    print(result)

# Method 2: await - from inside another coroutine
async def main():
    result = await hello()
    print(result)
```

### Running Tasks Concurrently

#### asyncio.gather()

Executes multiple coroutines concurrently:

```python
import asyncio

async def download_file(name: str, duration: int) -> str:
    print(f"Start download {name}...")
    await asyncio.sleep(duration)
    print(f"Finished download {name}")
    return f"{name} downloaded"

async def main():
    # Run all concurrently
    results = await asyncio.gather(
        download_file("file1.txt", 2),
        download_file("file2.txt", 3),
        download_file("file3.txt", 1),
    )
    print(f"All results: {results}")

asyncio.run(main())
# Output:
# Start download file1.txt...
# Start download file2.txt...
# Start download file3.txt...
# Finished download file3.txt (after 1 second)
# Finished download file1.txt (after 2 seconds)
# Finished download file2.txt (after 3 seconds)
# Total time: ~3 seconds (not 6 seconds)
```

#### asyncio.create_task()

Create a task running in background:

```python
import asyncio

async def background_task():
    while True:
        print("Background task running...")
        await asyncio.sleep(1)

async def main():
    # Create task (not executed immediately)
    task = asyncio.create_task(background_task())
    
    # Do something else
    await asyncio.sleep(3)
    
    # Cancel task
    task.cancel()
    print("Task cancelled")

asyncio.run(main())
```

### Async Context Manager

For resource management with async:

```python
import asyncio

class AsyncDatabaseConnection:
    async def __aenter__(self):
        print("Opening database connection...")
        await asyncio.sleep(1)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Closing database connection...")
        await asyncio.sleep(0.5)
    
    async def query(self, sql: str) -> list:
        await asyncio.sleep(0.5)
        return ["result1", "result2"]

async def main():
    async with AsyncDatabaseConnection() as db:
        result = await db.query("SELECT * FROM users")
        print(f"Query result: {result}")

asyncio.run(main())
```

### Async Iterator

For async iteration:

```python
import asyncio

class AsyncCounter:
    def __init__(self, max_count: int):
        self.max_count = max_count
        self.current = 0
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        if self.current >= self.max_count:
            raise StopAsyncIteration
        await asyncio.sleep(0.5)
        self.current += 1
        return self.current

async def main():
    async for num in AsyncCounter(5):
        print(f"Count: {num}")

asyncio.run(main())
```

### Practical Example: Async HTTP Requests

Using `aiohttp` library for async HTTP requests:

```python
import asyncio
import aiohttp

async def fetch_url(session: aiohttp.ClientSession, url: str) -> dict:
    async with session.get(url) as response:
        return await response.json()

async def main():
    urls = [
        "https://api.github.com/users/python",
        "https://api.github.com/users/django",
        "https://api.github.com/users/fastapi",
    ]
    
    async with aiohttp.ClientSession() as session:
        # Fetch all URLs concurrently
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        
        for result in results:
            print(f"User: {result.get('login')}")

# Install first: pip install aiohttp
asyncio.run(main())
```

In here we use `aiohttp` (because standard `requests` does not support async). We create one `ClientSession` for efficiency, then create list of tasks (`tasks`) for each URL. `asyncio.gather(*tasks)` then executes all those requests at once. Imagine if you have to fetch data from 100 URLs; this way will be much faster than fetching them one by one.

### Timeout and Error Handling

```python
import asyncio

async def long_operation():
    await asyncio.sleep(10)
    return "Done"

async def main():
    try:
        # Set timeout 2 seconds
        result = await asyncio.wait_for(long_operation(), timeout=2.0)
        print(result)
    except asyncio.TimeoutError:
        print("Operation timeout!")

asyncio.run(main())
```

### Semaphore for Rate Limiting

Limiting number of concurrent operations:

```python
import asyncio

async def download(semaphore: asyncio.Semaphore, url: str):
    async with semaphore:  # Only N concurrent requests
        print(f"Downloading {url}...")
        await asyncio.sleep(2)
        print(f"Finished {url}")
        return url

async def main():
    # Max 3 concurrent downloads
    semaphore = asyncio.Semaphore(3)
    
    urls = [f"file_{i}.txt" for i in range(10)]
    tasks = [download(semaphore, url) for url in urls]
    
    await asyncio.gather(*tasks)

asyncio.run(main())
```

### Best Practices

1. **Use async for I/O bound operations** - HTTP requests, database, file I/O
2. **Do not use for CPU bound** - Use multiprocessing for heavy calculations
3. **Always await coroutine** - Don't forget await, or coroutine won't run
4. **Use asyncio.gather() for parallel** - More efficient than sequential await
5. **Handle exceptions well** - Use try/except inside coroutine

### When to Use Async?

✅ **Use async when:**
- Many I/O operations (HTTP, database, files)
- Web servers (FastAPI, aiohttp)
- Web scraping many pages
- Chat applications
- Real-time data processing

❌ **Don't use async when:**
- CPU intensive tasks (use multiprocessing)
- Simple operations without I/O wait
- Small scripts that don't need concurrency

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-async-await.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-multithreading-multiprocessing" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Multithreading</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-design-patterns" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Design Patterns</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
