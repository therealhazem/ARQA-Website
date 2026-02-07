/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { getProducts } from "@/sanity/lib/getProducts"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const ITEMS_PER_PAGE = 12

const categories: Record<string, string[]> = {
    Gloves: ["Nitrile", "Vinyl", "Latex"],
    Masks: ["Medical Mask", "N95"],
    Tapes: [],
    Thermometers: [],
    Depressors: [],
}

export default function ProductsClient() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [products, setProducts] = useState<any[]>([])

    const search = searchParams.get("search") || ""
    const category = searchParams.get("category") || "All"
    const sub = searchParams.get("sub") || ""
    const page = Number(searchParams.get("page") || 1)

    const [searchInput, setSearchInput] = useState(search)

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    /* Filtering */
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                category === "All" || product.category === category

            const matchesSub =
                !sub ||
                product.name.toLowerCase().includes(sub.toLowerCase()) ||
                product.features?.some((f: string) =>
                    f.toLowerCase().includes(sub.toLowerCase())
                )

            const matchesSearch =
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.features?.some((f: string) =>
                    f.toLowerCase().includes(search.toLowerCase())
                )

            return matchesCategory && matchesSub && matchesSearch
        })
    }, [products, search, category, sub])

    /* Pagination */
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
    const paginatedProducts = filteredProducts.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    )

    /* URL update helper */
    const updateURL = (params: Record<string, string>) => {
        const newParams = new URLSearchParams(searchParams.toString())

        Object.entries(params).forEach(([key, value]) => {
            if (value) newParams.set(key, value)
            else newParams.delete(key)
        })

        newParams.set("page", "1")
        router.push(`/products?${newParams.toString()}`)
    }

    return (
        <>
            {/* Hero */}
            <div className="relative w-full h-[50vw] md:h-[20vw] overflow-hidden">
                <Image
                    src="/Media/im3.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                    width={10000}
                    height={10000}
                    alt="hero cover"
                />
                <div className="absolute inset-0 bg-dark-primary mix-blend-multiply" />
                <div className="absolute z-10 flex flex-col items-center justify-center p-5 md:p-14 h-full w-full gap-3">
                    <h1 className="section-title text-white">Our Products</h1>
                    <p className="header-subtitle text-white/90">
                        Comprehensive range of medical supplies trusted by healthcare professionals
                    </p>
                </div>
            </div>

            <div className="container mx-auto section-padding pt-0 flex flex-col gap-4">
                {/* Search */}
                <ButtonGroup className="w-full">
                    <Input
                        className="py-6"
                        placeholder="Search a product..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Button
                        className="py-6 bg-dark-primary hover:bg-myprimary"
                        onClick={() => updateURL({ search: searchInput })}
                    >
                        <SearchIcon /> Search
                    </Button>
                </ButtonGroup>

                <div className="flex flex-col md:flex-row gap-4">
                    {/* Categories */}
                    <div className="md:w-1/5 w-full">
                        <div className="sticky top-24 rounded-xl border p-4 bg-white space-y-4">
                            <button
                                onClick={() => updateURL({ category: "All", sub: "" })}
                                className={`w-full font-bold text-left px-3 py-2 rounded ${category === "All"
                                    ? "bg-myprimary text-white"
                                    : "hover:bg-myprimary/15"
                                    }`}
                            >
                                All Products
                            </button>

                            {Object.entries(categories).map(([parent, subs]) => (
                                <div key={parent} className="space-y-1">
                                    <button
                                        onClick={() => updateURL({ category: parent, sub: "" })}
                                        className={`w-full text-left px-3 py-2 font-semibold rounded ${category === parent
                                            ? "bg-myprimary text-white"
                                            : "hover:bg-myprimary/15"
                                            }`}
                                    >
                                        {parent}
                                    </button>

                                    {subs.length > 0 && (
                                        <div className="ml-4 space-y-1">
                                            {subs.map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() =>
                                                        updateURL({ category: parent, sub: s })
                                                    }
                                                    className={`block w-full text-left text-sm px-3 py-1 rounded ${sub === s
                                                        ? "bg-myprimary/30 text-primary font-medium"
                                                        : "text-gray-700 hover:bg-myprimary/15"
                                                        }`}
                                                >
                                                    • {s}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div className="w-full">
                        {paginatedProducts.length === 0 ? (
                            <p className="text-center text-gray-500">No products found</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {paginatedProducts.map((product) => (
                                    <ProductCard
                                        key={product._id}
                                        id={product._id}
                                        srcc={product.images?.[0]?.url || ""}
                                        namee={product.name}
                                        propp={product.features}
                                        typee={product.category}
                                    />
                                ))}
                            </div>
                        )}

                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-6">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <Button
                                        key={i}
                                        variant={page === i + 1 ? "default" : "outline"}
                                        onClick={() =>
                                            router.push(
                                                `/products?${new URLSearchParams({
                                                    ...Object.fromEntries(searchParams),
                                                    page: String(i + 1),
                                                })}`
                                            )
                                        }
                                    >
                                        {i + 1}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
