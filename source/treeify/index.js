import {prop} from "ramda"
import {groupBy} from "ramda"
import {indexBy} from "ramda"
import {map} from "ramda"

const groupByNamespace = groupBy(prop("namespace"))
const indexByIntent = indexBy(prop("intent"))
const mapToRequest = map(prop("request"))
const mapToIntentIndex = map(indexByIntent)
const nestedMapToRequest = map(mapToRequest)

export default function treeify (responses) {
  return nestedMapToRequest(mapToIntentIndex(groupByNamespace(responses)))
}
