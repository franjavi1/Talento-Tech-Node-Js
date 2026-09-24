

export async function getProducts() {
    try {
        console.log("Consultando productos");
        const response = await fetch(`https://fakestoreapi.com/products`);
        const products = await response.json();
        console.log(products)

    } catch (error) {
        console.log("Error: ", error);
    } finally {
        console.log("Fin de la tarea")
    }
}

export async function getProduct(id) {
    try {
        console.log(`Consultando producto ${id}`)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const products = await response.json();
        console.log(products);
    } catch (error) {
        console.log("Error: ", error)
    } finally {
        console.log("Fin de la consulta")
    }
}

export async function postProduct(title, price, category){
    try{
        console.log("Creando el producto...")
        const cart ={
            title: title,
            price: Number(price),
            category: category
        }
        const response = await fetch (`https://fakestoreapi.com/products`,{
            method : "POST",
            headers :{
                "Content-Type" :"application/json"
            },
            body:JSON.stringify(cart)
      

        });
          const product = await response.json();
          console.log(product);

    }catch(error){
        console.log("Error: ",error);
    }finally{
        console.log("Fin de la consulta");
    }


}

export async function deleteProduct(id){
    try{
        console.log(`Eliminando producto...`)
        const response = await fetch (`https://fakestoreapi.com/products/${id}`,{
            method: "DELETE"
        }
    );
        const product = await response.json();
    }catch(error){
        console.log("Error: ",error);
    }finally{
        
        console.log("Fin de la consulta");
    }




}
