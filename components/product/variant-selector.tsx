'use client'
import { ProductOptionType, ProductVariantType } from '@/lib/shopify/fetch/types'
import { cn, createUrl } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface VariantSelectorProps {
  options: ProductOptionType[]
  variants: ProductVariantType[]
}

export type Combination = {
  id: string
  availableForSale: boolean
  [key: string]: string | boolean
}

export function VariantSelector({ options, variants }: VariantSelectorProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const hasNoOptionsOrJustOneOption = !options?.length || (options.length === 1 && options[0].values.length === 1)

  if (hasNoOptionsOrJustOneOption) return null

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
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
              <ul className="flex gap-4">
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
                    <li key={value}>
                      <Link
                        href={optionUrl}
                        aria-disabled={!isAvailableForSale}
                        data-active={isActive}
                        className={cn('w-max border border-black px-2 py-1 text-sm', {
                          'cursor-default bg-black text-white': isActive,
                          'hover:bg-neutral-200': !isActive && isAvailableForSale,
                          'pointer-events-none border-neutral-400 bg-neutral-200 text-neutral-400': !isAvailableForSale,
                        })}
                      >
                        {value}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
