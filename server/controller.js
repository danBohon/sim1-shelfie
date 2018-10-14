module.exports = {
    getInventory: (req, res) => {
        // res.status(200).send( "Get Iventory Worked" );
        
        const dbInstance = req.app.get( 'db' );

        dbInstance.get_inventory().then( products => res.status(200).send( products ) ).catch( error => {
            res.status(500).send({errorMessage: "Something went wrong in GET_INVENTORY"});
            // console.log("ERROR------->", error);
            
        })
    },

    createProduct: (req, res) => {
        // res.status(200).send( "Create Product Worked");

        const dbInstance = req.app.get( 'db' );
        // console.log('req.body', req.body);
        
        // const {name, price, image} = req.body;
        const name = req.body.product.productNameInput
        const price = req.body.product.priceInput
        const image = req.body.product.imgInput
       
        dbInstance.create_product( [name, price, image] ).then( ( product ) => res.status(200).json( product )).catch( error => {
            res.status(500).json({errorMessage: "Something went wrong in CREATE_PRODUCT"});
            // console.log("ERROR------->", error);
        })
    },

    deleteProduct: (req, res) => {
        // res.status(200).send( "Delete Product Worked" );
        
        const dbInstance = req.app.get( 'db' );
        const { id }= req.params;

        dbInstance.delete_product( [id] ).then( (product) => res.status(200).json( product )).catch(error => {
            res.status(500).json({errorMessage: "Something went wrong in DELETE_PRODUCT"});
            // console.log("ERROR--------->", error);  
        })
    },

    updateProduct: (req, res) => {
        // res.status(200).send( "Edit product worked" );

        const dbInstance = req.app.get('db');
        // console.log("req.body.product", req.body.product);

        const id = req.body.product.currentProductId
        const name = req.body.product.productNameInput
        const price = req.body.product.priceInput
        const image = req.body.product.imgInput

        console.log(id, name, price, image);
        

        dbInstance.update_product([id, name, price, image]).then( () => res.status(200).json()).catch( error => {
            res.status(500).json({errorMessage: "Something went wrong in UPDATE_PRODUCT"});
            // console.log("ERROR--------->", error);
        })
        
    }
}








// update: (req, res, next ) => {
//     const dbInstance = req.app.get('db');
//     const {params, query} = req;

//     dbInstance.update_product([ params.id, query.desc ])
//     .then( () => res.statusSend(200) )
//     .catch( err => {
//         res.status(500).send({errorMessage: "Something went wrong in update"});
//         // console.log(err)
//     });