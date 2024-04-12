const express = require('express')
const mysql = require('mysql2')
const mysql_config = require('./mysql_config')
const app = express();

app.listen(3000, () => {


    console.log('Servidor em execução')
})

const connection = mysql.createConnection(mysql_config)


app.get('/', (req, res) =>{


    let result = {

        status: 'sucesso',
        message: null,
        data:null
    }
    connection.query('SELECT * FROM tasks', (err, results, fields)=>{

        if(err){
            
            result.status = 'erro'
            result.message = 'Erro na obtenção das tarefas';
            result.data = []

            //res.send(result);
            res.json(result)

        }
        else{
            result.status = 'sucesso'
            result.message = 'Sucesso na obtenção das tarefas';
            result.data = results;

            //res.send(result);
      
        


        }
    })
})