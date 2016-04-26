
# exclude-arr [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/exclude-arr.svg)](https://www.npmjs.com/package/exclude-arr) [![Downloads](https://img.shields.io/npm/dt/exclude-arr.svg)](https://www.npmjs.com/package/exclude-arr) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Exclude elements from arrays.

## :cloud: Installation

```sh
$ npm i --save exclude-arr
```


## :clipboard: Example



```js
const excludeArr = require("exclude-arr");

console.log(excludeArr([1, 2, 3, 42], 2));
// [ 1, 3, 42 ]
```

## :memo: Documentation


### `excludeArr(arr, elm, first)`
Exclude elements from the input array.

#### Params
- **Array** `arr`: Param descrpition.
- **Number|String|Etc** `elm`: The element to remove.
- **Boolean** `first`: If `true`, only the first element will be removed (even there are multiple ones).

#### Return
- **Array** The input array. Note this is **not** a copy of the input array.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`class-methods`](https://github.com/IonicaBizau/class-methods#readme)—Get the methods of a JavaScript class.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
