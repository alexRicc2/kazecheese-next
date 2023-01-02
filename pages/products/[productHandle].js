import React from "react";
import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";

const Product = ({ product }) => {
  const { id, title, images, variants } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];

  return (
    <div>
      <img
        src={`${productImage}?w=250&auto=format`}
        srcSet={`${productImage}?w=250&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
      <p>{price.amount}</p>
      <p>{title}</p>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { productHandle } = params;
  const product = await shopifyClient.product.fetchByHandle(productHandle);

  return {
    props: {
      product: parseShopifyResponse(product),
    },
  };
};

export default Product;
