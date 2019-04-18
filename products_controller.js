module.exports = {
create(req,res){
  const db = req.app.get('db');
  const {name, description, price, image_url} = req.body;
  db.create_product([name, description, price, image_url]).then(result=>{
    res.status(200).send(result)
  }).catch(err=>{
    console.log(`error ${err}`)
  })

},

getOne(req,res){
  const db = req. app.get('db');
  const {id}  = req.params;
  db.read_product([id]).then(product=>{
    res.status(200).send(product)
  }).catch(err=>{
    console.log(`error ${err}`)
  })
},

getAll(req,res){
  const db = req. app.get('db');
  db.read_products().then(products=>{
    res.status(200).send(products)
  }).catch(err=>{
    console.log(`error ${err}`)
  })
},

update(req,res){
  const db = req. app.get('db');
  const {id} = req.params
  const {desc} = req.query;
  db.update_product([id, desc]).then(result=>{
    res.status(200).send(result)
  }).catch(err=>{
    console.log(`error ${err}`)
  })

},

delete(req,res){
  const db = req. app.get('db');
  const {id} = req.params
  db.delete_product([id]).then(result=>{
    res.status(200).send(result)
  }).catch(err=>{
    console.log(`error ${err}`)
  })
}


}