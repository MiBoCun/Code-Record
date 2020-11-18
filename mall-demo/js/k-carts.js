Vue.component('k-carts',{
    props:['cartsitmes'],
    computed: {
        checkAll: {
            get () {
                return this.cartsitmes.every( m => m.checked)
            },
            set (newvalue) {
                this.$emit('ischeckall',newvalue)

            }  
        }
    },
    template:`
    <div id="cartForm">
   
        <div id="formTitle">
        <ul>
            <li> 
                
                <input type="checkbox" v-model="checkAll">
                <label for="">全选</label>
            </li>
            <li style="width:34px;">商品</li>
              <li style="width:200px;">名称</li>
              <li style="width:95px;">单价</li>
              <li style="width:115px;">数量</li>
              <li style="width:150px;">小计</li>
              <li style="width:63px;">操作</li>
        </ul>           
        </div>
        <div id='formMain'>
            <ul>
                <li v-for="(cart,index) of cartsitmes" :key="index">
                   <div>
                    <input type="checkbox" :checked="cart.checked" @change="chagneChecked(cart,$event)">
                   </div>
                   <div class="imgLi">
                     <img :src=cart.cover :title=cart.title>
                   </div>
                   <div style="width:200px;">{{cart.title}}</div>
                   
                   <div style="width:95px;">{{cart.price}}</div>
                   <div class="divCount" >
                     <button >-</button>
                     <input type="text" :value=cart.count>
                     <button >+</button></div>
                   <div style="width:150px;">{{cart.price * cart.count}}</div>
                   <div class="divOperate" > <button>删除</button></div>
                </li>               
            </ul>
        </div>
        <div id='formTotal'>
         <span>一共选择了  件商品，</span>
         <span>总计    元</span>
         <div id="payButton">立即支付</div>
        </div>
    </div>`,
    methods: {
        chagneChecked (cart,e) {
            this.$emit("changecheck",cart,e.target.checked)
            console.log(e.target.checked)

        }

    }
})