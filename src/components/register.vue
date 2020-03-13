<template>
  <div class="wrap_register_container">
    <div class="register_container">
        <div class="register_title">创建一个新的账号</div>
        <div class="register_item register_email">
            <h5>电子邮箱</h5>
            <input />
        </div>
        <div class="register_item register_user">
            <h5>用户名</h5>
            <input />
        </div>
        <div class="register_item register_passwd">
            <h5 >密码</h5>
            <input type="password" />
        </div>
        <button class="register_goon" @click="tohome">继续</button>
        <div>
        <button class="register_login" @click="tologin">已经拥有账号？</button>
        </div>
        <div style="font-size:12px;margin-top:18px">
            进行注册即表示您同意 Happy Chat 的<a class="register_extra" href=""  target="_blank">服务条款</a>和<a class="register_extra" href=""  target="_blank">隐私权政策</a>。
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  methods:{
      tologin: function(){
          this.$router.push('/account/login')
      },
      tohome: function(){
          this.$router.push('/')
      }
  }
}
</script>


<style>
.wrap_register_container{
  height: 492px;
  width: 480px;
  color: #72767d;
  background: #36393f;
}
.register_container{
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 40px;
    font-size: 18px;
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
.register_goon{
    height: 40px;
    width: 100%;
    color: #fff;
    background-color: #7289da;
    font-size: 16px;
    line-height: 24px;
    border-radius: 3px;
    border: 0;
}
.register_title{
    text-align: center;
    font-size: 26px;
    line-height: 52px;
    letter-spacing: 1.5px;
    color: white;
    font-weight: 300;
}
h5{
    color: #8e9297;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 600;
}
.register_email{ 
    margin-top: 20px;
}
.register_item{
    margin-bottom: 20px;
}

.register_login{
    color: #7289da;
    border: 0;
    background-color: rgba(0,0,0,0);
    font-size: 14px;
}
.register_login:focus{
    border: 0;
    outline:none;
}
.register_login:hover{
    /* border-bottom:1px solid #7289da; */
    text-decoration:underline;
}
.register_extra{
    display: inline;
    color: #7289da;
}
.register_extra:hover{
    /* border-bottom:1px solid #7289da; */
    text-decoration:underline;
    color: #7289da;
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
</style>