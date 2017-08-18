angular
.module('musingsApp',[])
.factory('musings', [musingsService])

function musingsService () {
  const musings = [
    {
      title: "I wonder",
      content: "I wonder this I wonder that, I wonder about a big fat cat",
      author: "Perry"
    },
    {
      title: "Muse",
      content: "My muse, the one who inspires, who brings me light, who brings me dreams",
      author: "Perry"
    },
    {
      title: "Question",
      content: "Why oh why do birds fly high, way up in the clear blue sky?",
      author: "Perry"
    }
  ]

  return {
    all: all,
    create: create,
    remove: remove
  }

  function all () {
    return musings
  }

  function create (title, content, author) {
    musings.push({
      title: title,
      content: content,
      author: author
    })
  }

  function remove (arrayNum) {
    musings.splice(arrayNum, 1)
  }
}
