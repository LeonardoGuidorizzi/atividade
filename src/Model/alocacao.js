const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const alocacaoModel = {
  createalocacao: async (data) => {
    return prisma.alocacao.create({
      data,
    });
  },


getAllAlocacoes:async = () =>{
  return prisma.alocacao.findMany()
},

getAlocacaoById:async = (id) =>{
    return prisma.alocacao.findUnique({
     where: {
        id,
    },
    });

}

}

module.exports = {alocacaoModel}