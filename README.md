### Hexlet tests and linter status:
[![Actions Status](https://github.com/TheKr1d/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/TheKr1d/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/3b1778e345a75cc98406/maintainability)](https://codeclimate.com/github/TheKr1d/frontend-project-lvl2/maintainability)
[![test](https://github.com/TheKr1d/frontend-project-lvl2/actions/workflows/github-actions.yml/badge.svg)](https://github.com/TheKr1d/frontend-project-lvl2/actions/workflows/github-actions.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3b1778e345a75cc98406/test_coverage)](https://codeclimate.com/github/TheKr1d/frontend-project-lvl2/test_coverage)
# Difference calculator
Difference calculator is a program with command-line interface (CLI) that generates a difference between two data structures or configuration files. Performs the following operations: reading files, parsing incoming data, building a tree of differences, forming the necessary output. The algorithm is based on tree recursion.

### Main features:
* Supports different input formats: json, yaml.
* Generates a report in the form of plain text, stylish and json.


1. Tilt the repository:
```
  git clone git@github.com:TheKr1d/frontend-project-lvl2.git
```
2. Establish a dependency:
```
  make install
  make publish
```
For help run `gendiff -h` or `gendiff --help`:
```
$ gengiff --help
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -v, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```
Run:
```
gendiff [options] <path/to/file1> <path/to/file2>
```
## Work example.

## Running the compare 2 json files command.

[![asciicast](https://asciinema.org/a/480825.svg)](https://asciinema.org/a/480825)

## Perform a comparison of 2 json files with the format `stylish`.

[![asciicast](https://asciinema.org/a/iAYkrrH3zilcSUHeVxrduWbjN.svg)](https://asciinema.org/a/iAYkrrH3zilcSUHeVxrduWbjN)
