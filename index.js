import {
     getProducts,
     getProduct,
     postProduct,
     deleteProduct
}from "./funciones.js"

const args = process.argv.slice(2)

console.log(args);
const [method, resource, title, price, category] = args

console.log("method:", method);
console.log("resource:", resource);
const [resourceName,id] =resource.split("/");

if (method === "GET" && resourceName === "products" && id) {
    getProduct(id);
} else if (method === "GET" && resourceName === "products"){
    getProducts();
}else if(method==="POST" && resourceName==="products"){
    postProduct(title,price,category)
}else if(method==="DELETE" && resourceName==="products" && id){
    deleteProduct(id);
}