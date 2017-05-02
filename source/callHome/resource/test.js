/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import resource from "./"

test(({similar, end}) => {
  similar(
    resource(
      {
        id: "show-v1-accounts",
        type: "resources",
        attributes: {
          intent: "show",
          method: "GET",
          version: "v1",
          namespace: "accounts",
          description: "test",
          href: "https://api.example.com/v1/accounts",
          allowed: [],
          mediatype: "application/vnd.api+json"
        }
      }
    ),
    {
      id: "show-v1-accounts",
      type: "resources",
      attributes: {
        intent: "show",
        method: "GET",
        version: "v1",
        namespace: "accounts",
        description: "test",
        href: "https://api.example.com/v1/accounts",
        allowed: [],
        mediatype: "application/vnd.api+json"
      }
    }
  )
  end()
})
