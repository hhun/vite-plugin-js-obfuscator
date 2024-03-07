# vite-plugin-js-obfuscator [![npm](https://img.shields.io/npm/v/vite-plugin-js-obfuscator.svg)](https://npmjs.com/package/vite-plugin-js-obfuscator)

A Vite Plugin for obfuscate js files (usage [javascript-obfuscator](https://www.npmjs.com/package/javascript-obfuscator) project)

## Usage

### 1. Install

```sh
yarn add --dev vite-plugin-js-obfuscator
```

or

```sh
npm install --save-dev vite-plugin-js-obfuscator
```

### 2. Configuring Vite

Modify configuration file `vite.config.js`

```js
import obfuscator from 'vite-plugin-js-obfuscator'

export default {
  plugins: [
    obfuscator({
      exclude: ['static/chunk/_'],
      options: {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        debugProtectionInterval: 0,
        disableConsoleOutput: false,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        numbersToExpressions: false,
        renameGlobals: false,
        selfDefending: false,
        simplify: true,
        splitStrings: false,
        stringArray: true,
        stringArrayCallsTransform: false,
        stringArrayCallsTransformThreshold: 0.5,
        stringArrayEncoding: [],
        stringArrayIndexShift: true,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayWrappersCount: 1,
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersParametersMaxCount: 2,
        stringArrayWrappersType: 'variable',
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
    })
  ]
}
```

## Options

Object for [javascript-obfuscator options](https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options)
