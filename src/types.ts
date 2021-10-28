export interface Asset {
  id: string
  logoSrc: string
  name: string
  ticker: string
}

export interface OwnedAsset extends Asset {
  price: number
  gain24Hr: number
  holdings: number
}
