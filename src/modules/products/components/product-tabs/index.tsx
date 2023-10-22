import { Tab } from "@headlessui/react"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import FastDelivery from "@modules/common/icons/fast-delivery"
import clsx from "clsx"
import { ReactNode, useMemo } from "react"

type ProductTabsProps = {
  product: PricedProduct
}
const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = useMemo(() => {
    return [
      {
        label: "Product Information",
        component: <ProductInfoTab product={product} />,
      },
      {
        label: "Print-ready Image Delivery",
        component: <ShippingInfoTab />,
      },
    ]
  }, [product])

  return (
    <div>
      <Tab.Group>
        <Tab.List className="border-b border-gray-200 box-border grid grid-cols-2">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  clsx(
                    "text-left uppercase text-small-regular pb-2 -mb-px border-b border-gray-200 transition-color duration-150 ease-in-out",
                    {
                      "border-b border-gray-900": selected,
                    }
                  )
                }
              >
                {tab.label}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, j) => {
            return <div key={j}>{tab.component}</div>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  const metadata = useMemo(() => {
    if (!product.metadata) return []
    return Object.keys(product.metadata).map((key) => {
      return [key, product.metadata?.[key]]
    })
  }, [product])
  return (
      <Tab.Panel className="text-small-regular py-8">
        <div className="grid grid-cols-2 gap-x-8">
          <div className="flex flex-col gap-y-4">
            {metadata &&
              metadata.slice(0, 2).map(([key, value], i) => (
                <div key={i}>
                  <span className="font-semibold">{String(key)}</span>
                  <p>{value as ReactNode}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-y-4">
            {metadata.length > 2 &&
              metadata.slice(2, 4).map(([key, value], i) => {
                return (
                  <div key={i}>
                  <span className="font-semibold">{String(key)}</span>
                  <p>{value as ReactNode}</p>
                  </div>
                )
              })}
          </div>
        </div>
        {product.tags?.length ? (
          <div>
            <span className="font-semibold">Tags</span>
          </div>
        ) : null}
      </Tab.Panel>
    )
  }
  
  const ShippingInfoTab = () => {
    return (
      <Tab.Panel className="text-small-regular py-8">
        <div className="grid grid-cols-1 gap-y-8">
          <div className="flex items-start gap-x-2">
            <FastDelivery />
            <div>
              <span className="font-semibold">Instant delivery</span>
              <p className="max-w-sm">
                Your order will be delivered instantly via email. You can also
                download it from your account anytime.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-2">
          </div>
        </div>
      </Tab.Panel>
    )
  }

export default ProductTabs
