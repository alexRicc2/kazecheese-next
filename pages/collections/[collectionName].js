import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import ProductList from '../../components/ProductsList'

const CollectionPage = ()=>{
  const router = useRouter()
  const { CollectionName } = router.query
  
}

export default CollectionPage