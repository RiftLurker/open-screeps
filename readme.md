# OpenScreeps

> reusable and tested building blocks for every [screeps][screeps-website] code base

This repository is a collection of useful snippets and methods that I came up with when programming for the game [screeps][screeps-website]. I'm now attempting to restructure my code and splitting it into reusable modules for everyone to enjoy, teaching myself how to work with unit tests and a monorepo in the progress.

## Disclaimer

This is still heavily work in progress while I extract modules from my code and get used to different tools. None of the modules are actually on npm yet, even though you could install them manually by cloning the repo and building them locally. The disclaimer will get removed once I've established a workflow and published the packages to npm.

## Usage

Creating a functional and feature rich bot for [screeps][screeps-website] can be a tedious and time consuming process. This projects aims to provide a lot of single purpose modules to simplify and extend the provided game API and improve the way you write your code.

You can check the `src/` directory for a list of created modules, the directory names are usually very good indicators of what the containing code does. Never the less each module has a readme file with a description of it's purpose and a short example.

## Built with

- [Lerna][lerna-npm] for managing the monorepo and cross-dependencies
- [TypeScript][typescript-npm] for statically typed JavaScript
- [@types/screeps][@types/screeps-npm] for the screeps API type definitions
- [AVA][ava-npm] as the ava runner
- [nyc][nyc-npm] for coverage reports

## Contributing

Check out our [Contributing Guidelines][contributing].

## License

[MIT][license]

[license]: ./license.md
[contributing]: ./contributing.md

[npm-website]: https://npmjs.org
[screeps-website]: https://screeps.com

[@types/screeps-npm]: https://npmjs.org/package/@types/screeps
[ava-npm]: https://npmjs.org/package/ava
[lerna-npm]: https://npmjs.org/package/lerna
[nyc-npm]: https://npmjs.org/package/nyc
[typescript-npm]: https://npmjs.org/package/typescript
