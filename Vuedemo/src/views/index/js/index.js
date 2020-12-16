 export default {
    name: "Index",
    data() {
       return{
         arry: [
             {name: '阿大',age: 18, gender:'男'},
             {name: '阿二',age: 19, gender:'女'},
             {name: '阿三',age: 18, gender:'女'},
             {name: '阿四',age: 19, gender:'男'},
             {name: '阿五',age: 20, gender:'女'},
             {name: '阿六',age: 21, gender:'男'},
             {name: '阿七',age: 20, gender:'女'},
             {name: '阿八',age: 19, gender:'男'}
         ],
        msg:'筛选练习',
        agearr:[],
        sexarr:[]
       };
    },
    created: function () {
      var _this=this;
      _this.ageScreen();
      _this.sexScreen();
    },

    methods:{
        //筛选分组方法一
        groupBy (array, name) {
            var groups = {};
            debugger
            array.forEach( function(e) {
                var group = JSON.stringify(e[name]);
                groups[group] = groups[group] || [];
                groups[group].push(e);
            });
            debugger
            return Object.values(groups);
        },
        //年龄
        ageScreen:function(){
            var _this=this;
            var name='age'
            _this.agearr = _this.groupBy(this.arry, name)
            console.log('年龄分组', _this.agearr)
        },
        //性别
        sexScreen:function(){
            var _this=this;
            var name='gender'
           _this.sexarr = _this.groupBy(this.arry, name)
            console.log('性别分组', _this.sexarr)
        },
    },

};
