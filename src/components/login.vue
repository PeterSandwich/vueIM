<template>
  <div class="login_container">
  <div class="login_input">
      <div class="login_title">欢迎回来！</div>
      <div class="login_title_1">很高兴再次见到您！</div>
      <div class="login_table">
          <div class="login_email">
              <div class="login_lable">电子邮箱</div>
              <input v-model="email"/>
          </div>
          <div class="login_passwd">
              <div class="login_lable">密码</div>
              <input type="password" v-model="passwd"/>
          </div>
          <button class="login_forget">忘记密码？</button>
          <button class="login_login" @click="login()" v-loading.fullscreen.lock="fullscreenLoading">登录</button>
          <div class="login_regist">
              <span style="color: #72767d;font-size:14px;">需要新的账号？</span>
              <button class="login_regist_btn" style="font-size:14px;" @click="toregister">注册</button>
          </div>
      </div>
  </div>
  <div class="login_dot"><div>.</div></div>
  <div class="login_code">
      <div class="login_qrcode">
          <div class="login_qrcode_bg">
            <img style="height:176px; weight:176px;border: 1px solid white" :src="require('../assets/_QRcode.svg')" alt=""/>
        </div>
      </div>
      <div class="login_info">
          <div class="login_info_1">通过二维码登录</div>
          <div class="login_info_2">通过 <strong>WeChat 手机 APP</strong> 扫描二维码，便可即时登录。</div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'login',
    data: function(){
        return {
            email:"",
            passwd:"",
            fullscreenLoading:false
        }
    },
    mounted:function(){
        if (window.sessionStorage.getItem('me_id')){
             this.$router.push('/')
        }
    },
  methods:{
      toregister: function(){
          this.$router.push('/account/register')
      },
      tohome: function(){
          this.$router.push('/')
      },
      login(){
          if(this.email.length==0||
          this.passwd.length==0){
              this.$message.error("输入字段不能为空");
              return
          }
          
          this.fullscreenLoading = true
          this.$axios.post('http://localhost:9876/api/login', {
            email: this.email,
            passwd: this.passwd
        },{ timeout: 5000 })
        .then((response) =>{
            console.log(response);
            this.fullscreenLoading = false
            if(response.status == 200 && response.data.code == 1001){
                this.$message({ message: '登录成功',type: 'success'})
                console.log(response.data.data)
                this.$store.commit('setBase',response.data.data)
                   this.tohome()
            }else if(response.data.code == 2010){
                window.sessionStorage.clear();
                this.$router.push('/')
            }else{
                this.$message.error(response.data.message)
            }
        })
        .catch(function (error) {
            this.fullscreenLoading = false
            console.log(error);
        });
      }
  }
}
</script>


<style>
.login_container{
    height: 425px;
    width: 784px;
    color: #72767d;
    background: #36393f ;
    display: grid;
    grid-template-columns: 1.4fr 10px 1fr;
    border-radius: 5px;
    align-items: center;
    font-family: Whitney, "Microsoft YaHei New", 微软雅黑, "Microsoft Yahei", "Microsoft JhengHei", 宋体, SimSun, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.login_input{
    height:100%;
    padding: 2rem;
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-items: center;
    
}
.login_dot{
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1rem;
    align-self: center;
    justify-self: center;
    color: dimgrey;
}
.login_code{
    height:100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-self: center;
}
.login_login{
    height: 40px;
    width: 100%;
    margin-top: 20px;
    color: #fff;
    background-color: #7289da;
    font-size: 16px;
    line-height: 24px;
    border-radius: 3px;
    border: 0;
}
.login_title{
    text-align: center;
    font-size: 26px;
    line-height: 52px;
    letter-spacing: 1.5px;
}
.login_title_1{
    text-align: center;
    color:  #b9bbbe;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1.5px;
}

input{
    width: 100%;
    height: 40px;
    padding: 10px;
    border-color:#040405;
    background-color: rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 3px;
    color: #dcddde;
    
}
.login_email{
    margin-top: 20px;
}
.login_passwd{
    margin-top: 20px;
}
.login_forget{
    color: #7289da;
    border: 0;
    background-color: rgba(0,0,0,0);
    font-size: 14px;
    font-weight: 300;
}
.login_forget:focus{
    border: 0;
    outline:none;
}
.login_forget:hover{
    /* border-bottom:1px solid #7289da; */
    text-decoration:underline;
}
.login_lable{
    font-size: 12px;
    color:#8e9297;
    font-weight: 600;
    margin-bottom: 6px;
}
.login_regist{
    margin-top: 5px;
}
.login_regist_btn{
    outline:none;
    color: #7289da;
    border: 0;
    background-color: rgba(0,0,0,0);
    font-size: 14px;
    font-weight: 300;
}
.login_regist_btn:focus{
    border: 0;
    outline:none;
}
.login_regist_btn:hover{
    /* border-bottom:1px solid #7289da; */
    text-decoration:underline;
}

.login_qrcode{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
}

.login_qrcode_bg{
    width: 180px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    margin-top: 20px;
}

.login_info{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
}
.login_info_1{
    font-size: 26px;
    color: white;
}
.login_info_2{
    width: 80%;
    font-size: 18px;
    text-align: center;
    color: #b9bbbe;
}
</style>
