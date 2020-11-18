Vue.component('k-carts',{
    props:['cartsitmes'],
    template:`
    <div id="cartForm">
   
        <div id="formTitle">
        <ul>
            <li> 
                
                <input type="checkbox">
                <label for="">全选</label>
            </li>
            <li style="width:134px;">商品</li>
              <li>名称</li>
              <li style="width:111px;">单价</li>
              <li style="width:47px;">数量</li>
              <li style="width:120px;">小计</li>
              <li>操作</li>
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
                   <div>{{cart.title}}</div>
                   
                   <div>{{cart.price}}</div>
                   <div class="divCount">
                     <button >-</button>
                     <input type="text" :value=cart.count>
                     <button >+</button></div>
                   <div style="width:120px;">{{cart.price * cart.count}}</div>
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
    },
})