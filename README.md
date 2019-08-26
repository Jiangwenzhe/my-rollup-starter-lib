# my-rollup-starter-lib

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/Jiangwenzhe/my-rollup-starter-lib.git
cd my-rollup-start-lib
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/yourLibName.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/yourLibName.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/yourLibName.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` npm run dev will run npm start and npm run watch in parallel.

`npm start` launches a server, using serve. Navigate to localhost:3000.

`npm test` builds the library, then tests it.

## Variations

* [babel](https://github.com/rollup/rollup-starter-lib/tree/babel) — illustrates writing the source code in ES2015 and transpiling it for older environments with [Babel](https://babeljs.io/)
* [buble](https://github.com/rollup/rollup-starter-lib/tree/buble) — similar, but using [Bublé](https://buble.surge.sh/) which is a faster alternative with less configuration
* [TypeScript](https://github.com/rollup/rollup-starter-lib/tree/typescript) — uses [TypeScript](https://www.typescriptlang.org/) for type-safe code and transpiling



## License

[MIT](LICENSE).
# my-rollup-starter-lib
