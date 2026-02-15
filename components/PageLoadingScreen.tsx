import Image from "next/image"

/**
 * Global loading screen: small ARQA logo with fade in/out.
 * Used by app/loading.tsx and every route segment’s loading.tsx
 * so the same screen appears on every page visit/navigation.
 */
export default function PageLoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <Image
        src="/ARQA Logo.svg"
        alt="ARQA Medical"
        width={120}
        height={40}
        className="loading-logo-pulse h-auto w-28 object-contain sm:w-32"
        priority
      />
    </div>
  )
}
