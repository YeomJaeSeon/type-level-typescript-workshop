/* eslint-disable  @typescript-eslint/no-namespace */
/* eslint-disable  @typescript-eslint/no-unused-vars */

import { Equal, Expect } from "../helpers";

namespace one {
  type Head<tuple extends Array<any>> = tuple extends [infer head, ...any[]]
    ? head
    : never;

  type res1 = Head<[1, 2, 3]>;
  type test1 = Expect<Equal<res1, 1>>;

  type res2 = Head<[1]>;
  type test2 = Expect<Equal<res2, 1>>;

  type res3 = Head<[]>;
  type test3 = Expect<Equal<res3, never>>;
}

namespace two {
  type Shift<tuple extends Array<any>> = tuple extends [any, ...infer rest]
    ? rest
    : [];

  type res1 = Shift<[1, 2, 3]>;
  type test1 = Expect<Equal<res1, [2, 3]>>;

  type res2 = Shift<[1]>;
  type test2 = Expect<Equal<res2, []>>;

  type res3 = Shift<[]>;
  type test3 = Expect<Equal<res3, []>>;
}

namespace three {
  type Last<tuple extends Array<any>> = tuple extends [...any[], infer tail]
    ? tail
    : never;

  type res1 = Last<[1, 2, 3]>;
  type test1 = Expect<Equal<res1, 3>>;

  type res2 = Last<[1]>;
  type test2 = Expect<Equal<res2, 1>>;

  type res3 = Last<[]>;
  type test3 = Expect<Equal<res3, never>>;
}

namespace four {
  type Pop<tuple extends Array<any>> = tuple extends [...infer rest, any]
    ? rest
    : [];

  type res1 = Pop<[1, 2, 3]>;
  type test1 = Expect<Equal<res1, [1, 2]>>;

  type res2 = Pop<[1]>;
  type test2 = Expect<Equal<res2, []>>;

  type res3 = Pop<[]>;
  type test3 = Expect<Equal<res3, []>>;
}

namespace five {
  type Push<tuple extends Array<any>, element> = [...tuple, element];

  type res1 = Push<[1, 2, 3], 4>;
  type test1 = Expect<Equal<res1, [1, 2, 3, 4]>>;

  type res2 = Push<[], 1>;
  type test2 = Expect<Equal<res2, [1]>>;
}

namespace six {
  type Unshift<tuple extends Array<any>, element> = [element, ...tuple];

  type res1 = Unshift<[1, 2, 3], 4>;
  type test1 = Expect<Equal<res1, [4, 1, 2, 3]>>;

  type res2 = Unshift<[], 1>;
  type test2 = Expect<Equal<res2, [1]>>;
}

namespace seven {
  type Concat<tuple1 extends Array<any>, tuple2 extends Array<any>> = [
    ...tuple1,
    ...tuple2
  ];

  type res1 = Concat<[1, 2, 3], [4]>;
  type test1 = Expect<Equal<res1, [1, 2, 3, 4]>>;

  type res2 = Concat<[1, 2, 3], []>;
  type test2 = Expect<Equal<res2, [1, 2, 3]>>;
}

namespace nine {
  type IsTuple<tuple> = tuple extends [] | [any, ...any[]] ? true : false;

  type res1 = IsTuple<[1, 2]>;
  type test1 = Expect<Equal<res1, true>>;

  type res2 = IsTuple<[2]>;
  type test2 = Expect<Equal<res2, true>>;

  type res3 = IsTuple<[]>;
  type test3 = Expect<Equal<res3, true>>;

  type res4 = IsTuple<any[]>;
  type test4 = Expect<Equal<res4, false>>;
}
