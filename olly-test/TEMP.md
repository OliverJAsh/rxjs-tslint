```bash
tsc && tslint --project . --config ./olly-test/tslint.json --fix ./olly-test/main.ts
```

run multiple times:
1. methods to pipe
2. update sub module imports to main import
3. consolidate imports

Workaround Funfix type error, cannot enable flag due to other errors
https://github.com/funfix/funfix/issues/122
undefined -> never


- [x] Methods to pipeable operators with imports
- [x] `foo.pipe(...xs)` -> `pipeWith(foo, ...xs)`
- [ ] Creator: `Option.of` -> `some` (with import)
- [x] Collapse imports
- [ ] forEach
