type ComplexHomeType = {
  url: string,
  headers: {
    Accept: string,
    Authorization?: string,
  },
  responseType: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream',
}
