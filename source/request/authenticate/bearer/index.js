export default function basic (authentication: BearerAuthenticationType): AuthorizationHeaderType {
  const {secret} = authentication

  return {Authorization: `Bearer ${secret}`}
}
