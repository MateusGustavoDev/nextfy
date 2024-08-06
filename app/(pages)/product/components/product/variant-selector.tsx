'use client'
import { ProductOptions, ProductVariants } from '@/lib/shopify/types'
import { cn, createUrl } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface VariantSelectorProps {
  options: ProductOptions
  variants: ProductVariants
}

export type Combination = {
  id: string
  availableForSale: boolean
  [key: string]: string | boolean
}

export function VariantSelector({ options, variants }: VariantSelectorProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const hasNoOptionsOrJustOneOption = !options?.length || (options.length === 1 && options[0].values.length === 1)

  if (hasNoOptionsOrJustOneOption || !variants) return null

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.node.id,
    availableForSale: variant.node.availableForSale,
    ...variant.node.selectedOptions.reduce(
      (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
      {},
    ),
  }))

  return (
    <div className="mt-10 flex flex-col gap-4">
      {options?.map((option) => {
        return (
          <div key={option.id}>
            <div className="flex flex-col gap-2">
              <span className="text-sm">{option.name.toLocaleUpperCase()}</span>
              <div className="flex gap-4">
                {option.values.map((value) => {
                  const optionNameLowerCase = option.name.toLocaleLowerCase()
                  const optionSearchParams = new URLSearchParams(searchParams.toString())
                  optionSearchParams.set(optionNameLowerCase, value)

                  const optionUrl = createUrl(pathname, optionSearchParams)

                  const filtered = Array.from(optionSearchParams.entries()).filter(([key, value]) =>
                    options.find((option) => option.name.toLowerCase() === key && option.values.includes(value)),
                  )

                  const isAvailableForSale = combinations.find((combination) =>
                    filtered.every(([key, value]) => combination[key] === value && combination.availableForSale),
                  )

                  const isActive = searchParams.get(optionNameLowerCase) === value

                  return (
                    <button
                      key={value}
                      aria-disabled={!isAvailableForSale}
                      disabled={!isAvailableForSale}
                      data-active={isActive}
                      onClick={() => {
                        router.replace(optionUrl, { scroll: false })
                      }}
                      className={cn('w-max border border-black px-2 py-1 text-sm', {
                        'cursor-default bg-black text-white': isActive,
                        'hover:bg-neutral-200': !isActive && isAvailableForSale,
                        'border-neutral-400 bg-neutral-200 text-neutral-400': !isAvailableForSale,
                      })}
                    >
                      {value}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
