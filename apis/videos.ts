export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface Thmnnail {
  url: string
  width: number
  height: number
}

export interface Item {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thmnnails: {
      default: Thmnnail
      medium: Thmnnail
      high: Thmnnail
      standard: Thmnnail
      maxres: Thmnnail
    }
    channelTitle: string
    tags: string[]
    categoryId: number
    liveBroadcastContent: string
    localized: {
      title: string
      description: string
    }
    defaultAudioLanguage: string
  }
}

export interface Data {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: Item[]
}

export interface Methods {
  get: {
    query: {
      id: string
      key: string
      part: string
    }
    resData: Data
  }
}
