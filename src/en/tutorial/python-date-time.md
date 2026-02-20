---
layout: tutorial.njk
title: Python Date & Time
order: 16
permalink: /en/tutorial/python-date-time/
---

Python programs can handle date and time in several ways. Converting between date formats is a common task for computers. Python's time and calendar modules track dates and times.

### What is a Tick?

Time interval is a floating-point number in units of seconds. Particular instants in time are expressed in seconds since 12:00am, January 1, 1970.

Below is an example of its use.

```python
import time; # Used to import time module

ticks = time.time()
print ("Number of ticks since 12:00am, January 1, 1970:", ticks)
```

### What is Python TimeTuple?

Many Python time functions handle time as a tuple of 9 numbers, as shown in the table below.

| Index | Field | Value |
| ----- | ----------------- | ----------------------------------------- |
| 0 | 4-digit year | 2008 |
| 1 | Month | 1 to 12 |
| 2 | Day | 1 to 31 |
| 3 | Hour | 0 to 23 |
| 4 | Minute | 0 to 59 |
| 5 | Second | 0 to 61 |
| 6 | Day of Week | 0 to 6 (0 is Monday) |
| 7 | Day of Year | 1 to 366 |
| 8 | Daylight savings | -1, 0, 1, -1 means library determines DST |

The tuple above is equivalent to the struct_time structure. This structure has the following attributes

| Index | Attribute | Value |
| ----- | ----------- | ----------------------------------------- |
| 0 | `tm_year` | 2008 |
| 1 | `tm_mon ` | 1 to 12 |
| 2 | `tm_mday` | 1 to 31 |
| 3 | `tm_hour` | 0 to 23 |
| 4 | `tm_min ` | 0 to 59 |
| 5 | `tm_sec ` | 0 to 61 |
| 6 | `tm_wday` | 0 to 6 (0 is Monday) |
| 7 | `tm_yday` | 1 to 366 |
| 8 | ` tm_isdst` | -1, 0, 1, -1 means library determines DST |

### Getting Current Time

To translate a time instant from a seconds since the epoch floating-point value into a time-tuple, pass the floating-point value to a function (e.g., localtime) which returns a time-tuple with all nine items valid.

```python
import time;

localtime = time.localtime(time.time())
print ("Current local time :", localtime)
```

### Getting Formatted Time

You can format any time as per your requirement, but simple method to get time in readable format is asctime()

```python
import time;

localtime = time.asctime( time.localtime(time.time()) )
print ("Current local time :", localtime)
```

### Getting Calendar for a Month

The calendar module gives a wide range of methods to play with yearly and monthly calendars. Here, we print a calendar for a specific given month (Jan 2008)

```python
import calendar

cal = calendar.month(2008, 1)
print ("Here is the calendar:")
print (cal)
```

### Time Module in Python

There is a popular time module available in Python which provides functions for working with times and for converting between representations. Below is the list of existing python time module functions.

| Python Function | Explanation |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `time.altzone` | The offset of the local DST timezone, in seconds west of UTC, if one is defined. This is negative if the local DST timezone is east of UTC (as in Western Europe, including the UK). Only use this if daylight is nonzero. |
| `time.asctime([tupletime])` | Accepts a time-tuple and returns a readable 24-character string such as 'Tue Dec 11 18:07:14 2008'. |
| `time.process_time() ` | Returns the current processor time as a floating point number of seconds. To measure computational costs of different approaches, the value of time.process_time is more useful than time.time(). |
| `time.ctime([secs]) ` | Like asctime(localtime(secs)) and without arguments is like asctime() |
| `time.gmtime([secs]) ` | Accepts an instant expressed in seconds since the epoch and returns a time-tuple t with the UTC time. Note : t.tm_isdst is always 0 |
| `time.localtime([secs]) ` | Accepts an instant expressed in seconds since the epoch and returns a time-tuple t with the local time (t.tm_isdst is 0 or 1, depending on whether DST applies to instant or not by local rules). |
| `time.mktime(tupletime) ` | Accepts an instant expressed as a time-tuple in local time and returns a floating-point value with the instant expressed in seconds since the epoch. |
| `time.sleep(secs) ` | Suspends execution for the given number of seconds. |
| `time.strftime(fmt[,tupletime])` | Accepts an instant expressed as a time-tuple in local time and returns a string representing the instant as specified by string fmt. |
| `time.strptime(str,fmt='%a %b %d %H:%M:%S %Y')` | Parses str according to format string fmt and returns the instant as a time-tuple. |
| `time.time() ` | Returns the current time instant, a floating-point number of seconds since the epoch. |

There are two important attributes available with time module:

| Python Attribute | Explanation |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ` time.timezone` | Attribute time.timezone is the offset in seconds of the local time zone (without DST) from UTC (> 0 in the Americas; <= 0 in most of Europe, Asia, Africa). |
| `time.tzname ` | Attribute time.tzname is a pair of locale-dependent strings, which are the names of the local time zone without and with DST. |

### Calendar Module in Python

The calendar module supplies calendar-related functions, including functions to print a text calendar for a given month or year.

By default, calendar takes Monday as the first day of the week and Sunday as the last. To change this, call calendar.setfirstweekday() function.

Here is a list of functions available with the calendar module:

| Python Function | Explanation |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `calendar.calendar(year,w=2,l=1,c=6)` | Returns a multiline string with a calendar for year year formatted into three columns separated by spaces c. w is the width in characters of each date; each line has length 21*w+18+2*c. l is the number of lines for each week. |
| `calendar.firstweekday( ) ` | Returns the current setting for the weekday to start each week. By default, when calendar is first imported, this is 0, meaning Monday. |
| `calendar.isleap(year) ` | Returns True if year is a leap year; otherwise, False. |
| `calendar.leapdays(y1,y2) ` | Returns the number of leap days in the years in the range (y1, y2). |
| `calendar.month(year,month,w=2,l=1) ` | Returns a multiline string with a calendar for month month of year year, one line per week plus two header lines. w is the width in characters of each date; each line has length 7*w+6. l is the number of lines for each week. |
| `calendar.monthcalendar(year,month)` | Returns a list of lists of ints. Each sublist denotes a week. Days outside month month of year year are set to 0; days within the month are set to their day-of-month, 1 and up. |
| `calendar.monthrange(year,month)` | Returns two integers. The first is the code of the weekday for the first day of the month month in year year; the second is the number of days in the month. Weekday codes are 0 (Monday) to 6 (Sunday); month numbers are 1 to 12. |
| `calendar.setfirstweekday(weekday)` | Sets the first day of each week to weekday code weekday. Weekday codes are 0 (Monday) to 6 (Sunday). |
| `calendar.timegm(tupletime) ` | The inverse of time.gmtime: accepts a time instant in time-tuple form and returns the same as a floating-point number of seconds since the epoch. |
| `calendar.weekday(year,month,day)` | Returns the weekday code for the given date. Weekday codes are 0 (Monday) to 6 (Sunday); month is 1 (January) to 12 (December). |

---

> [Edit this tutorial](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/en/tutorial/python-date-time.md)

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/en/tutorial/python-dictionaries" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Python Dictionary</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/en/tutorial/python-functions" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Python Functions</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
