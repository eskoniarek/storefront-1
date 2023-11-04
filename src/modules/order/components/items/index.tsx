import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items";
import { LineItem, Region } from "@medusajs/medusa";
import LineItemOptions from "@modules/common/components/line-item-options";
import LineItemPrice from "@modules/common/components/line-item-price";
import Thumbnail from "@modules/products/components/thumbnail";
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item";
import Link from "next/link";
import Button from "@modules/common/components/button";

type ItemsProps = {
  items: LineItem[];
  region: Region;
  cartId: string;
};

const Items = ({ items, region, cartId }: ItemsProps) => {
  const enrichedItems = useEnrichedLineItems(items, cartId);

  const handleDownload = async (variantId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/download/main/${variantId}`);
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `download-${variantId}`; // You may want to give a more meaningful file name
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div className="p-10 border-b border-gray-200 gap-y-4 flex flex-col">
      {enrichedItems?.length ? (
        enrichedItems.map((item) => (
          <div className="grid grid-cols-[122px_1fr] gap-x-4" key={item.id}>
            <div className="w-[122px]">
              <Thumbnail thumbnail={item.thumbnail} size="full" />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col flex-1 text-small-regular">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4">
                      <Link href={`/products/${item.variant.product.handle}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <LineItemOptions variant={item.variant} />
                    <span>Quantity: {item.quantity}</span>
                  </div>
                  <div className="flex justify-end">
                    <LineItemPrice region={region} item={item} />
                    <Button variant="secondary" onClick={() => handleDownload(item.variant.id)}>
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        Array.from(Array(items.length).keys()).map((i) => (
          <SkeletonLineItem key={i} />
        ))
      )}
    </div>
  );
};

export default Items;
