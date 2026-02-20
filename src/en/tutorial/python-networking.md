---
layout: tutorial.njk
title: Python Networking
order: 23
permalink: /en/tutorial/python-networking/
---

Python provides two levels of access to network services. At a low level, you can access the basic socket support in the underlying operating system, which allows you to implement clients and servers for both connection-oriented and connectionless protocols.

Python also has libraries that provide higher-level access to specific application-level network protocols, such as FTP, HTTP, and so on.

This chapter gives you understanding on most famous concept in Networking - Socket Programming.

### What is Socket?

Sockets are the endpoints of a bidirectional communications channel. Sockets may communicate within a process, between processes on the same machine, or between processes on different continents.

Sockets may be implemented over a number of different channel types: Unix domain sockets, TCP, UDP, and so on. The socket library provides specific classes for handling the common transports as well as a generic interface for handling the rest.

### Socket Module

To create a socket, you must use the socket.socket() function available in socket module, which has the general syntax:

`s = socket.socket (socket_family, socket_type, protocol=0)`

### Server Socket Method

| Method | Explanation |
| ---------- | ----------------------------------------------------------------------------------------- |
| s.bind() | This method binds address (hostname, port number pair) to socket. |
| s.listen() | This method sets up and start TCP listener. |
| s.accept() | This passively accept TCP client connection, waiting until connection arrives (blocking). |

### Client Socket Method

| Method | Explanation |
| ----------- | ----------------------------------------------------- |
| s.connect() | This method actively initiates TCP server connection. |

## General Socket Methods

| Method | Explanation |
| -------------------- | --------------------------------- |
| s.recv() | This method receives TCP message |
| s.send() | This method transmits TCP message |
| s.recvfrom() | This method receives UDP message |
| s.sendto() | This method transmits UDP message |
| s.close() | This method closes socket |
| socket.gethostname() | Returns the hostname. |

```python
#!/usr/bin/python # This is server.py file

import socket # Import socket module

s = socket.socket() # Create a socket object
host = socket.gethostname() # Get local machine name
port = 12345 # Reserve a port for your service.
s.bind((host, port)) # Bind to the port

s.listen(5) # Now wait for client connection.
while True:
  c, addr = s.accept() # Establish connection with client.
  print ('Got connection from', addr)
  c.send('Thank you for connecting')
  c.close() # Close the connection
```

### Simple Server

To write an Internet server, we use the socket function available in socket module to create a socket object. The socket object is then used to call other functions to setup a socket server.

Now call `bind(hostname,port)` function to specify a port for your service on the given host.

Next, call the accept method of the returned object. This method waits until a client connects to the port you specified, and then returns a connection object that represents the connection to that client.

### Simple Client

Let us write a very simple client program which opens a connection to a given port 12345 and a given host. This is very simple to create a socket client using the Python's socket module function.

The socket.connect(hostname, port) opens a TCP connection to hostname on the port. Once you have a socket open, you can read from it like any IO object. When done, do not forget to close it, as you would close a file.

The following code is a very simple client that connects to a given host and port, reads any available data from the socket, and then exits:

```python
#!/usr/bin/python # This is client.py file

import socket # Import socket module

s = socket.socket() # Create a socket object
host = socket.gethostname() # Get local machine name
port = 12345 # Reserve a port for your service.

s.connect((host, port))
print (s.recv(1024))
s.close # Close the socket when done
```

Now run this server.py in background and then run above client.py to see the result.

##### Run server:

`python server.py &`

After server runs, continue

##### Run client:

`python client.py`

The result will be like this :
`Got connection from ('127.0.0.1', 48437)`
`Thank you for connecting`

### Python Internet Modules

Here is a list of some important modules in Python Network / Internet programming.

| Protocol | Common function | Port No | Python module |
| -------- | ------------------ | ------- | -------------------------- |
| HTTP | Web pages | 80 | httplib, urllib, xmlrpclib |
| NNTP | Usenet news | 119 | nntplib |
| FTP | File transfer | 20 | ftplib, urllib |
| SMTP | Sending email | 25 | smtplib |
| POP3 | Fetching email | 110 | poplib |
| IMAP4 | Fetching email | 143 | imaplib |
| Telnet | Command lines | 23 | telnetlib |
| Gopher | Document transfers | 70 | gopherlib, urllib |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-networking.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-database-access" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Database Access</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-web-development" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Web Development</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
