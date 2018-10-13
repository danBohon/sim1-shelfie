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
        // res.status(200).send( "Create Inventory Worked");

        const dbInstance = req.app.get( 'db' );
        console.log('req.body', req.body);
        
        const {name, price, image} = req.body;

        dbInstance.create_product( [name, price, image] ).then( ( product ) => res.status(200).json( product )).catch( error => {
            res.status(500).json({errorMessage: "Something went wrong in CREATE_PRODUCT"});
            // console.log("ERROR------->", error);
        })
    }
}