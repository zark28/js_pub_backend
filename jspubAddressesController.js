const connection =require('./dbConnect')

// app.get("/addresses",)

const getAll=(request,response)=>{
    connection.query("SELECT * FROM addresses",(error,result)=>{
        if(error){
            console.log(error);
        }
        response.send(result)
    });
}

// app.get("/addresses/:ID",)

const getOne=(request,response)=>{
    // const ID = request.params.ID
    
    const {ID} = request.params
    connection.query(`SELECT * FROM addresses WHERE address_id ="${ID}"`,
    (error,result)=>{
        if(error){console.log(error)}
        response.send(result)
    }
    )
}

// app.post("/addresses",)

const insertOne=(request,response)=>{
    const {entity_id,digital_address,postal_address }= request.body
    connection.query(`INSERT INTO addresses VALUES ("","${entity_id}","${digital_address}","${postal_address}") `,
    (error,result)=>{
        if(error){console.log(error)}
        response.send(result)
    }
    )
}

// app.put("/addresses/:ID",)

const update=(request,response)=>{   
    const ID =request.params.ID
    const {entity_id,digital_address,postal_address }=request.body
    connection.query(
        `UPDATE addresses 
        SET entity_id = "${entity_id}",digital_address="${digital_address}",postal_address="${postal_address}" 
        WHERE address_id = "${ID}"`,
    (error,result)=>{
        if(error){console.log(error)}
        response.send(result)
    }
    )
}

// app.delete("/addresses/:ID",)
const remove= (request,response)=>{
    
    const {ID} = request.params
    connection.query(
        `delete from addresses 
        WHERE address_id = "${ID}"`,
    (error,result)=>{
        if(error){console.log(error)}
        response.send(result)
    }
    )
}

module.exports={
    getAll,
    getOne,
    insertOne,
    update,
    remove
}