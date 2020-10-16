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
                             text: "aaaaa",
                             count: 105,
                             img: '/img/01.png'
                           },
                           {
                            id: 2,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/01.png'
                          },
                          {
                            id: 3,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/02.png'
                          },
                          {
                            id: 4,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/01.png'
                          },{
                            id: 5,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/03.png'
                          },
                          {
                            id: 1,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/01.png'
                          },{
                            id: 1,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/04.png'
                          },{
                            id: 1,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/01.png'
                          },{
                            id: 1,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/04.png'
                          },{
                            id: 1,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/04.png'
                          },{
                            id: 1,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/01.png'
                          },{
                            id: 1,
                            text: "aaaaa",
                            count: 105,
                            img: '/img/02.png'
                          },
                        ]
                      }
                    )

                })

            }
        }
    }
}