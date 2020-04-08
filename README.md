[![Build Status](https://travis-ci.org/dmytropaduchak/simple-interpolation.svg?branch=master)](https://travis-ci.org/dmytropaduchak/simple-interpolation)
[![Coverage Status](https://coveralls.io/repos/github/dmytropaduchak/simple-interpolation/badge.svg?branch=master)](https://coveralls.io/github/dmytropaduchak/simple-interpolation?branch=master)
[![NPM Version](https://badge.fury.io/js/simple-interpolation.svg)](http://badge.fury.io/js/simple-interpolation)
[![Open Issues](https://img.shields.io/github/issues-raw/tterb/PlayMusic.svg?maxAge=25000)](https://github.com/dmytropaduchak/simple-interpolation/issues)  
[![Dependecy Status](https://david-dm.org/tterb/Hyde.svg)](https://github.com/dmytropaduchak/simple-interpolation)  
[![DEV Dependency Status](https://david-dm.org/tterb/Hyde/dev-status.svg)](https://github.com/dmytropaduchak/simple-interpolation?type=dev)  

# Simple Interpolation

A simple interpolation module that construct new data points within the range of a discrete set of known data points, [example](https://dmytropaduchak.github.io/simple-interpolation).

## Installation 

You can install this package using NPM:

```sh
npm i simple-interpolation --save
```

## Single Interpolation

```
  Simple Schema of Single interpolation

  ---|---|
  x1 |y1 |
  ---|---|
   x | y |
  ---|---|
  x2 |y2 |
  ---|---|
```
Simple using way

```javascript
import { single } from 'simple-interpolation';

const points = [{ x: 1, y: 1}, { x: 2, y: 2 }];

single(points)({ x: 1.5 }); // y -> 1.5
single(points)({ y: 1.5 }); // x -> 1.5
```

Or you can use JavaScript

```javascript
var simple = require('simple-interpolation');

var points = [{ x: 1, y: 1}, { x: 2, y: 2 }];
var single = simple.single(points);

single({ x: 1.5 }); // y -> 1.5
single({ y: 1.5 }); // x -> 1.5
```

Or you can use JavaScript(Babale)

```javascript
import { single } from 'simple-interpolation';

const points = [{ x: 1, y: 1}, { x: 2, y: 2 }];

const f = single(points);

f({ x: 1.5 }); // y -> 1.5
f({ y: 1.5 }); // x -> 1.5
```

Or you can use TypeScript

```typescript
import { single } from "simple-interpolation";
// import { single, Point, X, Y } from "simple-interpolation/single";

const points = [{ x: 1, y: 1}, { x: 2, y: 2 }];

const f = single(points);

f({ x: 1.5 }); // y -> 1.5
f({ y: 1.5 }); // x -> 1.5
```

## Double Interpolation

```
  Simple Schema of Double interpolation

     |x1 | x |x2 |
  ---|---|---|---|
  y1 |z11|   |z12|
  ---|---|---|---|
   y |   | z |   |
  ---|---|---|---|
  y2 |z21|   |z22|
  ---|---|---|---|
```

Simple way

```javascript
import { double } from 'simple-interpolation';

const points = [{ x: 1, y: 1, z: 11 }, { x: 2, y: 1, z: 12 }, { x: 1, y: 2, z: 21 }, { x: 2, y: 2, z: 22 }];

double(points)({ x: 1.5, y: 1.5 }); // z -> 16.5
double(points)({ x: 1.5, z: 16.5 }); // y -> 1.5
double(points)({ y: 1.5, z: 16.5 }); // x -> 1.5
```

Or you can use JavaScript

```javascript
var simple = require('simple-interpolation');
var points = [{ x: 1, y: 1, z: 11 }, { x: 2, y: 1, z: 12 }, { x: 1, y: 2, z: 21 }, { x: 2, y: 2, z: 22 }];

var f = simple.double(points);

f({ x: 1.5, y: 1.5 }); // z -> 16.5
f({ x: 1.5, z: 16.5 }); // y -> 1.5
f({ y: 1.5, z: 16.5 }); // x -> 1.5
```

Or you can use JavaScript(Babale)

```javascript
import { double } from 'simple-interpolation';

const points = [{ x: 1, y: 1, z: 11 }, { x: 2, y: 1, z: 12 }, { x: 1, y: 2, z: 21 }, { x: 2, y: 2, z: 22 }];

const f = double(points);

f({ x: 1.5, y: 1.5 }); // z -> 16.5
f({ x: 1.5, z: 1.5 }); // y -> 1.5
f({ y: 1.5, z: 1.5 }); // x -> 1.5
```

Or you can use TypeScript

```typescript
import { double } from "simple-interpolation";
// import { double, Point, X, Y , Z } from "simple-interpolation/double";

const points = [{ x: 1, y: 1, z: 11 }, { x: 2, y: 1, z: 12 }, { x: 1, y: 2, z: 21 }, { x: 2, y: 2, z: 22 }];

const f = double(points);

f({ x: 1.5, y: 1.5 }); // z -> 16.5
f({ x: 1.5, z: 16.5 }); // y -> 1.5
f({ y: 1.5, z: 16.5 }); // x -> 1.5
```

## Unit testing

For run unit tests, use:

```
npm run test
```

All unit test report you can find at `report/` folder.

For run test at watch mode, use:

```
npm run test:dev
```


## Linting

For check eslint rules, use:

```
npm run lint
```

For auto fix all eslint bugs, use:

```
npm run lint:fix
```


## License
Except where noted otherwise, files are licensed under the MIT License.

## Information

- [Single or Linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation).
- [Double or Bilinea interpolation](https://en.wikipedia.org/wiki/Bilinear_interpolation).
