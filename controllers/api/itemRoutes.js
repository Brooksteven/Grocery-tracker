const router = require('express').Router();
const { Items: Item } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newItem = await Item.create({
      ...req.body,
      //user_id: req.session.user_id,
    });

    res.json(newItem);
   // res.redirect('/userlanding')
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get("/:id", withAuth, async (req, res) => {  
  try {
    const itemData = await Item.findByPk(req.params.id, {
      where: {
        user_id: req.session.user_id,
      },
    });

    const item = itemData.get({ plain: true });

    res.render("updateItem", {
      item,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT route to update the users item
router.put('/:id', withAuth, async (req, res) => {
  // update a category by its `id` value
  try {
    const itemName = await Item.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(itemName);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const itemData = await Item.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!itemData) {
      res.status(404).json({ message: 'No item(s) found with this id!' });
      return;
    }

    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;