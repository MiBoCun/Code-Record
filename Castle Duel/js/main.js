
new Vue({
  name: 'myGame',
  el: '#app',
  data: state,
  template: `<div id="#app">
        <top-bar :turn="turn" :current-index="currentPlayerIndex" :players="players" />
        <card :def='radomCard' @parentPlay='handlePlay'/>
        </div>` ,
  computed: {
    radomCard () {
      return cards.trebuchet
    }
  },
  methods: {
    handlePlay(a) {
      console.log(a)
    }
  },      


})