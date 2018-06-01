import mapValues from "@unction/mapvalues"
import objectFrom from "@unction/objectfrom"
import keyChainTree from "@unction/keychaintree"
import reduceValues from "@unction/reducevalues"
import mergeDeepRight from "@unction/mergedeepright"
import dig from "@unction/dig"
import treeify from "@unction/treeify"
import groupBy from "@unction/groupby"
import indexBy from "@unction/indexby"
import get from "@unction/get"

export default function clientTree (resources): Object {
  const tree = treeify([
    groupBy(dig(["attributes", "namespace"])),
    groupBy(dig(["attributes", "version"])),
    indexBy(dig(["attributes", "intent"])),
    get("request"),
  ])(
    resources
  )

  return reduceValues(
    mergeDeepRight
  )(
    {}
  )(
    mapValues(
      (keychain: Array<mixed>): Object => objectFrom(keychain)(dig(keychain)(tree))
    )(
      keyChainTree(tree)
    )
  )
}
