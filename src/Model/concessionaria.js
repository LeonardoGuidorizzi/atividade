const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const ConcessionariaModel = {
    createUser: async (data) => {
      return prisma.concessionarias.create({
        data,
      });
    },
  
  
  getAllConcessionaria:async  = () =>{
    return prisma.concessionarias.findMany()
  },

}

module.exports = {ConcessionariaModel}