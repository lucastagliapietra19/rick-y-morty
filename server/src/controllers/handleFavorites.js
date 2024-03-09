let myFavorites = [];

const postFav = (req, res) => {

   const { id, name, gender, species, origin, image, status, onClose } = req.body
  const character = { id, name, gender, species, origin, image, status, onClose }

  myFavorites.push(character);

  res.json(myFavorites);
}

const deleteFav = (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  
  myFavorites = myFavorites.filter(char => char.id !== +id);

  res.json(myFavorites);
}

module.exports = { postFav, deleteFav };