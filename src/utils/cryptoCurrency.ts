import { CMC_LOGO_URL } from '../constants'

export const getCMCLogoUrl = (id: number): string => `${CMC_LOGO_URL}/${id}.png`
