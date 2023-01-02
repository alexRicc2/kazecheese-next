import React from "react";
import { useRouter } from "next/router";
const ProductList = ({ products }) => {
  const router = useRouter();
  // Navigate to product's page
  const goToProductPage = (productHandle) =>
    router.push(`/products/${productHandle}`);

  return (
    <section>
      {products.map((product) => {
        const { id, title, images, variants, handle } = product;
        const { src: productImage } = images[0];
        const { price } = variants[0];
        return (
          <div key={id} onClick={() => goToProductPage(handle)}>
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
      })}
    </section>
  );
};
export default ProductList;
