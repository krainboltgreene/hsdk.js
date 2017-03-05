type AuthenticationType = {
  shared: string,
  secret: string,
}
type AuthorizationHeaderType = {
  Authorization: string,
}

export default function identify (authentication: AuthenticationType): AuthorizationHeaderType {
  const {shared} = authentication
  const {secret} = authentication

  return {Authorization: `Basic ${window.btoa(`${shared}:${secret}`)}`}
}
