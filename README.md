# vue-shared-data

A Vue.js plugin for shared(application-local) data store 

## Usage

```
new Vue({ el, data, shared });
```

```
// template
<div v-if="!$shared.isMember">
// script
const url = `${this.$shared.baseUrl}/path/to/api`;
```
