const Room=require('../models/Room');
exports.getRooms=async(req,res)=>{
    const { time } = req.query;
  // let filter = {};
  // if (time) {
  //   filter.time = time;
  // }
  try {
    // const rooms = await Room.findAll({ where: filter });
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (err) {
    res.status(500).send(err);
  }

};
exports.bookRoom=async(req,res)=>{
    const {id,date,time}=req.body;
    const room=await Room.findOne({where:{id,date,time}});
    try{
    if(room && !room.booked){
        room.booked=true;
        await room.save();
        res.json({message:'Room Booked Successfully'})
    }
    else{
        res.status(400).json({message:'Slot booked already'})
    }
    }catch(err){
        res.status(500).send(err);
    }
}