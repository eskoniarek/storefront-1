import { Address, ShippingMethod } from "@medusajs/medusa"

type ShippingDetailsProps = {
  address: Address
  shippingMethods: ShippingMethod[]
  email: string
}

const ShippingDetails = ({
  address,
  shippingMethods,
  email,
}: ShippingDetailsProps) => {
  return (
    <div className="text-base-regular">
      <h2 className="text-base-semi">Delivery</h2>
      <div className="my-2">
        <h3 className="text-small-regular text-gray-700">Details</h3>
        <div className="flex flex-col">
          <span>{`${address.first_name} ${address.last_name}`}</span>
          <span>{email}</span>
        </div>
      </div>
      <div className="my-2">
        <h3 className="text-small-regular text-gray-700">Delivery method</h3>
        <div>
          {shippingMethods.map((sm) => {
            return <div key={sm.id}>{sm.shipping_option.name}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails