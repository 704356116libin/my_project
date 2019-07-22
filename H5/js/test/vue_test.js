var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    // 计算属性
    computed: {
        newMessage: function () {
            return this.message.split().reverse().join('-');
        },
        newMessage2: function () {
            return '666';
        }
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Date().toLocaleDateString()
    },
})
var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: false
    }
})
// 循环数据
var app4 = new Vue({
    el: "#app-4",
    data: {
        data: [
            { value: "学习Python" },
            { value: "学习Django" },
            { value: "学习Vue.js" }
        ]
    }
})
//逆转消息
var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },
})
var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "Hello Vue!"
    }
})
// ================组件====================
Vue.component('my-item', {
    // my-item 组件现在接受一个
    // "parm1"，类似于一个自定义属性
    // 这个属性名为 parm1
    props: ['my'],
    template: "<li >{{my.text}}</li>"
})


var app7 = new Vue({
    el: "#app-7",
    data: {
        datas: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其他什么人吃的东西' }
        ]
    },
    computed:{
        colorClass:function(){
            data={
                red:false,
                green:true
            }
            if(this.active){
                data.red=true
                data.green=false
            }
            return data
          }
        }
})
//================侦听器demo=====================
var wacthExample = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.debouncedGetAnswer();
        }
    },
    //vue生命周期创建完成后调用
    created:function(){
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
        getAnswer: function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.answer = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = response.data.answer
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        }
      }
})
//===================绑定class style
var app8=new Vue({
  el:'#app-8', 
  data:{
      active:false,
      switch_bg:true
  },
  computed:{
      colorClass:function(){
        data={
            red:false,
            green:true
        }
        if(this.active){
            data.red=true
            data.green=false
        }
        return data
      },
      bgClass:function(){
        $data={
            bg:false
        }
        this.switch_bg?data.bg=true:data.bg=false
        return $data
      }
  }
})
