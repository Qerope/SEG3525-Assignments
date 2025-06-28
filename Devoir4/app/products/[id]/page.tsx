import ProductDetailPageClient from "./ProductDetailPageClient"

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }]
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetailPageClient params={params} />
}
