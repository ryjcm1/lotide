# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**
```
npm install @ryjcm1/lotide
```

**Require it:**

```jsx
const _ = require('@ryjcm1/lotide');
```

**Call it:**

```jsx
const results = _.tail([1, 2, 3]) // => [2, 3]
```

## Documentation

The following functions are currently implemented:

* `head(array)`: The function accepts an array and returns  the first element of the array
* `tail(array)`: The function accepts an array and returns an array of values that comes after the head of the array
* `middle(array)`: The function accpets an array and returns the middle element(s)
* `countLetters(string)`: The function accepts a string value and returns an object with the key of unique characters of the string and their number of occurances
* `countOnly(array, object)`: The Function accepts an array of values, and object containing boolean values. The function will return a new object countaing values that are considered truthy.
* `eqArrays(array, array)`: The function accepts two first level arrays and checks if they are equivalent to one another.
* `eqArraysRecursive(array)`: The function accepts two arrays (nested or unnested) and evaluates whether they are equivalent.
* `eqObjects(object)`: The function accept two simple objects and check if they are equiivalent to one another.
* `eqObjectsRecursive(object)`: The function accepts two objects (nested or unested) and evaluates whether they are equivalent.
* `findKeyByValue(object, value)`: The function accepts an object and a value and returns the key associated with the value if it exists.
* `findKey(object, callback)`: The function accepts an object of objects and returns the key whose value passes the callback.
* `flatten(array)`: The function accepts an array(nested or unnested) and returns a first level array.
* `map(array, callback)`: The function accepts an array and a callback function and returns a new array whereby the callback function has been applied to each element.
* `takeUntil(array)`: The function accepts an array and a callback function and returns the values of the array prior to the the value that has passed the callback condition.
* `without(array, array)`: The function accepts two arrays and returns a new array where values of the second array are not found in the first array.