const Cube = require('../models/Cube');

async function getAll(query) {
    const options = {};
  
    if (query.search) {
      options.name = {$regex: query.search, $options: 'i'};
    }
  
    if (query.from) {
      options.difficultyLevel = { $gte: Number(query.from)};
    }
  
    if (query.to) {
      options.difficultyLevel = options.difficultyLevel || {};
      options.difficultyLevel.$lte = Number(query.to);
    }
  
    let cubes = Cube.find(options).lean();
  
    return cubes;
  }
  
  async function getById(id) {
      const cube = await Cube.findById(id).populate('comments').lean();
      if (cube) {
        return cube;
      } else {
        return undefined;
      }
  }
  
  async function edit(id, cube) {
      const existing = await Cube.findById(id);
      if(!existing){
        throw new ReferenceError('No such ID in database.');
      }
  
      Object.assign(existing, cube);
      
      return existing.save();    
  }
  
  async function create(cube) {
    const record = new Cube(cube);
    return record.save();
  }

  
module.exports = {    
    getAll,
    getById,
    create,
    edit,    
  };