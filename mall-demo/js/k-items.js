Vue.component('k-items',{
    props: ['showitem'],
    data() {
        return {          
            curpage:1,
            prepage:10            
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
        <div style="clear:both;content:''"></div>   
       
          <k-pages :total="showitem.length" :prepage="prepage" :curpage="curpage" @chang="changePage" />
           
    </div>`,
    computed: {
        curshowitem:{
            get (){
                let start = (this.curpage - 1) * this.prepage
                let end  =  start + this.prepage
                return this.showitem.slice(start, end) 
            }           
        }
    },
    methods: {
        changePage (p){            
            this.curpage = p          
        },
        addToCart (item) {
            this.$emit("addtocart",item)
        }
    }
})