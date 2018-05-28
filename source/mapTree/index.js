import dig from "@unction/dig"
import treeify from "@unction/treeify"
import groupBy from "@unction/groupby"
import indexBy from "@unction/indexby"
import get from "@unction/get"

export default treeify([
  groupBy(dig(["attributes", "namespace"])),
  groupBy(dig(["attributes", "version"])),
  indexBy(dig(["attributes", "intent"])),
  get("request"),
])
