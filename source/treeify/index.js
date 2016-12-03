import {prop} from "ramda"
import {groupBy} from "ramda"
import {indexBy} from "ramda"
import {map} from "ramda"

const groupByNamespace = groupBy(prop("namespace"))
const groupByVersion = groupBy(prop("version"))
const groupedByVersion = map(groupByVersion)
const indexByIntent = indexBy(prop("intent"))
const indexedByIntent = map(map(indexByIntent))
const asRequest = map(map(map(prop("request"))))

export default function treeify (responses) {
  return asRequest(indexedByIntent(groupedByVersion(groupByNamespace(responses))))
}
