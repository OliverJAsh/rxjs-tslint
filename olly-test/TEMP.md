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
- [ ] Creators (with imports)
- - [ ] `Option.of` -> `fromNullable`
- - [ ] `Option.some` -> `some`
- - [ ] `Option.none()` -> `none` OR `Option.none()` -> `none()` and then manual fix afterwards (?)
- [x] Collapse imports
- [ ] forEach (manual fix?)
- [ ] Remove unused old import
- [ ] Named imports -> namespace imports (`O`)