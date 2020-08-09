// @flow

type lou = number | string;

function foo(x: ?number): lou {
  if (x) {
    return x;
  }
  return "default string";
}
