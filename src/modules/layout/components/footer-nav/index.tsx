"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/" className="text-xl-semi uppercase">
            Print Inc.
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Contact</span>
              <ul className="grid grid-cols-1 gap-2">
              <li>
     <a
       href="mailto:support@printinc.shop"
       target="_blank"
       rel="noreferrer"
     >
       Support
     </a>
   </li>

              </ul>
            </div>
          {collections && (
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Collections</span>
              <ul
                className={clsx("grid grid-cols-1 gap-2", {
                  "grid-cols-2": (collections?.length || 0) > 3,
                })}
              >
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Legals</span>
            <ul className="grid grid-cols-1 gap-y-2">
            <li>
                <Link href={'/tc'}>Terms and Conditions</Link>
              </li>
              <li>
              <Link href={'/pp'}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={'/cc'}>Cookies Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2023 Print Inc.
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
