import ProdutoModel from "../models/produto.js";

async function findAll(req, res) {
  try{
    const produtos = await ProdutoModel.findAll();
    res.json(produtos);
  } catch(error) {
    res.status(500).json({ error: 'Erro ao buscar produtos.'});
  }
}

function findOne(req, res) {
  try{
    ProdutoModel.findByPk(req.params.id).then((result) => res.json(result));
  } catch(error) {
    res.status(500).json({ error: 'Erro ao buscar o pedido:'+req.params.id})
  }
}

function addProduto(req, res) {
  try{
    ProdutoModel.create({
    produto: req.body.produto,
    descricao: req.body.descricao,
    valor: req.body.valor,
    descricao_produto: req.body.descricao_produto,
    informacoes_tecnicas: req.body.informacoes_tecnicas,
    eh_promocao: req.body.eh_promocao,
    foto: req.body.foto,
    tipo: req.body.tipo
   })
} catch(error) {
  res.status(500).json({ error: 'Erro ao adicionar o produto.'});
}
}

async function updateProduto(req, res) {
  try{  
    await ProdutoModel.update(
      {
          nome: req.body.nome,
          tipo: req.body.tipo,
          valor: req.body.valor,
          descricao: req.body.descricao,
          quantidade: req.body.quantidade,
          foto: req.body.foto
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    ProdutoModel.findByPk(req.params.id).then((result) => res.json(result));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar o produto.' });
  }
}

async function deleteProduto(req, res) {
  try {  
    await ProdutoModel.destroy({
      where: {
        id: req.body.id,
      },
    });
    ProdutoModel.findAll().then((result) => res.json(result));
  } catch(error) {
    res.status(500).json({ error: 'Erro ao deletar o produto.' })
  }
}


export default { findAll, findOne, addProduto, updateProduto, deleteProduto };