export class InitialData {
    load() {
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
            console.log('No Product Found... Creating...');
            let products = [
                { Id : 1, Name :"Product 1", Description : "Descrip" , Price: 50 , Image : ""}, 
                { Id : 2, Name :"Product 2", Description : "Descrip 2" , Price: 100 , Image : ""}, 
                { Id : 3, Name :"Product 3", Description : "Descrip 3" , Price: 170 , Image : ""}
            ];
            localStorage.setItem('ProductList', JSON.stringify(products));
            return 
          } else {
            console.log('Found Product List...');
          }
        }
}
 