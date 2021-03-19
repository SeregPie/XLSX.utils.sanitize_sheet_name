# XLSX.utils.sanitize_sheet_name

`XLSX.utils.sanitize_sheet_name(data)`

Sanitizes a string to be safe for the use as a sheet name by removing the invalid characters and limiting the length.

## setup

### npm

```shell
npm i xlsx.utils.sanitize_sheet_name
```

---

Import inside an ES module.

```javascript
import 'xlsx.utils.sanitize_sheet_name';
import XLSX from 'xlsx';
```

*or*

Import inside a CommonJS module.

```javascript
require('xlsx.utils.sanitize_sheet_name');
let XLSX = require('xlsx');
```

### browser

```html
<script src="https://unpkg.com/xlsx"></script>
<script src="https://unpkg.com/xlsx.utils.sanitize_sheet_name"></script>
```

## usage

```javascript
let sheetName = XLSX.utils.sanitize_sheet_name('Yes/No? [*2]');
// => 'YesNo 2'
```
