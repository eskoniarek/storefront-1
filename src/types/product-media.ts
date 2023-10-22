import { Product } from "@medusajs/medusa"
import { ProductVariant } from "@medusajs/product"

export enum ProductMediaVariantType {
  PREVIEW = "preview",
  MAIN = "main",
}

export type ProductMedia = {
  id: string
  name?: string
  file?: string
  mime_type?: string
  created_at?: Date
  updated_at?: Date
  attachment_type?: ProductMediaVariantType
  variant_id?: string
  variants?: ProductMediaVariant[]
}

export type ProductMediaVariant = {
  id: string
  variant_id: string
  product_media_id: string
  type: string
  created_at: Date
  updated_at: Date
}

export type DigitalProduct = Omit<Product, "variants"> & {
  product_medias?: ProductMedia[]
  variants?: DigitalProductVariant[]
}

export type DigitalProductVariant = ProductVariant & {
  product_medias?: ProductMedia
}