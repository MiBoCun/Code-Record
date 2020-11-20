Vue.component('k-carts',{
    props:['cartsitmes'],
    computed: {
        checkAll: {
            get () {
                if(this.cartsitmes != "") {
                    return this.cartsitmes.every( m => m.checked)
                }
               
            },
            set (newvalue) {
                this.$emit('ischeckall',newvalue)
            }  
        },
        isPay:{
            get ( ){
                return this.cartsitmes.find(item => item.checked === true)
            }
        },
        isReduce: {
            get () {


            },
            set () {

            }
        },
        countAll: {
            get () {
                return this.cartsitmes.filter(m => m.checked).reduce((prev, current) =>{
                    return prev + parseInt(current.count)
                }, 0)
            }
        },
        costAll:{
            get () {
                return this.cartsitmes.filter(m => m.checked).reduce((prev, current) =>{
                    return prev + parseInt(current.price) * current.count
                }, 0)
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
                   <div style="width:20px">
                    <input type="checkbox" :checked="cart.checked" @change="chagneChecked(cart,$event)">
                   </div>
                   <div class="imgLi">
                     <img :src=cart.cover :title=cart.title>
                   </div>
                   <div style="width:200px;">{{cart.title}}</div>                   
                   <div style="width:95px;">{{cart.price}}</div>
                   <div class="divCount" >                  
                     <button @click="changeCount(cart.count-1,cart)" >-</button>
                     <input type="text" :value=cart.count @blur="changeCount($event.target.value,cart)">
                     <button @click="changeCount(cart.count+1,cart)">+</button></div>
                   <div style="width:150px;">{{(cart.price * cart.count).toFixed(2)}}</div>
                   <div class="divOperate" > <button>删除</button></div>
                </li>               
            </ul>
        </div>

        <div id='formTotal'>
         <span>一共选择了{{countAll}}件商品，</span>
         <span>总计{{costAll.toFixed(2)}}元</span>
         <button class="payButton" :class="{payActive: isPay}" :disabled="!isPay" @click="payclick">立即支付</button>
        </div>
    </div>`,
    methods: {
        chagneChecked (cart,e) {
            this.$emit("changecheck",cart,e.target.checked)
           
        },
        changeCount (count,cart) {
            if(count === 1) {
                this.isReduce
            }
          
            this.$emit('changecount',count,cart)

        },
        payclick ( ) {
            alert("可以支付了")
        }

    }
})