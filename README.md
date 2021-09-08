# `contract-list-schema`

[![npm](https://img.shields.io/npm/v/@pooltogether/contract-list-schema)](https://unpkg.com/@pooltogether/contract-list-schema@latest/)

A package for maintaining contract deployments & ABIs.

## Notes

With hardcoded addresses in a schema, when swapping out a contract address there will be a period of time when this package doesn't match live chain data.

## Maintaining

### **When swapping or removing a contract**

- Bump package **MAJOR** version
- Add contract ABIs (if necessary)
- Update relevant contracts in `contracts`

### **When deploying a new contract**

- Bump package **MINOR** version
- Add contract ABIs (if necessary)
- Add contracts to `contracts` (where necessary)

### **When adding a new tag**

- Bump package **MINOR** version
- Add tag to `tags`
- Add tag to relevant Contracts in `contracts`

#### Local use

In `contract-list-schema`
`yalc publish --push`

In the repo you want to use `contract-list-schema`
`yalc add contract-list-schema`
