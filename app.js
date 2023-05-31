
app.get('alocacao/allAlocaçoes', async (req, res) =>{
    const posts = await prisma.post.findMany({
        return 
    })
})
