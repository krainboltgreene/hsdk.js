export type BasicAuthenticationType = {
  shared: string,
  secret: string,
  scheme: "basic",
}
export type BearerAuthenticationType = {
  secret: string,
  scheme: "bearer",
}
export type AuthenticationType = BasicAuthenticationType | BearerAuthenticationType
export type AuthorizationHeaderType = {
  scheme: string,
  Authorization: string,
}
export type GenericRequestType = {
  url: string,
  headers: {[key: string]: mixed},
}
export type ComplexHomeType = {
  ...GenericRequestType,
  headers: {
    Accept: string,
    Authorization?: string,
  },
}
export type HomeType = string | ComplexHomeType
export type HTTPClientType = (GenericRequestType) => AxoisResponseType
export type JSONAPIDataType = JSONAPIResourceType | Array<JSONAPIResourceType>
export type JSONAPIIncludedType = Array<JSONAPIResourceType>
export type JSONAPILinksType = {
  [name: string]: string | JSONAPILinkType
}
export type JSONAPILinkType = {
  href: string | Array<string>,
  meta?: Object
}
export type JSONAPIRelationType = {
  id: string,
  type: string,
  links?: JSONAPILinksType,
}
export type JSONAPIRelationshipsType = {
  [relationship: string]: JSONAPIRelationType
}
export type JSONAPIResourceType = {
  id?: string,
  type: string,
  attributes: ResourceFieldsType,
  relationships?: JSONAPIRelationshipsType,
  links?: JSONAPILinksType,
}
export type JSONAPIRootType = {
  data: JSONAPIDataType,
  meta?: Object,
  included?: JSONAPIIncludedType,
}
export type ReceiveType = (AxoisResponseType) => JSONAPIRootType
export type RequestConfigurationType = {
  payload?: Object,
  authentication?: AuthenticationType,
}
export type RequestMetadataType = {
  method: string,
  href: string,
  mediatype: string
}
export type ResourceFieldsType = {
  intent: string,
  version: string,
  namespace: string,
  verb: string,
  href: string,
  mediatype: string,
}
export type ResourceModelType = {
  id: string,
  intent: string,
  version: string,
  namespace: string,
  verb: string,
  href: string,
  mediatype: string,
  request: Function,
}
export type ResourceType = {
  id: string,
  type: "resources",
  attributes: ResourceFieldsType,
}
export type AxoisResponseType = {
  data?: Object,
}
export type SDKType = {
  [namespace: string]: {
    [version: string]: {
      [intent: string]: (configuration?: RequestConfigurationType) => Promise<mixed>
    }
  }
}
type UnaryFunctionType<I: mixed, O: mixed> = (I) => O
