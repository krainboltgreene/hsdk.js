type SDKType = {
  [resource: string]: {
    [version: string]: {
      [intent: string]: (payload?: any) => Promise<any>
    }
  }
}
