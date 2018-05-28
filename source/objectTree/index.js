import mapValues from "@unction/mapvalues"
import objectFrom from "@unction/objectfrom"
import keyChainTree from "@unction/keychaintree"
import dig from "@unction/dig"
import mergeAllRight from "@unction/mergeallright"

export default function objectTree (mapping: Map): Object {
  return mergeAllRight(
    mapValues(
      (keychain) => objectFrom(keychain)(dig(keychain)(mapping))
    )(
      keyChainTree(mapping)
    )
  )
}
