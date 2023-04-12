// Activities MiddleWare
// Clase 3, 1h39m

const valActCreate = (req, res, next) => {
//  console.log('Validator ActCreate.');
  const { name, description, difficulty, duration, season } = req.body;
//  console.log(req.body);
  if (typeof name === 'undefined') {
    return res.status(400).json({ error: 'Missing Name.' });}
  if (typeof description === 'undefined')
    return res.status(400).json({ error: 'Missing Description.' });
  if (typeof difficulty === 'undefined')
    return res.status(400).json({ error: 'Missing Difficulty.' })
    else if (isNaN(difficulty))
      return res.status(400).json({ error: 'Difficulty must be a Number.' })
      else if ((difficulty < 1) || (difficulty > 5))
        return res.status(400).json({ error: 'Difficulty must be in 1..5 range.' });
  if (typeof duration === 'undefined') return res.status(400).json({ error: 'Missing duration.' });
  if (typeof season === 'undefined')
    return res.status(400).json({ error: 'Missing Season.' })
    else if (isNaN(season))
      return res.status(400).json({ error: 'SeasonCode must be a Number.' })
      else if ((season < 1) || (season > 4))
        return res.status(400).json({ error: 'SeasonCode must be in 1..4 range.' });

  next();
};

module.exports = {
  valActCreate
};