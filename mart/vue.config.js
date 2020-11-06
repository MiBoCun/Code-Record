module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/goods', function (req, res) {
                    res.json(
                      {
                        code: 0,
                        data: [
                            {
                             id: 1,
                             text: "百万年薪架构师",
                             count: 105,
                             price: 1800,
                             img: './assets01.jpg'
                           },
                           {
                            id: 2,
                            text: "javaS高级工程師",
                            count: 105,
                            price: 1500,
                            img: './assets/01.jpg'
                          },
                          {
                            id: 3,
                            text: "WEB全栈高工程師",
                            count: 105,
                            price: 3000,
                            img: './assets/02.png'
                          },
                          {
                            id: 4,
                            text: "性能优化工程师",
                            count: 105,
                            price: 2500,
                            img: './assets/01.jpg'
                          },{
                            id: 5,
                            text: "web全栈高级工程师",
                            count: 105,
                            price: 2000,
                            img: './assets/03.png'
                          }
                         
                        ]
                      }
                    )

                })

            }
        }
    }
}