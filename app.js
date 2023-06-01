const cors = require('cors')
const express = require('express')

const { ClientesModel } = require('./src/Model/clientes')
const {alocacaoModel} = require('./src/Model/alocacao')
const {automoveisModel} = require('./src/Model/automoveis')
const {ConcessionariasModel}  = require ('./src/Model/concessionaria')
const app = express()

app.use(express.json());

app.post('/alocacaoInfo', async (req, res) => {
  try {
    const alocacao = await alocacaoModel.createalocacao(req.body);
    res.status(201).json(alocacao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create an alocation' });
  }
});


app.get('/allAlocacoes', cors(), async (req, res) => {
    try {
        const alocacao = await alocacaoModel.getAllAlocacoes();
        res.json(alocacao);
      } catch (error) {
        res.status(404).json({ error: 'Failed to get alocacions' });
      }
})

  app.get('/AlocacaoById', cors(), async (req, res) =>{
 
    try {
      const alocacao = await alocacaoModel.getAlocacaoById(req.param.id)
      if (alocacao) {
        res.json(alocacao)
      } else {
        res.status(404).json({ error: 'Failed to find the client by Id' });
        
      }
    } catch (error) {
      res.status(500).json({error:"Failed to get client"})
   }
       
  
})



app.get('/allclientes', cors(), async (req, res) =>{
  try {
    const clientes = await ClientesModel.getAllClientes()
    res.json(clientes)
  } catch (error) {
    res.status(500).json({error:"Failed to get clients"})
  }
})

app.get('clientesById', cors(), async (req, res) =>{
 
  try {
    const clientes = await ClientesModel.getClientesById(req.param.id)
    if (clientes) {
      res.json(clientes)
    } else {
      res.status(404).json({ error: 'Failed to find the client by Id' });
      
    }
  } catch (error) {
    res.status(500).json({error:"Failed to get client"})
  }

})

app.delete('/cliente/:id', cors(), async (req, res)=>{
  try {
    await ClientesModel.deleteCliente(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Client' });
  }
});

app.get('/Allautomoveis', cors(), async (req, res)=>{
  try {
    const automoveis = await automoveisModel.getAllAutomoveis()
    res.json(automoveis)
  } catch (error) {
    res.status(500).json({error:"Failed to get cars"})
  }
})

app.get('/Allconcessionarias', cors(), async (req, res)=>{
  try {
    const concessionarias = await ConcessionariasModel.getAllConcessionaria()
    res.json(concessionarias)
  } catch (error) {
    res.status(500).json({error:"Failed to get concessionairie"})
  }
})




  app.listen(8080, () => {
    console.log('Server started on port 8080');
  });