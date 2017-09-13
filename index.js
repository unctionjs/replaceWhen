import always from "@unction/always"
import itself from "@unction/itself"
import mapValues from "@unction/mapvalues"
import ifThenElse from "@unction/ifthenelse"

export default function replaceWhen (predicate: PredicateFunctionType): Function {
  return function replaceWhenPredicate (replacement: mixed): Function {
    return mapValues(ifThenElse(predicate)(always(replacement))(itself))
  }
}
