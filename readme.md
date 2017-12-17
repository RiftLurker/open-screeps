# Open-Screeps
> reusable and tested building blocks for every [screeps][screeps-website] code base

This repository is a collection of useful snippets and methods that I came up with when programming for the game [screeps][screeps-website]. I'm now attempting to restructure my code and splitting it into reusable modules for everyone to enjoy, teaching myself how to work with unit tests and a monorepo in the progress.

## Getting started
As this is a monorepo containing a lot of single purpose modules there is a high chance it contains something you need as well. Just check out the `src/` directory, the directory names are usually very good indicators of what the containing code does. Never the less each module has a readme file with a description of it's purpose and a short example.

## Built with
- [Lerna][lerna-npm] for managing the monorepo and cross-dependencies
- [TypeScript][typescript-npm] for statically typed JavaScript
- [@types/screeps][@types/screeps-npm] for the screeps API type definitions
- [AVA][ava-npm] as the test runner
- [nyc][nyc-npm] for coverage reports

## Contributing
TODO

## License
[MIT](license.md)

[npm-website]: https://npmjs.org
[screeps-website]: https://screeps.com

[@types/screeps-npm]: https://npmjs.org/package/@types/screeps
[ava-npm]: https://npmjs.org/package/ava
[lerna-npm]: https://npmjs.org/package/lerna
[nyc-npm]: https://npmjs.org/package/nyc
[typescript-npm]: https://npmjs.org/package/typescript
