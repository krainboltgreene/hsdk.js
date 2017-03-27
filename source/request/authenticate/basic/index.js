export default function basic (authentication: BasicAuthenticationType): AuthorizationHeaderType {
  const {shared} = authentication
  const {secret} = authentication

  return {Authorization: `Basic ${window.btoa(`${shared}:${secret}`)}`}
}
