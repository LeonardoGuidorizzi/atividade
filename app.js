const cors = require('cors')

const alocacoesModel = require('./src/Model/alocacao');
const app = express()

app.use(express.json());


app.get('/allAlocacoes', cors(), async (req, res) => {
    try {
        const alocacao = await alocacoesModel.getAllAlocacoes();
        res.json(alocacao);
      } catch (error) {
        res.status(500).json({ error: 'Failed to get users' });
      }
  })


  app.listen(8080, () => {
    console.log('Server started on port 8080');
  });