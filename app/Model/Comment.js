'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {
   Imgs(){
	return this.hasMany('App/Model/Img')
   }
}

module.exports = Comment
