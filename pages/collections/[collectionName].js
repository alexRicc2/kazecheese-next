import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import ProductList from '../../components/ProductsList'
import { parseShopifyResponse, shopifyClient } from '../../lib/shopify'

const CollectionPage = ({products, collectionName})=>{
  return (
    <div>
      <Header/>
      <h1>{collectionName}</h1>
      <ProductList products={products}/>
    </div>
  )
  
}

export const getServerSideProps = async ({params}) => {
  const { collectionName } = params
  const collectionsData = await shopifyClient.collection.fetchAllWithProducts()
  const collections = parseShopifyResponse(collectionsData)
  const collection = collections.find(collection => collection.handle === collectionName)

  return {
    props: {
      collectionName,
      products: collection.products,
    }
  }
}

export default CollectionPage