import { getCategoryByHandle } from "@lib/data"
import CategoryTemplate from "@modules/categories/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { category: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product_categories } = await getCategoryByHandle(
    params.category
  ).catch((err) => {
    notFound()
  })

  const category = product_categories[0]

  return {
    title: `Print Inc. Shop`, // Removed category name from title
    // Removed category description
  }
}

export default async function CategoryPage({ params }: Props) {
  const { product_categories } = await getCategoryByHandle(
    params.category
  ).catch((err) => {
    notFound()
  })

  return <CategoryTemplate categories={product_categories} />
}
