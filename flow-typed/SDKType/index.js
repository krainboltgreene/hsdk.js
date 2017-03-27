type SDKType = {
  [namespace: string]: {
    [version: string]: {
      [intent: string]: (configuration?: RequestConfigurationType) => Promise<any>
    }
  }
}
