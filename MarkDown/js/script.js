
//注册全局 过滤器
Vue.filter('formateT',t => moment (t).format('MMMM Do YYYY, h:mm:ss a'))

const app=new Vue({
   name:'mibocun-demo',
   el:'#notebook',
   data () {
      return {
         notes: JSON.parse(localStorage.getItem('myNotes')) || [],
         selectedId: localStorage.getItem('MySelectedId') || null
      }
   },
   computed: {
      //添加按钮提示
      noteTips () {
       return this.notes ? 'you have created '+this.notes.length+' list of note(s)' : ''
      },
      selectedNote () {
         return  this.notes ? this.notes.find(note => note.id === this.selectedId) : ''
      },
      selectNote () {        
         return this.selectedNote ? this.selectedNote.content : ''
      },
      notePreview () {
          // Markdown rendered to HTML
      return this.selectedNote ? marked(this.selectedNote.content) : ''
      },
      sortNotes () {
         // 1：创建时间晚的在后  2：已收藏的在前
         return  this.notes.slice().sort((a,b) => a.created - b.created).sort((a,b) => (a.favorite === b.favorite) ? 0 :a.favorite ? -1 : 1)
         
      }

   },
   watch: {
       //监听notes数组和属性变化。
      notes: {
         handler:function () {
            //localStorage只接受字符串key键值存储
            localStorage.setItem('myNotes', JSON.stringify(this.notes))  
         }, 
         // 因支持编辑 title属性，使用深度监听
         deep:true  
      },
      selectedId (newval,oldVal) {    
         //使用localStorage存储数据，刷新页面可以再次获取数据   
         localStorage.setItem('MySelectedId', newval)
      }
   },
   methods: {     
      //点击add note,创建note
      addNote () {
         const time = Date.now()      

         const note= {
               content: time+"note"+(this.notes.length+1),
               title: "my new note"+(this.notes.length+1),
               created:time,
               id: ''+time,
               favorite: false
         }
         this.notes.push(note)

      },
      //选中某条note
      selectNote (note) {
         this.selectedId = note.id
      },
      //收藏note
      favoriteNote () {
       // this.selectedNote.favorite = !this.selectedNote.favorite
       this.selectedNote.favorite ^= true

      },
      //移除note
      removeNote () {
         if (this.selectedNote && confirm('Delete the note')) {
            const index=this.notes.indexOf(this.selectedNote)
            if (index > -1) {
               this.notes.splice(index,1)
              
            }
         }

      },
     
   },
})