const express = require('express')
const router= express.Router()

router.get('/',(req,res)=>{
   const obj={
        a:"thanos",
        number:2
    }
    res.json(obj)
})

module.exports=router