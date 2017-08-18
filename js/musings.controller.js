angular
.module('musingsApp')
.controller('musingsController', [
  'musings',
  musingsController
])

function musingsController (musings) {
  this.musings = musings.all()

  this.newMusing = {title: '', content: '', author: ''}

  this.createMusing = createMusing
  function createMusing () {
    musings.create(newMusing.title, newMusing.content, newMusings.author)
  }
  //
  this.removeMusing = removeMusing
  function removeMusing () {
    musings.remove(index)
  }
}
