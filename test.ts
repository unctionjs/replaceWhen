/* eslint-disable no-magic-numbers */
import replaceWhen from "./index";

const isEven = (value) => value % 2 === 0;

test(() => {
  expect(replaceWhen(isEven)(null)([1, 2, 3])).toEqual([1, null, 3]);
});
