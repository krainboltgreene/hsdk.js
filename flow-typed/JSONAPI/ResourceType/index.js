type JSONAPIRResourceType = {
  id?: string,
  type: string,
  attributes: ResourceFieldsType,
  relationships?: JSONAPIRelationshipsType,
  links?: JSONAPILinksType,
}
