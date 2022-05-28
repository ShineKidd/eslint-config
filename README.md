# @shinekidd/eslint-config

## Usage

### install

```shell
npm install -D eslint @shinekidd/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": ["@shinekidd"]
}
```

### Config `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Caveat

`eslint unable to find deep configs when installed with pnpm!`

configure `.npmrc`

```
public-hoist-pattern[]=*eslint*
```

## License

[MIT](./LICENSE)
