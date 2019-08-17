const router = require('express').Router()
const db = require('../../database/config')

router.get('/', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      error: 'Error occurred while attempting to get the tasks'
    })
  }
})

router.post('/', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      error: 'Error occurred while attempting to add the task'
    })
  }
})

module.exports = router
