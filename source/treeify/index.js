import {prop} from "ramda"
import {groupBy} from "ramda"
import {indexBy} from "ramda"
import {map} from "ramda"

const groupByNamespace = groupBy(prop("namespace"))
const groupByVersion = groupBy(prop("version"))
const groupedByVersion = map(groupByVersion)
const indexByIntent = indexBy(prop("intent"))
const indexedByIntent = map(map(indexByIntent))
const asRequest = map(prop("request"))
const asRequests = map(map(map(asRequest)))

export default function treeify (responses) {
  return asRequests(indexedByIntent(groupedByVersion(groupByNamespace(responses))))
}
