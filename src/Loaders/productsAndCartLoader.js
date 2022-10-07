import { getDataFromLocalStr } from "../utilities/fakedb";

export const productsAndCartLoader= async ()=>{
    const productData= await fetch('products.json');
    const products = await productData.json();

  const  getCart=getDataFromLocalStr()
  let priviousProducts=[]
  for(const id in getCart){
    const addedProduct=products.find(product=>product.id===id)
    if(addedProduct){
        const quantity =getCart[id]
        addedProduct.quantity = quantity
       priviousProducts.push(addedProduct);
    }
  }

  return {products,priviousProducts}

}