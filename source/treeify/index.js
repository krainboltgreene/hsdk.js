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

type ResourceModelType = {
  id: string,
  intent: string,
  version: string,
  namespace: string,
  verb: string,
  href: string,
  mediatype: string,
  request: Function,
}

export default function treeify (responses: Array<ResourceModelType>): Object {
  return asRequest(indexedByIntent(groupedByVersion(groupByNamespace(responses))))
}
