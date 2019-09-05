import always from "@unction/always";
import itself from "@unction/itself";
import mapValues from "@unction/mapvalues";
import ifThenElse from "@unction/ifthenelse";

import {PredicateFunctionType} from "./types";

export default function replaceWhen<A, B> (predicate: PredicateFunctionType<A>) {
  return function replaceWhenPredicate (replacement: B): Function {
    return mapValues(ifThenElse(predicate)(always(replacement))(itself));
  };
}
