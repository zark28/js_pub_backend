const connection =require('./dbConnect')

// app.get("/branches",)

const getAll=(request,response)=>{
    connection.query("SELECT * FROM branches",(error,result)=>{
        if(error){
            console.log(error);
        }
        response.send(result)
    });
}

// app.get("/branches/:ID",)

const getOne=(request,response)=>{
    // const ID = request.params.ID
    
    const {ID} = request.params
    connection.query(`SELECT * FROM branches WHERE branches.branch_id ="${ID}"`,
    (error,result)=>{
        if(error){console.log(error)}
        response.send(result)
    }
    )
}

// app.post("/branches",)

const insertOne=(request,response)=>{
    const {branch_id,branch_name }= request.body
    connection.query(`INSERT INTO branches VALUES ("${branch_id}", "${branch_name}") `,
    (error,result)=>{
        if(error){console.log(error)}
        response.send(result)
    }
    )
}

// app.put("/branches/:ID",)

const update=(request,response)=>{   
    const ID =request.params.ID
    const {branch_name}=request.body
    connection.query(
        `UPDATE branches 
        SET branch_name = "${branch_name}" 
        WHERE branch_id = "${ID}"`,
    (error,result)=>{
        if(error){console.log(error)}
        response.send(result)
    }
    )
}


// app.delete("/branches/:ID",)
const remove= (request,response)=>{
    
    const {ID} = request.params
    connection.query(
        `delete from branches 
        WHERE branch_id = "${ID}"`,
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