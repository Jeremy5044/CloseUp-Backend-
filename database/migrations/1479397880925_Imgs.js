'use strict'

const Schema = use('Schema')

class ImgsTableSchema extends Schema {

  up () {
    this.create('Imgs', (table) => {
      table.increments()
      table.timestamps()
      table.integer('count')
      table.string("title")
      table.string('url')
    })
  }

  down () {
    this.drop('Imgs')
  }

}

module.exports = ImgsTableSchema
