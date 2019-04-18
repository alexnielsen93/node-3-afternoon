module.exports = {
create(req,res){
  const db = req.app.get('db');
  db.create_product().then(result=>{
    res.status(200).send(result)
  }).catch(err=>{
    console.log(`error ${err}`)
  })

},

getOne(req,res){
  const db = req. app.get('db');
  db.read_product().then(result=>{
    res.status(200).send(result)
  }).catch(err=>{
    console.log(`error ${err}`)
  })
},

getAll(req,res){
  const db = req. app.get('db');
  db.read_products().then(result=>{
    res.status(200).send(result)
  }).catch(err=>{
    console.log(`error ${err}`)
  })
},

update(req,res){
  const db = req. app.get('db');
  db.update_product().then(result=>{
    res.status(200).send(result)
  }).catch(err=>{
    console.log(`error ${err}`)
  })

},

delete(req,res){
  const db = req. app.get('db');
  db.delete_product().then(result=>{
    res.status(200).send(result)
  }).catch(err=>{
    console.log(`error ${err}`)
  })
}


}