Vue.component('k-items',{
    props: ['showitem'],
    data() {
        return {
            perpage:10,
            curpage:1            
        }
    },
    template:`
    <div id="main">
        <ul id="itemUl">
            <li v-for="(item,index) in curshowitem" :key="index">
                <div class="imgDiv"><img :src=item.cover ></div>
                <div class="text">{{item.title}}</div>
                <div class="price">{{item.price}}</div> 
                <div class="btn" @click='addToCart(item)'> <button >加入购物车</button></div> 
            </li>          
        </ul>
        <div id="pageContainer">
          <k-pages :total="showitem.length" :perpage="10" :curpage="curpage" @chage="changePage" />
        </div>        
    </div>`,
    computed: {
        curshowitem:function (){
            let start = (this.curpage - 1) * this.perpage
            let end  =  start + this.perpage
            return this.showitem.slice(start, end)

        }
    },
    methods: {
        changePage (p){
            this.curpage = p
            console.log(p)
        },
        addToCart (item) {
            this.$emit("addtocart",item)
        }
    }

})