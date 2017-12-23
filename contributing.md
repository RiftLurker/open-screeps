# Contributing Guidelines

First off, thank you for considering contributing to OpenScreeps! Before you deep dive and help out with development, make sure to read the following sections in order to know what and how to work on something. If you need help with anything, feel free to create [an issue on GitHub][github-issue] or contact us in [#open-screeps][slack] on slack.

## Code of Conduct

All members of the community are expected to follow the [code of conduct][code-of-conduct].

## Getting started

There are several way to contribute to this project, the following section will show you how.

### Write code

This section will help you writing code for the OpenScreeps project. It is assumed that you have basic knowledge of how git and GitHub work.

#### Local Development

##### Edit an existing module
1. Install dependencies: `npm install`
2. Make your changes to the module and edit the tests if required
3. Verify the tests are still passing by executing `npm test` in the module directory
4. Make sure the readme reflects your changes

##### Create a new module
1. Install dependencies: `npm install`
2. Execute `npm run create` and follow the instructions
3. Create your module and write relevant test cases
4. Run the tests by executing `npm test` in the module directory
5. Make sure the readme is up to date and contains a relevant example

#### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Fix issue" not "Fixes issue")
- Limit the first line to 72 characters or less
- Only reference issues and pull requests after the first line

#### Pull Requests
- Fill in [the required template][pull-request-template]
- Do not include issue numbers in the PR title

### Review a pull request

TODO

### Report a bug

TODO

### Request a feature

TODO

### Share ideas

TODO

[code-of-conduct]: ./.github/code_of_conduct.md
[pull-request-template]: ./.github/pull_request_template.md

[slack]: https://screeps.slack.com/messages/open-screeps

[github-fork]: https://github.com/postcrafter/open-screeps/fork
[github-issue]: https://github.com/postcrafter/open-screeps/issues/new
[github-issues]: https://github.com/postcrafter/open-screeps/issues
[github-questions]: https://github.com/PostCrafter/open-screeps/labels/question
[github-pull-requests]: https://github.com/postcrafter/open-screeps/pulls
