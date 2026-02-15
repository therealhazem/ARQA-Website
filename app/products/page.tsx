import { Suspense } from "react"
import ProductsClient from "./ProductsClient"

/** Ensures product list from Sanity is always fresh when user visits or refreshes. */
export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading products…</div>}>
            <ProductsClient />
        </Suspense>
    )
}
