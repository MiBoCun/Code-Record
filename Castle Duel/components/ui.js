//玩家姓名、当前轮次

Vue.component('top-bar', {
   props: ['turn', 'currentIndex', 'players'],
   template:  `<div class='top-bar' :class="'players'+ currentIndex">
             <div class="player p0">{{players[0].name}}</div>
             <div class="turn-counter">
             <img src="svg/turn.svg" class="arrow"> 
             <div class="turn">Turn {{turn}}</div></div>
             <div class="player p1">{{players[1].name}}</div>       
            </div>`,
   created() {
       console.log(this.currentIndex)
   },
})

//上一回合玩家的出牌
Vue.component('card', {
       props: ['def'],
       template: `<div class='card' :class="'type-'+def.type" @click='cardPlay'>
                      <div class='title'>{{def.title}}</div>
                      <img src="svg/card-separator.svg" class="separator">
                      <div class='description'><div v-html='def.description'></div></div>
                      <div class='note' v-if='def.note'><div v-html='def.note'></div></div>       
       
       </div>`,
       methods: {
           cardPlay() {
               this.$emit('parentPlay',this)
           }
       }
})

//当前玩家显示的5张卡牌
Vue.component('hand', {
     props: ['cards'],
     template: `<div class='hand'>
                    <div class='wrapper'>
                
                    </div>                                
     
     </div>`



})