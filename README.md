# Fynn’s personal website

## Requirements

- [Node.js 23](https://nodejs.org)

## Installation

```sh
npm install
```

## Development server

```sh
node --run dev
```

## Production build

```sh
node --run build
```

## Fonts

Generate fonts fallback CSS file:

```sh
node generate-fonts-fallback.js
```

## Formatting

```sh
node --run format
```

## Linting

```sh
# All tasks
node --run lint

# Individual tasks
node --run lint:css
node --run lint:js
node --run lint:markdown
node --run lint:format
```
