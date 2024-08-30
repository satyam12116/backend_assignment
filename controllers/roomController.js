const Room=require('../models/Room');
const { generateToken } = require('../utils/jwtHelper');
const { verifyToken } = require('../utils/jwtHelper');
exports.getRooms=async(req,res)=>{
    const { time } = req.query;
  let filter = {};
  if (time) {
    filter.time = time;
  }
  try {
    const rooms = await Room.findAll({ where: filter });
    // const rooms = await Room.findAll();
    const token = generateToken({});
    res.json({ rooms, token:token });
  } catch (err) {
    res.status(500).send(err);
  }

};
exports.bookRoom=async(req,res)=>{
  const authHeader = req.headers.authorization;
  console.log(req.headers)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or malformed token' });
}
    const token = authHeader.split(' ')[1];
    const {id,date,time}=req.body;
    const room=await Room.findOne({where:{id,date,time}});
    try{
      const decodedToken = verifyToken(token);
    if(room && !room.booked){
        room.booked=true;
        await room.save();
        res.json({message:'Room Booked Successfully'})
    }
    else{
        res.status(400).json({message:'Slot booked already'})
    }
    }catch(err){
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Unauthorized: Token has expired' });
    }
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
}