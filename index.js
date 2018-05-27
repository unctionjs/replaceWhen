import always from "@unction/always";
import itself from "@unction/itself";
import mapValues from "@unction/mapvalues";
import ifThenElse from "@unction/ifthenelse";
export default function replaceWhen(predicate) {
  return function replaceWhenPredicate(replacement) {
    return mapValues(ifThenElse(predicate)(always(replacement))(itself));
  };
}
