const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const automoveisModel = {
    createautomovel: async(data) =>{
        return prisma.createAutomovel.create({
            data
        })
    },

      
  getAllAutomoveis:async  = () =>{
    return prisma.automoveis.findMany()
  },

  getAutomovelById: async = () =>{
      return prisma.automoveis.findUnique({
          where:{
              id
          }
      })
  },
  UpdateAutomoveis:async = (id, data) =>{
    return prisma.automoveis.update({
      where:{
        id,
      },
      data: {
        
      }
    })
  }
  
}

module.exports = {automoveisModel}