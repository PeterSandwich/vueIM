<template>
    <div class="master_setting_dialog">
        <div class="master_setting_dialog_sidebar">
                  <div class="setting_dialog_sidebar_head">用户设置</div>
                  <div class="setting_dialog_sidebar_item setting_dialog_sidebar_item_self">个人资料</div>
                  <div class="setting_dialog_sidebar_item" style="color:red;" @click="EXIT()">登出</div>
              
        </div>
        <div class="master_setting_dialog_body">
            <div class="msdb_1">
                <h5>我的账号</h5>
                <div class="msdb_1_info" v-if="!isChange">
                    <div class="msdb_1_info_1"><img :src="me_base.me_headimg"/></div>
                    <div class="msdb_1_info_2">
                        <p class="p_1">用户名</p>
                        <p class="p_2">{{me_base.me_name}}<span>#{{me_base.me_fixid}}</span></p>
                        <p class="p_1">电子邮箱</p>
                        <p class="p_2">{{me_base.me_email}}</p>
                    </div>
                    <div class="msdb_1_info_3">
                        <button @click="modifyInfo()">编辑</button>
                    </div>
                </div>
                <div class="msdb_1_info_e" v-else>
                    <div class="msdb_1_info_1 msdb_1_info_1_change" @click="uploadimage()">
                        <input v-show="false" ref="avatar_input" type="file" @change="fileUpload($event)"/>
                        <img :src="change_avatar"/>
                    </div>
                    <div class="msdb_1_info_2">
                        <p class="p_1">用户名</p>
                        <div class="p_2"><input v-model="userinfo.name"/></div>
                        <p class="p_1">手机号码</p>
                        <div class="p_2"><input v-model="userinfo.telephone"/></div>
                        <p class="p_1">性别</p>
                        <div class="p_2"><input v-model="userinfo.sex"/></div>
                        <p class="p_1">年龄</p>
                        <div class="p_2"><input type="number" v-model="userinfo.age"/></div>
                        <p class="p_1">城市</p>
                        <div class="p_2"><input v-model="userinfo.city"/></div>
                        <div class="p_op">
                            <button @click="save_info()">保存</button>
                            <button @click="isChange=!isChange">取消</button>
                        </div>
                    </div>
                  
                </div>
                <h5>账号安全</h5>
                <div class="msdb_1_info_passwd" v-if="!isChangePwd">
                    <button @click="change_pwd()">更改密码</button>
                </div>
                <div class="msdb_1_info_e msdb_1_info_e_passwd" v-else>
                    <p class="p_1">原密码</p>
                    <div class="p_2"><input type="password" v-model="old_pwd"/></div>
                    <p class="p_1">新密码</p>
                    <div class="p_2"><input type="password" v-model="new_pwd"/></div>
                    <p class="p_1">再次输入新密码</p>
                    <div class="p_2"><input type="password" v-model="new_again_pwd"/></div>
                    <div class="p_op">
                        <button @click="save_passwd()">保存</button>
                        <button @click="isChangePwd=!isChangePwd">取消</button>
                    </div>
                </div>
            </div>
          <div class="msdb_2">
            <div class="master_setting_dialog_close" @click="close()">
              <div>
                <svg t="1585215681448" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="13482" width="34" height="34">
                  <path id="svg_1" fill="#e6e6e6"
                    d="m7.67,512.003c0,282.77 227.196,511.997 507.456,511.997c280.27,0 507.457,-229.227 507.457,-511.997s-227.187,-512.003 -507.456,-512.003c-280.26,0 -507.458,229.233 -507.458,512.003l0.001,0z" />
                  <path stroke="null" id="svg_2" fill="#d81e06"
                    d="m729.1236,298.11762c11.5673,11.41216 11.5673,31.37174 0,42.78849l-390.8125,384.97836c-11.58724,11.38915 -31.85129,11.38915 -43.43469,0c-11.5673,-11.40832 -11.5673,-31.37634 0,-42.78849l390.80943,-384.97759c11.58647,-11.39299 31.85512,-11.39299 43.43776,0l0,-0.00077z" />
                  <path stroke="null" id="svg_3" fill="#d81e06"
                    d="m301.40334,299.80205c11.23808,-11.30459 30.8915,-11.30459 42.12958,0l379.06583,381.94742c11.21432,11.3242 11.21432,31.13253 0,42.45203c-11.23885,11.29988 -30.8915,11.29988 -42.13418,0l-379.06046,-381.94742c-11.21815,-11.32891 -11.21815,-31.13253 0,-42.45203l-0.00077,0z" />
                </svg>
              </div>
              <h5>
                ESC
              </h5>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name: "setting",
    data: function(){
        return {
            isChange: false,
            isChangePwd: false,
            change_avatar: "",
            userinfo:{
                headimg:"",
                name:"",
                fix_id:"",
                sex:"",
                age:0,
                city:"",
                telephone:""
            },
            old_pwd:"",
            new_pwd:"",
            new_again_pwd:""
        }
    },
    methods:{
        close(){
            this.$emit("close")
        },
        change_pwd(){
            this.old_pwd=""
            this.new_pwd=""
            this.new_again_pwd=""
            this.isChangePwd = true
        },
        EXIT(){
            window.sessionStorage.clear()
            location.reload()
        },
        modifyInfo(){
            this.change_avatar = this.me_base.me_headimg
            this.userinfo = {}
            this.userinfo.headimg = this.me_base.me_headimg
            this.userinfo.name = this.me_base.me_name
            this.userinfo.fix_id =  this.me_base.me_fixid

         
            this.userinfo.sex = this.me_base.me_sex
            this.userinfo.age = this.me_base.me_age
            this.userinfo.city = this.me_base.me_city
            this.userinfo.telephone = this.me_base.me_telephone
            this.isChange = true
        },
        save_info(){
            let param = {
                uid: this.me_base.me_id,
                avatar: this.userinfo.headimg,
                name: this.userinfo.name,
                sex: this.userinfo.sex,
                age: Number(this.userinfo.age),
                city: this.userinfo.city,
                telephone: this.userinfo.telephone
            }
            console.log("param",param)
            this.$axios.post('http://localhost:9876/api/change_userinfo', param)
            .then((response) =>{
                    if(response.status == 200){
                        let code = response.data.code
                        if(code == 1001){
                            this.$store.commit("change_user_info",param)
                            this.isChange = false
                        }
                    }
            })
        },
        save_passwd(){
            this.old_pwd=this.old_pwd.trim()
            this.new_pwd=this.new_pwd.trim()
            this.new_again_pwd=this.new_again_pwd.trim()
            if(this.old_pwd==""||this.new_pwd==""){
                this.$message.error("新旧密码不能为空")
            }
            if(this.new_pwd!=this.new_again_pwd){
                this.$message.error("密码不一致")
            }
            let param = {
                new_pwd: this.new_pwd,
                old_pwd: this.old_pwd
            }
            console.log(param)
            this.$axios.post('http://localhost:9876/api/change_pwd', param)
            .then((response) =>{
                if(response.status == 200){
                    let code = response.data.code
                    if(code==1001){
                        this.$message.success("变更成功")
                        this.isChangePwd = false
                    }else{
                        this.$message.error(response.data.message)
                    }
                    
                }
            })

        },
        uploadimage(){
            this.$refs.avatar_input.click()
        },
        fileUpload(e){
            let file = this.$refs.avatar_input.files[0];
            let param = new FormData();
            param.append('file',file);
            this.$axios.post('http://localhost:9876/upload', param,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then((response) =>{
                if(response.status == 200 && response.data.code == 1001){
                     this.change_avatar= "http://localhost:9876/files/"+response.data.data
                     this.userinfo.headimg = "/files/"+response.data.data
                }
            })
        }
    },
    computed:{
        me_base() {
            return this.$store.state.me.base
        }
    }
}
</script>
<style>
.master_setting_dialog {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 2.3fr;
  }

  .master_setting_dialog_sidebar {
    min-width: 220px;
    background-color: #2f3136;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:flex-end;
  }

  .master_setting_dialog_body {
    min-width: 600px;

    background-color: #36393f;
    height: 100%;

    display: grid;
    width: 100%;
    grid-template-columns: 740px auto;
  }

  .msdb_1 {
    padding: 60px 40px 80px;
  }
  .msdb_1>h5{
      color: white;
      font-weight: bold;
      margin: 20px 0px;

  }

  .msdb_2 {
    background-color: #202225;
    position: relative;
  }

  .master_setting_dialog_close {
    position: absolute;
    width: 80px;
    left: 0;
    top: 40px;

  }

  .master_setting_dialog_close>div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .master_setting_dialog_close>h5 {
    width: 100%;
    text-align: center;
    color: #72767d;
    font-size: 14px;
  }

  .setting_dialog_sidebar_item{
      height: 32px;
      width: 160px;
      /* text-align: center; */
      padding: 0px 10px;
      line-height: 32px;
      color: white;
      /* background-color: yellowgreen; */
      margin: 2px;
      border-radius: 2px;
      justify-content: right;

  }
.setting_dialog_sidebar_item_self{
     background-color: rgba(165, 165, 165, 0.226);
}
  .setting_dialog_sidebar_item:hover{
      background-color: rgba(190, 190, 190, 0.226);
  }
  .setting_dialog_sidebar_head{
      margin-top: 100px;
      padding: 6px 10px;
      color:#8e9297;
      font-size: 12px;
      width: 160px;
      font-weight: bold;
      border-bottom: 1px solid rgba(112, 112, 112, 0.185);
  }
.msdb_1_info{
    height: 140px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: #202225c9;
    padding: 20px;
    display: flex;
    flex-direction: row;
}
.msdb_1_info_1>img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
}
.msdb_1_info_2{
    margin-left: 20px;
    width: 430px;
}
.p_1{
    margin: 0px;
    font-weight: bold;
    font-size: 12px;
    color: rgb(167, 167, 167);
}
.p_2{
   
    /* font-weight: bold; */
    color: white;
    font-size: 14px;
}
.p_2>span{
    color: rgb(182, 182, 182);
}
.msdb_1_info_3{

}
.msdb_1_info_3>button{
    width: 60px;
    height: 32px;
    border-style: none;
    outline: none;
    color: white;
    background: #7289DA;
    border-radius: 3px;
}
.msdb_1_info_3>button:hover{
    background-color: rgb(85, 117, 233);
}
.msdb_1_info_e{
    border: 1px solid black;
    border-radius: 3px;
    background-color: #202225c9;
    padding: 20px;
    display: flex;
    flex-direction: row;
}
.master_setting_dialog input{
    width: 400px;
    height: 40px;
    outline: none;
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-bottom: 8px;
    color: rgb(219, 219, 219);
    padding: 10px;
    font-weight: bold;
}
.p_op{
    width: 400px;
    border-top: 1px solid rgb(116, 116, 116);
    padding: 20px;
    display: flex;
    flex-direction: row-reverse;
}
.p_op>button{
    width: 60px;
    height: 32px;
    border: none;
    border-radius: 2px;
    background-color: rgba(187, 187, 187, 0);
    margin: 0px 5px;
    color: white;
    font-weight: bold;
}
.p_op>button:nth-child(1){
    background-color: rgb(101, 163, 76);
}
.p_op>button:nth-child(1):hover{
    background-color: rgb(94, 168, 64);
}
.p_op>button:hover{
     background-color: rgba(187, 187, 187, 0.178);
}
.msdb_1_info_1_change:hover{
    cursor: pointer;
}

.msdb_1_info_passwd{
    border: 1px solid black;
    border-radius: 3px;
    background-color: #202225c9;
    padding: 20px;
}
.msdb_1_info_passwd button{
    width: 100px;
    height: 32px;
    border: none;
    border-radius: 3px;
    background: #7289DA;
    color: white;
    font-weight: bold;
}
.msdb_1_info_e_passwd{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 120px;
    justify-items: center;
}
</style>