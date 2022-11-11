import m3 from "./images/m3.png";
import m4 from "./images/m4.png";
const productArray = [
    {
      id:"1",
      title: "M4",
      price: 99999.99 ,
      image: m4
    },
    {
        id:"2",
        title: "M3",
        price: 129999.99,  
        image: m3
      },
      {
        id:"3",
        title: "M4 Base",
        price: 59999.99  ,
        image: m4
      }
];

function getProductData(id) {
    let productData = productArray.find(product => product.id === id)

    if (productData == undefined){
        console.log("Product data does not exisit for ID: "+ id);
        return undefined;
    }
    return productData;
}


export { productArray, getProductData };