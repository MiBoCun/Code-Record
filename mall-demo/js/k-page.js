Vue.component('k-pages',{
    props:{
        total: {
            type:Number,
            default:0
        },
        perpage: {
            type:Number,
            default:10
        },
        curpage: {
            type:Number,
            default:1
        },
     },
    
     computed: {
         pages:function () {
             return Math.ceil(this.total/this.perpage)
         }
     },
    template:`
    <div id="pageContainer">
    <ul>
        <li class="prepage" @click="clickPage(curpage-1)">上一页</li>
        <li   @click="clickPage(p)" :class="{active: p === curpage}" v-for="p in pages">{{p}}</li>
        <li class="nextpage" @click="clickPage(curpage+1)">下一页</li>
    </ul>
</div>`,
    methods: {
        clickPage (p) {
            //console.log(this.pages)
            if(p > 0 && p <= this.pages && p !== this.curpage) {
                this.$emit('chang', p)
            }
          

        }
    },
})