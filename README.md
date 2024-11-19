# random-crypto-api

random-crypto-api is a Typescript/Javascript library to generate random Numbers or Strings.

## Overview

A simple Typescript/JavaScript library for generating random values. This package allows you to generate random integers, floating-point numbers, and strings with customizable options.


## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install random-crypto-api
```

### Usage



```javascript
import { randomInteger, randomFloat, randomIntegerInRange, randomFloatInRange, randomString } from 'random-crypto-api';

let numInt = randomInteger(10); // Generates a random integer (e.g., numInt = 4556454549)

let numFloat = randomFloat(5); // Generates a random float (e.g., numFloat = 45678.45835)

let numRangeInt = randomIntegerInRange(0, 100); // Generates a random integer between 0 and 100 (e.g., numRangeInt = 78)

let numRangeFloat1 = randomFloatInRange(0, 100); // Generates a random float between 0 and 100 (e.g., numRangeFloat = 67.45659812)
let numRangeFloat2 = randomFloatInRange(0, 100, 2); // Generates a random float with 2 decimal places (e.g., numRangeFloat = 67.45)

let str1 = randomString(5); // Generates a random string with 5 characters (e.g., str1 = "4gAt7")

let chatSet = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVVWXYZ@$^&=+_-)(*";
let str2 = randomString(10, chatSet); // Generates a random string with 10 characters from a custom character set (e.g., str2 = "4dh#dtg+7F")

```
