<template>

  <div class="master_can">

    <div class="sideBar">
      <div class="sideBar_search">
        <div @click="dialogGlobalSearchVisible=true">寻找或开始新的对话</div>
      </div>
      <div class="sideBar_tool">
        <div class="sideBar_list">
          <div class="sideBar_select sideBar_select_h" @mouseover="sideBar_select_hover='friend'"
            @click="sideBar_select_click('friend')" @mouseleave="sideBar_select_hover=0"
            v-bind:class="{sideBar_select_hover_active: sideBar_select_hover=='friend'&&sideBar_select_select!='friend', sideBar_select_select_active:sideBar_select_select=='friend'}">
            <div>
              <svg t="1584330809456" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="8538" width="28" height="28">
                <path
                  d="M833.829799 308.87372c0 0.340761 0.475837 2.049682 0.475837 2.390443 0.249687 3.095501 0.249687 3.095501 0.412392 5.282307 0.895393 12.001335-3.498684 23.539112-7.835456 34.441417-11.423167 28.713972-32.389688 49.926086-56.419987 68.225871-10.372232 7.898901-22.550599 12.869099-35.141358 16.527418-8.147564 2.367931-16.154935 5.445012-24.449855 7.034207-15.255449 2.922563-30.664394 5.057179-46.031383 7.375991-11.911284 1.797949-23.859407 3.349281-35.782971 5.061272-10.594289 1.521656-21.342074 2.411933-31.725562 4.848425-13.56597 3.183506-26.862811 7.535627-40.219004 11.571546-3.079128 0.930185-4.468778 0.924045-4.832052-2.902096-0.677429-7.142677-2.054799-14.21577-2.953262-21.342074-2.095731-16.627702-4.436032-33.236985-5.996574-49.916876-1.243317-13.283538-1.992377-26.659173-2.048659-39.997969-0.092098-21.584598 0.080841-23.700795 0.988514-64.754816 0.418532-18.913768 2.240017-37.784558 2.895957-56.692187 0.49528-14.298658 3.573385-27.744901 10.525728-40.266076 8.354272-15.046694 20.255323-26.919093 35.230386-34.870182 22.354124-11.868305 46.248324-15.69547 71.052243-8.524141 17.71957 5.123694 30.18037 16.555048 37.821397 33.31578 4.984524 10.934027 6.735401 22.397103 6.217608 34.350342-0.112564 2.597151 0.989537 5.246491 1.612731 8.264221 17.006326-8.510838 33.838689-12.780071 51.957349-11.594059 9.976212 0.652869 19.076474 4.222161 27.220968 9.18929 12.259208 7.476275 21.799492 18.055215 29.037337 30.653137 6.180769 10.758018 11.106965 21.973454 13.96199 34.054607C831.237765 296.66977 832.493362 302.780955 833.829799 308.87372z"
                  p-id="8539" v-bind:fill="icon_color('friend')"></path>
                <path
                  d="M566.627155 650.006144c-5.616928-26.831089-34.767851-136.169309-38.551014-162.870438 0 0-0.001023 0.002047-0.002047 0.00307 0-0.001023 0.001023-0.002047 0.001023-0.002047-32.091906-3.352351-63.609737 1.434675-94.690616 8.266267-51.702546 8.700149-144.868435 62.120826-144.868435 62.120826-36.282345 23.311939-44.700061 69.040423-45.902446 85.987397s1.820462 65.87943 17.170055 86.687338c21.029966 28.507264 60.682058 40.11872 92.530416 29.238928 0.001023 6.625908 2.311649 12.703323 4.77884 18.73162 1.866511 4.016477 3.208065 8.246825 5.009084 12.295024 23.651676 53.173037 70.78209 74.621535 126.193097 57.124022 37.31793-11.784394 63.010079-36.272112 77.623915-72.466452 3.377934-12.236696 6.138814-24.561395 5.331425-37.395702C575.971987 708.165752 572.656475 678.80505 566.627155 650.006144z"
                  p-id="8540" v-bind:fill="icon_color('friend')"></path>
                <path
                  d="M268.164552 488.245993c23.442922-0.572028 46.937009 0.694825 70.098521-3.959172 59.803038-12.016685 119.843482-21.030989 181.136453-15.331173l0-0.001023 0.001023 0.001023c14.363126 1.540076 11.919471-3.246951 11.272741-8.918114-2.362814-20.727067-7.65126-41.306778-10.600429-61.956074-7.504928-52.552913-14.681374-105.202017-34.039257-155.162896-12.593829-32.503275-35.631522-53.06559-69.839625-60.526515-85.505419-18.647709-151.844314 39.426965-143.782707 125.758192-36.83186-0.032746-69.628824 8.071839-87.160105 45.036729C161.248498 403.799696 202.356754 489.852584 268.164552 488.245993z"
                  p-id="8541" v-bind:fill="icon_color('friend')"></path>
                <path
                  d="M859.124905 513.953492c-11.625782-20.644179-34.314527-31.375591-56.104809-37.894052-42.528606-12.720719-85.819574-14.956643-129.799228-9.895371-35.818787 4.122901-64.11525 8.571213-122.514311 17.531282-7.91118 0.823761-5.192256 5.462408-4.050246 9.743922 5.506411 20.654412 12.515035 52.173267 15.589047 62.210877 10.981099 33.9226 33.835619 100.003622 49.881061 147.57201 2.468215 5.040806 22.843264 44.828998 37.634132 53.703109 30.982642 18.587334 63.309908 15.289218 92.991927-0.825808 31.398104-17.046235 46.078455-45.461401 40.902572-82.233909-2.298346-6.55223-4.596691-13.103436-6.89606-19.654642 0.174985 0.107447 0.343831 0.223081 0.518816 0.331551 5.375427 1.89107 10.92277 3.89982 16.535605 3.988848 22.997784 0.367367 45.299719-1.611707 59.855226-23.225981 10.943236-14.651698 18.032702-30.096459 21.818935-48.892547C880.525308 561.412386 868.88213 531.139919 859.124905 513.953492z"
                  p-id="8542" v-bind:fill="icon_color('friend')"></path>
              </svg></div>
            <div>好友</div>
          </div>
          <div class="sideBar_select sideBar_select_h" @mouseover="sideBar_select_hover='info'"
            @click="sideBar_select_click('info')" @mouseleave="sideBar_select_hover=0"
            v-bind:class="{sideBar_select_hover_active: sideBar_select_hover=='info'&&sideBar_select_select!='info', sideBar_select_select_active:sideBar_select_select=='info'}">
            <div>
              <svg t="1584713507863" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4517" width="28" height="28">
                <path d="M513 519m-184 0a184 184 0 1 0 368 0 184 184 0 1 0-368 0Z" p-id="4518"
                  v-bind:fill="icon_color('info')"></path>
                <path
                  d="M856.7 373.8c-18.8-44.4-45.7-84.3-79.9-118.6l-31.1 31.1C807.8 348.5 842 431.1 842 519c0 181.4-147.6 329-329 329S184 700.4 184 519c0-160.7 115.9-294.9 268.5-323.4 10.8 24.1 34.9 40.9 63 40.9 38.1 0 69-30.9 69-69s-30.9-69-69-69c-32.6 0-59.9 22.6-67.1 53.1-27.6 4.8-54.5 12.8-80.6 23.8-44.4 18.8-84.3 45.7-118.6 79.9s-61.1 74.1-79.9 118.6c-19.5 46-29.3 94.9-29.3 145.2 0 50.3 9.9 99.2 29.3 145.2 18.8 44.4 45.7 84.3 79.9 118.6 34.2 34.2 74.1 61.1 118.6 79.9 46 19.5 94.9 29.3 145.2 29.3 50.3 0 99.2-9.9 145.2-29.3 44.4-18.8 84.3-45.7 118.6-79.9 34.2-34.2 61.1-74.1 79.9-118.6 19.5-46 29.3-94.9 29.3-145.2s-9.9-99.3-29.3-145.3z"
                  p-id="4519" v-bind:fill="icon_color('info')"></path>
              </svg>
            
            </div>
            <div>小圈子</div>
          </div>
          <div class="sideBar_select sideBar_select_slash">
            <div style="flex:1;line-height: 20px;">私信<span ref="click_nothing" @click="1==1"></span></div>
            <el-popover placement="top-start" width="440" trigger="click" :visible-arrow="false" @show="popver_show()"
               @after-leave="popver_show_leave()">
              <div class="maspop_can">
                <div class="maspop_can_head">
                  <h5>选择朋友</h5>
                  <p>你还可以添加{{create_chat_max_members}}位朋友。</p>
                  <div class="maspop_can_head_input" ref="maspop">
                    <div class="maspop_can_head_input_item" v-for="sf in create_chat_had_select_friend_list"
                      :key="sf.uid">
                      <div>{{sf.name}}</div>
                      <span><svg @click="sf.selected=false;create_chat_max_members+=1;" t="1585204143380" class="icon"
                          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6225"
                          width="12" height="12">
                          <path
                            d="M512 620.544l253.3376 253.3376a76.6976 76.6976 0 1 0 108.544-108.544L620.6464 512l253.2352-253.3376a76.6976 76.6976 0 1 0-108.544-108.544L512 403.3536 258.6624 150.1184a76.6976 76.6976 0 1 0-108.544 108.544L403.3536 512 150.1184 765.3376a76.6976 76.6976 0 1 0 108.544 108.544L512 620.6464z"
                            p-id="6226" fill="#c09282"></path>
                        </svg></span>
                    </div>
                    <input placeholder="查找好友" />
                  </div>
                </div>
                <div class="maspop_can_body">
                  <div v-for="fri in create_chat_list_friends_to_select" :key="fri.uid" class="maspop_can_body_item">
                    <user-head style="height: 32px;width: 32px;" :headimg="fri.headimg" v-bind:with_status="true"
                      v-bind:user_status="fri.status" v-bind:bg_color="'#2f3136'"></user-head>
                    <div class="maspop_can_body_item_name">{{fri.name}}<span>#{{fri.fix_id}}</span></div>
                    <div>
                      <el-checkbox @change="cbox_change($event)" v-model="fri.selected"
                        :disabled="create_chat_max_members<=0&&!fri.selected"></el-checkbox>
                    </div>
                  </div>

                </div>
                <div class="maspop_can_footer">
                  <button @click="create_chat(create_chat_had_select_friend_list)">创建群组私信</button>
                </div>
              </div>
              <div slot="reference" style="color: rgb(168, 168, 168);">
                <el-tooltip class="item" effect="dark" content="创建私信" placement="top" :enterable="false">
                  <svg x="0" y="0" class="privateChannelRecipientsInviteButtonIcon-cXLJ7f icon-22AiRD"
                    aria-hidden="false" width="16" height="16" viewBox="0 0 18 18">
                    <polygon fill-rule="nonzero" fill="currentColor"
                      points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon>
                  </svg>
                </el-tooltip>
              </div>
            </el-popover>
          </div>

          <div class="sideBar_select" v-for="chat_item in getChatList" v-bind:key="chat_item.uid"
            @click="sideBar_select_click('chat',chat_item)" @mouseover="sideBar_select_hover=chat_item.uid"
            @mouseleave="sideBar_select_hover=0"
            v-bind:class="{sideBar_select_hover_active: sideBar_select_hover==chat_item.uid&&sideBar_select_select!=chat_item.uid, sideBar_select_select_active:sideBar_select_select==chat_item.uid}">
            <div class="sideBar_select_w" @contextmenu="showContextMenu($event, chat_item)">
              <el-badge :value="chat_item.unread_count" :hidden="chat_item.unread_count<=0" :max="99" class="item">
              <user-head style="height: 32px;width: 32px;" :headimg="chat_item.avatar"
                v-bind:with_status="!chat_item.is_group" v-bind:user_status="chat_item.user_status"
                v-bind:bg_color="'#2f3136'"></user-head>
              </el-badge>
              <div class="sideBar_select_ic">{{chat_item.chat_name}}</div>
              <div v-if="sideBar_select_hover==chat_item.uid&&!chat_item.is_group" @click="delete_chat(chat_item.uid)">
                <svg class="closeIcon-rycxaQ" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sideBar_me">
        <div class="sideBar_me_in" @mouseover="me_status_fixid_switch=false" @mouseleave="me_status_fixid_switch=true">
          <div style="position:relative;" ref="changing_status_el">
            <div class="sideBar_me_head" @click="changing_status = !changing_status" @mouseover="head_hover=true"
              @mouseleave="head_hover=false">
              <div v-bind:class="{ sideBar_me_head_hover: head_hover }"></div>
              <user-head style="height: 32px;width: 32px;" :headimg="me_base.me_headimg" v-bind:with_status="true" v-bind:user_status="me_status"
                v-bind:bg_color="'#2f3136'"></user-head>
            </div>

            <div v-if="changing_status" class="sideBar_me_change_status">
              <div class="sideBar_me_change_status_item" @click="change_status(1)"
                :class="{sideBar_me_change_status_item_active:me_status==1}">
                <div class="smci_0">
                  <div class="smci_1">
                    <user-status style="width: 14px;height: 14px;" :now_status="1"></user-status>
                  </div>
                  <div class="smci_2">在线</div>
                </div>
              </div>
              <div class="sideBar_me_change_status_slash"></div>
              <div class="sideBar_me_change_status_item" @click="change_status(2)"
                :class="{sideBar_me_change_status_item_active:me_status==2}">
                <div class="smci_0">
                  <div class="smci_1">
                    <user-status style="width: 14px;height: 14px;" :now_status="2"></user-status>
                  </div>
                  <div class="smci_2">闲置</div>
                </div>
              </div>
              <div class="sideBar_me_change_status_item" @click="change_status(3)"
                :class="{sideBar_me_change_status_item_active:me_status==3}">
                <div class="smci_0">
                  <div class="smci_1">
                    <user-status style="width: 14px;height: 14px;" :now_status="3"></user-status>
                  </div>
                  <div class="smci_2">请勿打扰</div>
                </div>
                <p>您将不会受到任何桌面通知。</p>
              </div>
              <div class="sideBar_me_change_status_item" @click="change_status(0)"
                :class="{sideBar_me_change_status_item_active:me_status==0}">
                <div class="smci_0">
                  <div class="smci_1">
                    <user-status style="width: 14px;height: 14px;" :now_status="0"></user-status>
                  </div>
                  <div class="smci_2">隐身</div>
                </div>
                <p>您将不会显示在线，但可以使用所有功能。</p>
              </div>
              <div class="sideBar_me_change_status_slash"></div>
              <div class="sideBar_me_change_status_item" @click="dialogStatusVisible=true">
                <div class="smci_0">
                  <div v-if="me_all_status.self_defind_status!=''" class="smci_0">
                    <div class="smci_1 smci_3">
                      {{me_all_status.self_defind_status}}
                    </div>
                    <div>
                      <svg @click="clear_status()" t="1585471045811" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="27256" width="16" height="16">
                        <path
                          d="M512 32C246.4 32 32 246.4 32 512s214.4 480 480 480 480-214.4 480-480S777.6 32 512 32m201.6 681.6c-12.8 12.8-35.2 12.8-48 0L512 560 358.4 713.6c-12.8 12.8-35.2 12.8-48 0-12.8-12.8-12.8-35.2 0-48L464 512 310.4 358.4c-12.8-12.8-12.8-35.2 0-48 12.8-12.8 35.2-12.8 48 0L512 464l153.6-153.6c12.8-12.8 35.2-12.8 48 0 12.8 12.8 12.8 35.2 0 48L560 512l153.6 153.6c16 12.8 16 35.2 0 48m0 0z"
                          p-id="27257" fill="#bfbfbf"></path>
                      </svg>
                    </div>
                  </div>
                  <div v-else class="smci_0">
                    <div class="smci_1">
                      😁
                    </div>
                    <div class="smci_2">设置自定义状态</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sideBar_me_info">
            <div class="sideBar_me_info_name">{{me_base.me_name}}</div>
            <div class="sideBar_me_info_num" v-if="me_all_status.self_defind_status!=''&&me_status_fixid_switch">{{me_all_status.self_defind_status}}</div>
            <div class="sideBar_me_info_num" v-else>#{{me_base.me_fixid}}</div>
          </div>
          <div class="sideBar_me_setting">
            <div @click="$store.commit('switch_microphone')">
              <div style="position: relative;">
                <img style="z-index:3" :src="require('../assets/microphone.svg')" alt="" />
                <div class="sideBar_me_setting_del" v-if="!me_open_microphone">
                  <img style="z-index:4" :src="require('../assets/del.svg')" alt="" />
                </div>
              </div>
            </div>
            <div @click="$store.commit('switch_earphone')">
              <div style="position: relative;">
                <img style="z-index:3" :src="require('../assets/earphone.svg')" alt="" />
                <div class="sideBar_me_setting_del" v-if="!me_open_earphone">
                  <img style="z-index:4" :src="require('../assets/del.svg')" alt="" />
                </div>
              </div>
            </div>
            <div @click="dialogSettingVisible=true">
              <img :src="require('../assets/setting.svg')" alt="" />
            </div>

          </div>
        </div>
      </div>

    </div>

    <div class="chatAera">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <el-dialog :fullscreen="true" :visible.sync="dialogSettingVisible">
      <setting-dialog @close="dialogSettingVisible=false"></setting-dialog>
    </el-dialog>
    <template>
      <el-dialog class="status_dialog" top="25vh" width="440" :visible.sync="dialogStatusVisible">
        <div class="me_s_d_c">
          <div class="me_s_d_c_img">
            <img src="../assets/undraw_home_cinema_l7yl.svg">
          </div>
          <div class="me_s_d_c_head">
            <div>
              <svg @click="dialogStatusVisible=false" t="1584688386695" class="icon" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2639" width="16" height="16">
                <path
                  d="M604.010237 516.920604 1003.934137 116.996704C1030.645959 90.284883 1030.645959 46.861051 1003.934137 20.14923 977.153827-6.631082 933.798482-6.631082 907.086661 20.14923L507.162763 420.07313 116.964706 29.875073C90.252885 3.163252 46.829053 3.163252 20.117232 29.875073-6.66308 56.655385-6.66308 100.010725 20.117232 126.722546L410.31529 516.920604 35.322423 891.913471C8.54211 918.625293 8.54211 962.049126 35.322423 988.760942 62.034243 1015.541258 105.389583 1015.541258 132.169896 988.760942L507.162763 613.768077 891.881473 998.486785C918.593295 1025.267102 961.948633 1025.267102 988.728944 998.486785 1015.50926 971.774963 1015.50926 928.419625 988.728944 901.639315L604.010237 516.920604Z"
                  p-id="2640" fill="#b9bbbe"></path>
              </svg>
              <h5>设置自定义状态</h5>
            </div>
          </div>
          <div class="me_s_d_c_item">
            <p>在忙什么呢，{{me_base.me_name}}？</p>
            <div class="me_s_d_c_item_input me_s_d_c_item_input_1">
              <div>
                <el-popover placement="left-end" width="400" :visible-arrow="false" trigger="click"
                  v-model="status_dialog_visible">
                  <input-emoji v-on:emj="self_df_status_emj=$event;status_dialog_visible=false"></input-emoji>
                  <div slot="reference">
                    <h5 v-if="self_df_status_emj">{{self_df_status_emj}}</h5>
                    <svg v-else t="1585470977059" class="icon" viewBox="0 0 1029 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="25586" width="22" height="22">
                      <path
                        d="M441.638766 380.342857c0 43.885714-36.571429 80.457143-80.457143 80.457143-43.885714 0-80.457143-36.571429-80.457143-80.457143 0-43.885714 36.571429-80.457143 80.457143-80.457143 43.885714 0 80.457143 36.571429 80.457143 80.457143m307.2 0c0 43.885714-36.571429 80.457143-80.457143 80.457143-43.885714 7.314286-80.457143-29.257143-80.457143-80.457143 0-43.885714 36.571429-80.457143 80.457143-80.457143 43.885714 0 80.457143 36.571429 80.457143 80.457143m14.628571 270.628572c-21.942857 109.714286-138.971429 190.171429-248.685714 190.171428-117.028571 0-226.742857-80.457143-248.685714-190.171428 0-29.257143 21.942857-43.885714 36.571428-43.885715h424.228572c7.314286 0 43.885714 0 36.571428 43.885715M514.781623 73.142857c226.742857 0 409.6 168.228571 438.857143 394.971429 21.942857 241.371429-146.285714 460.8-387.657143 482.742857h-43.885714c-226.742857 0-409.6-168.228571-438.857143-394.971429-29.257143-241.371429 146.285714-453.485714 387.657143-482.742857H514.781623m0-73.142857h-51.2C178.32448 36.571429-26.47552 285.257143 2.781623 563.2 32.038766 826.514286 258.781623 1024 514.781623 1024h58.514286c277.942857-29.257143 482.742857-285.257143 453.485714-563.2C997.52448 197.485714 770.781623 0 514.781623 0"
                        p-id="25587" fill="#bfbfbf"></path>
                    </svg>
                  </div>
                </el-popover>
              </div>
              <input v-model="self_df_status_msg" />
              <div>
                <svg v-if="is_self_df_status" @click="self_df_status_msg='';self_df_status_emj=''" t="1585471045811"
                  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27256"
                  width="18" height="18">
                  <path
                    d="M512 32C246.4 32 32 246.4 32 512s214.4 480 480 480 480-214.4 480-480S777.6 32 512 32m201.6 681.6c-12.8 12.8-35.2 12.8-48 0L512 560 358.4 713.6c-12.8 12.8-35.2 12.8-48 0-12.8-12.8-12.8-35.2 0-48L464 512 310.4 358.4c-12.8-12.8-12.8-35.2 0-48 12.8-12.8 35.2-12.8 48 0L512 464l153.6-153.6c12.8-12.8 35.2-12.8 48 0 12.8 12.8 12.8 35.2 0 48L560 512l153.6 153.6c16 12.8 16 35.2 0 48m0 0z"
                    p-id="27257" fill="#bfbfbf"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="me_s_d_c_item">
            <p>在此时间后清除</p>
            <div class="me_s_d_c_item_input me_s_d_c_item_input_2" @click="status_time_downlist=!status_time_downlist">
              {{status_time_downlist_value.dsc}}
            </div>
            <span class="me_s_d_c_item_input_downlist" v-if="status_time_downlist">
              <div :class="{me_s_d_c_item_input_downlist_active: status_time_downlist_value.num==0}"
                @click="status_time_downlist_value.num=0;status_time_downlist_value.dsc='今天';status_time_downlist=false">
                今天</div>
              <div :class="{me_s_d_c_item_input_downlist_active: status_time_downlist_value.num==30}"
                @click="status_time_downlist_value.num=30;status_time_downlist_value.dsc='30 分钟';status_time_downlist=false">
                30 分钟</div>
              <div :class="{me_s_d_c_item_input_downlist_active: status_time_downlist_value.num==120}"
                @click="status_time_downlist_value.num=120;status_time_downlist_value.dsc='2 小时';status_time_downlist=false">
                2 小时</div>
              <div :class="{me_s_d_c_item_input_downlist_active: status_time_downlist_value.num==240}"
                @click="status_time_downlist_value.num=240;status_time_downlist_value.dsc='4 小时';status_time_downlist=false">
                4 小时</div>
              <div :class="{me_s_d_c_item_input_downlist_active: status_time_downlist_value.num==-1}"
                @click="status_time_downlist_value.num=-1;status_time_downlist_value.dsc='不要清空';status_time_downlist=false">
                不要清空</div>
            </span>
          </div>
          <div class="me_s_d_c_footer">
            <button @click="save_status()">保存</button>
            <button @click="dont_save_status()">取消</button>
          </div>
        </div>
      </el-dialog>
    </template>
    <el-dialog class="search_dialog" top="25vh" width="570" :visible.sync="dialogGlobalSearchVisible">
      <div class="search_dialog_container">
        <div class="search_dialog_input">
            <input placeholder="想要去哪里？"/>
        </div>
        <div class="search_dialog_list">

        </div>
        <div class="search_dialog_bottom">😁 😂 😃 😄 😅 😆 😉 😊 😋 😌 😍 😏 😒  😓 😁 😂 😃 😄 😅</div>
      </div>
    </el-dialog>
    <context-menu :show="contextMenu.contextMenuVisible" :offset="contextMenu.contextMenuOffset"
      @update:show="show => (contextMenu.contextMenuVisible = show)">
      <div class="contextMenu_container">
          <div class="contextMenu_master_item" v-if="!contextMenu.contextMenuIsGroup" >个人资料</div>
          <div class="contextMenu_master_item" v-if="!contextMenu.contextMenuIsGroup">呼叫</div>
          <div class="contextMenu_master_item" v-if="!contextMenu.contextMenuIsGroup">编辑备注</div>
          <div class="contextMenu_master_item" v-if="!contextMenu.contextMenuIsGroup">关闭私信</div>
          <div class="contextMenu_master_item_splash" v-if="!contextMenu.contextMenuIsGroup"></div>

          <el-popover
            placement="right-start"
            width="188"
            :visible-arrow = "false"
            trigger="hover">
            <div class="contextMenu_container">
                <div class="contextMenu_master_item">no content</div>
            </div>
          <div class="contextMenu_master_item" slot="reference" v-show="!contextMenu.contextMenuIsGroup">邀请至服务器<svg t="1585640971258" class="icon" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29022" width="16" height="16"><path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z" p-id="29023" fill="#8a8a8a"></path></svg></div>
          </el-popover>
          
          <div class="contextMenu_master_item contextMenu_master_item_del" v-if="!contextMenu.contextMenuIsGroup">删除好友</div>
          <div class="contextMenu_master_item" v-if="!contextMenu.contextMenuIsGroup">屏蔽</div>
          <div class="contextMenu_master_item_splash" v-if="!contextMenu.contextMenuIsGroup"></div>
          <el-popover
            placement="right-start"
            width="188"
            :visible-arrow = "false"
            trigger="hover">
            <div class="contextMenu_container">
                <div class="contextMenu_master_item">持续30分钟</div>
                <div class="contextMenu_master_item">持续1小时</div>
                <div class="contextMenu_master_item">持续8小时</div>
                <div class="contextMenu_master_item">持续24小时</div>
                <div class="contextMenu_master_item">直到我再次开启</div>
            </div>
          <div class="contextMenu_master_item" slot="reference"  v-show="!contextMenu.contextMenuIsGroup">将其静音<svg t="1585640971258" class="icon" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29022" width="16" height="16"><path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z" p-id="29023" fill="#8a8a8a"></path></svg></div>
          </el-popover>


          <div class="contextMenu_master_item"  v-if="contextMenu.contextMenuIsGroup">邀请</div>
          <div class="contextMenu_master_item" v-if="contextMenu.contextMenuIsGroup">更改 图标</div>
          <div class="contextMenu_master_item_splash" v-if="contextMenu.contextMenuIsGroup"></div>
          <el-popover
            placement="right-start"
            width="188"
            :visible-arrow = "false"
            trigger="hover">
            <div class="contextMenu_container">
                <div class="contextMenu_master_item">持续30分钟</div>
                <div class="contextMenu_master_item">持续1小时</div>
                <div class="contextMenu_master_item">持续8小时</div>
                <div class="contextMenu_master_item">持续24小时</div>
                <div class="contextMenu_master_item">直到我再次开启</div>
            </div>
          <div class="contextMenu_master_item" slot="reference" v-show="contextMenu.contextMenuIsGroup">静音对话<svg t="1585640971258" class="icon" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29022" width="16" height="16"><path d="M606.688 856.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.188-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z" p-id="29023" fill="#8a8a8a"></path></svg></div>
          </el-popover>
          <div class="contextMenu_master_item_splash" v-if="contextMenu.contextMenuIsGroup"></div>
          <div class="contextMenu_master_item contextMenu_master_item_del" v-if="contextMenu.contextMenuIsGroup" @click="exitGroup(contextMenu.contextMenuItem)">退出组</div> 
      </div>
    </context-menu>
  </div>
</template>


<script>
  import {
    mapState,
    mapGetters
  } from 'vuex';
  let _ = require('lodash')
  import myhead from './common/myhead.vue';
  import status from './common/status.vue';
  import emoji from './chat/emoji'
  import setting from './setting'
  export default {
    name: 'master',
    data: function () {
      return {
        head_hover: false,
        dialogStatusVisible: false,
        dialogSettingVisible: false,
        dialogGlobalSearchVisible: false,
        visible_create_chat: false,
        me_status_fixid_switch: true,
        changing_status: false,
        sideBar_select_hover: -1,
        sideBar_select_select: 'friend',
        self_df_status_emj: '',
        self_df_status_msg: '',
        status_dialog_visible: false,
        status_time_downlist: false,
        status_time_downlist_value: {
          num: 0,
          dsc: '今天'
        },
        chatlistTimeout: null,
        create_chat_list_friends_to_select: [],
        create_chat_max_members: 0,
        contextMenu: {
          contextMenuItem: {},
          contextMenuIsGroup: false,
          contextMenuVisible: false,
          contextMenuOffset: {
            left: 0,
            top: 0
          }
        }
      }
    },
    created: function () {
      this.sideBar_select_select = this.selectActive(this.$route.path)
      
    },
    mounted: function () {
      document.addEventListener('click', e => {
        if (!this.$refs.changing_status_el.contains(e.target)) {
          this.changing_status = false //点击其他区域关闭
        }
      })
      this.AxiosGetChatList()
      this.chatlistTimeout = setInterval(this.AxiosGetChatList,20000)
      
    },
    unmounted:function(){
      window.clearInterval(this.chatlistTimeout)
    },
    methods: {
      AxiosGetChatList(){
        this.$axios.get('http://localhost:9876/api/chat_list')
        .then((response) =>{
            console.log("chat_list=>",response);
            if(response.status == 200 ){
              let code = response.data.code
              if(code == 1001){
                this.$store.commit("set_chatlist",response.data.data)
              }else if(code == 2010){
                window.sessionStorage.clear();
                this.$router.push('/')
              }else{
                this.$message.error(response.data.message)
              }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      showContextMenu(e, chat_item) {
        console.log(chat_item)
        e.preventDefault();
        this.contextMenu.contextMenuItem = chat_item
        this.contextMenu.contextMenuIsGroup = chat_item.is_group
        this.contextMenu.contextMenuVisible = true;
        this.contextMenu.contextMenuOffset = {
          left: e.pageX - 8,
          top: e.pageY - 10
        };
      },
      exitGroup(chat){
        if(chat.is_group){
          this.$axios.post('http://localhost:9876/api/exit_group', {gid: chat.uid})
          .then((response) =>{
              
            if(response.status == 200){
                let code = response.data.code
                if(code == 1001){
                    this.$message({ message: '退出成功',type: 'success'})
                    this.$store.commit("chatlist_delete",chat.uid)
                     this.$router.push("/")
                }else if(code == 2011){
                    this.$message({ message: '请重试',type: 'warning'})
                }else if(code == 2010){
                    window.sessionStorage.clear();
                    this.$router.push("/")
                }else{
                    this.$message.error(response.data.message)
                }
            }else{
                this.$message.error(response.status)
            }
        })
        .catch(function (error) {
            this.$message.error(error)
        });
        this.$refs.click_nothing.click()
        }

      },
      cbox_change(v) {
        if (v) {
          this.create_chat_max_members -= 1
        } else {
          this.create_chat_max_members += 1
        }
        console.log('cbox_change')
        this.$refs.maspop.scrollTop = -10000
      },
      clear_status() {
        this.$store.commit('clear_status')
        event.stopPropagation()
        this.self_df_status_emj = '',
          this.self_df_status_msg = '',
          this.status_time_downlist_value = {
            num: 0,
            dsc: '今天'
          }
          this.$axios.post("http://localhost:9876/api/change_sd_status",{
          self_defind_status: "",
          self_defind_status_deadline: 0
          })
        .then((response)=>{
          if(response.data.code == 2010){
                window.sessionStorage.clear();
                this.$router.push('/')
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      save_status() {
        this.dialogStatusVisible = false
        this.$store.commit('set_sd_status', {
          msg: this.self_df_status_emj + this.self_df_status_msg,
          keep_time: this.status_time_downlist_value.num
        })

        this.$axios.post("http://localhost:9876/api/change_sd_status",{
          self_defind_status: this.self_df_status_emj + this.self_df_status_msg,
          self_defind_status_deadline: this.status_time_downlist_value.num
          })
        .then((response)=>{
          if(response.data.code == 2010){
                window.sessionStorage.clear();
                this.$router.push('/')
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      dont_save_status() {
        this.dialogStatusVisible = false
        this.self_df_status_emj = ''
        this.self_df_status_msg = ''

      },
      goToChat(uid){
            let idx = _.findIndex(this.$store.state.chat_list.clist, function(o) { return o.uid == uid; })
            if(idx<0){
                let fidx = _.findIndex(this.$store.state.myfriends.friends, function(o) { return o.uid == uid; })
                this.$store.commit("chatlist_add",{
                    uid: uid,
                    name: this.$store.state.myfriends.friends[fidx].name,
                    avatar: this.$store.state.myfriends.friends[fidx].headimg
                })

                this.$axios.post('http://localhost:9876/api/chat_open', {uid: uid})
                .then((response) =>{console.log(response);})
                .catch(function (error) {console.log(error);})
            }

            this.$router.push({
                    name: 'chat',
                    params: {
                    id: uid,
                    isgroup: false
                }
            }).catch(() => {})
        },
      selectActive: function (path) {

        const vpath = path.split('/')
        if (vpath.length >= 3 && vpath[1] == 'master') {
          if (vpath[2] == '@me')
            return 'friend'
          else if (vpath[2] == 'infomation')
            return 'info'
          else
            return vpath[3]
        }

        return -1
      },
      icon_color: function (e) {
        if (this.sideBar_select_select == e) {
          return 'rgb(250, 250, 250)'
        } else if (this.sideBar_select_hover == e) {
          return 'rgb(212, 212, 212)'
        }
        return '#8a8a8a'
      },
      sideBar_select_click: function (e, item) {
         
        if (e == 'chat') {  
          this.$store.commit("clear_unread",item.uid)
          console.log("goto:",item)
          this.$router.push({
            name: 'chat',
            params: {
              id: item.uid,
              name: item.chat_name,
              isgroup: item.is_group
            }
          }).catch(() => {})
          this.$axios.post("http://localhost:9876/api/clear_unread",{
            uid: item.uid,
            isgroup: item.is_group
          }).then((response)=>{})
          .catch((error)=>{})
        } else {
          if (e == 'friend') {
            this.$router.push({
              name: 'me'
            }).catch(() => {})
          } else if (e == 'info') {
            this.$router.push({
              name: 'infomation'
            }).catch(() => {})
          }
        }

       

      },
      delete_chat: function (chat_id) {
        this.$router.push({path: '/master/@me'})
        this.$store.commit('chatlist_delete', chat_id)
        this.$axios.post('http://localhost:9876/api/chat_close', {uid: chat_id})
        .then((response) =>{console.log(response);})
        .catch(function (error) {console.log(error);})
        
      },
      popver_show_leave: function () {
        this.create_chat_list_friends_to_select = []

      },
      popver_show: function () {
        for (let v of this.friend_list) {
          let tmp = {
            ...v,
            selected: false
          }
          this.create_chat_list_friends_to_select.push(tmp)
        }
        this.create_chat_max_members = 9
        this.box = this.$refs.maspop
        this.box.addEventListener("mousewheel", e => {
          //计算鼠标滚轮滚动的距离
          let v = -e.wheelDelta / 2;
          this.box.scrollLeft += v;
          //阻止浏览器默认方法
          e.preventDefault();
        }, false);
      },
      change_status: function (s) {
        this.$store.commit('switch_status', s)
        this.changing_status = false
        this.$axios.post("http://localhost:9876/api/change_status",{status: s})
        .then((response)=>{
          if(response.data.code == 2010){
                window.sessionStorage.clear();
                this.$router.push('/')
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      create_chat(member) {
        console.log(member)
        let count = member.length
        let item = {}
        if (count <= 0) {
          return
        } else if (count == 1) {
          let uid = this.create_chat_had_select_friend_list[0].uid
          this.goToChat(uid)

        } else {

          let chat_name_list = []
          let member_id_list = []
          chat_name_list.push(this.me_base.me_name)
          member_id_list.push(this.me_base.me_id)
          for (let f of member) {
            chat_name_list.push(f.name)
            member_id_list.push(f.uid)
          }

          let body = {
            name: chat_name_list.join(','),
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dvniigoyg8s7uEI2AwX3PFdiq1rjy5LfY8OOj-k1BrS3pNs2r3Xs&s',
            members: member_id_list
          }
          this.$axios.post('http://localhost:9876/api/group', body)
          .then((response) =>{
              console.log(response);
              if(response.status == 200 && response.data.code == 1001){
                  this.$message({ message: '创建成功',type: 'success'})
                  this.$store.commit('chatlist_group_add',{
                    uid: response.data.data,
                    name: chat_name_list.join(','),
                    avatar: body.avatar,
                    member_count: body.members.length,
                  })
              }else if(response.data.code == 2010){
                window.sessionStorage.clear();
            }else{
                  this.$message.error(response.data.message)
              }
          })
          .catch(function (error) {
              this.$message.error(error)
          });
        }
            
        this.$refs.click_nothing.click()
      }
      
    },
    computed: {
      create_chat_had_select_friend_list() {
        return this.create_chat_list_friends_to_select.filter((v) => {
          return v.selected
        })
      },
      friend_list() {
        return this.$store.state.myfriends.friends
      },
      is_self_df_status() {
        return this.self_df_status_emj || this.self_df_status_msg
      },
      me_open_microphone() {
        return this.$store.state.me.setting.me_open_microphone
      },
      me_open_earphone() {
        return this.$store.state.me.setting.me_open_earphone
      },
      me_base() {
        return this.$store.state.me.base
      },
      me_status() {
        return this.$store.state.me.base.me_status.status
      },
      me_all_status() {
        return this.$store.state.me.base.me_status
      },
      ...mapGetters([
        'getChatList'
      ])
    },
    watch: {
      '$route'(to, from) {
        this.sideBar_select_select = this.selectActive(to.path)
        // console.log(toDepth)
      }
    },
    components: {
      'user-head': myhead,
      'user-status': status,
      'input-emoji': emoji,
      'setting-dialog':setting
    }

  }

</script>


<style>
:root {
    --elevation-low: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05), 0 2px 0 rgba(4, 4, 5, 0.05)
  }

  svg {
    filter: unset;
  }

  .master_can {
    height: 100%;
    display: grid;
    grid-template-columns: 240px auto;

  }

  .sideBar {
    background-color: #2f3136;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sideBar_tool {
    background-color: #2f3136;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 0px;
    padding: 4px;
  }

  .sideBar_me {
    height: 52px;
    background-color: #292b2f;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
  }

  .sideBar_me_in {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 90px 3fr;
    align-content: center;
  }

  .sideBar_search {
    height: 48px;
    box-shadow: var(--elevation-low);

    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f3136;
  }

  .sideBar_search div {
    border: 1px solid transparent;
    width: 90%;
    height: 60%;
    background-color: #202225;
    border-radius: 4px;
    color: white;
    text-align: left;
    color: #72767d;
    padding: 4px;
    font-size: 13px;
    cursor: pointer;
  }

  .sideBar_list {

    overflow-x: hidden;
    overflow-y: scroll;

  }

  .sideBar_list::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
  }

  .sideBar_list::-webkit-scrollbar-thumb {
    border-radius: 8px;
    width: 4px;
    box-shadow: 4px 0 0 #212225 inset;
  }


  .sideBar_select {
    height: 42px;
    color: rgb(153, 153, 153);
    margin: 2px 5px;
    border-radius: 4px;
  }

  .sideBar_select_slash {
    background-color: unset;
    padding: 18px 8px 4px 12px;
    height: 40px;

    font-size: 12px;
    line-height: 16px;
    font-weight: 600;

    color: #8e9297;
    display: flex;
    flex-direction: row;
  }

  .sideBar_select_slash:hover {
    color: rgb(189, 189, 189);
  }

  .chatAera {
    background-color: #36393f;
  }

  .sideBar_me_head {
    position: relative;
    height: 32px;
    margin-right: 8px;

  }

  .sideBar_me_head img {
    width: 32px;
    height: 32px;
    border-radius: 50px;
  }

  .sideBar_me_info {
    height: 32px;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
    line-height: 10px;

  }

  .sideBar_me_info_name {
    height: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  .sideBar_me_info_num {
    height: 40%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #b9bbbe;
    font-size: 12px;
    font-weight: 450;
    line-height: 10px;
    vertical-align: baseline;
  }


  .sideBar_me_setting {
    height: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
  }

  .sideBar_me_setting div {

    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;

  }

  .sideBar_me_setting div:hover {

    background-color: #36393f;
    border-radius: 5px;
  }

  .sideBar_me_setting_del {
    position: absolute;
  }

  .sideBar_me_head_satus {
    position: absolute;
    left: 20px;
    top: 19px;
    height: 16px;
    width: 16px;
    background-color: rgb(67, 181, 129);
    border: 3px solid #292b2f;
    border-radius: 50px;
  }

  .sideBar_me_head_hover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: #292b2f6e;
    z-index: 999;
  }

  .sideBar_me_change_status {
    position: absolute;
    width: 220px;
    bottom: 44px;
    left: 0;
    /* padding: 5px 10px 5px 9px; */
    transition: transform .12s ease-out, opacity .12s ease-out, -webkit-transform .12s ease-out;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    background-color: #18191c;
    display: flex;
    border-radius: 4px;
    padding: 6px 4px;
    flex-direction: column;
  }

  .sideBar_me_change_status_slash {
    /* width: 100%; */
    height: 1px;
    background-color: rgba(88, 88, 88, 0.171);
    margin: 4px 8px;
  }

  .sideBar_me_change_status_item {

    min-height: 32px;
    border-radius: 4px;
    margin: 2px 2px;
  }

  .sideBar_me_change_status_item>p {
    font-size: 11px;
    color: #72767d;
    padding-left: 30px;
    margin: unset;
    margin-top: -7px;
    margin-bottom: 2px;
  }

  .smci_0 {
    width: 100%;
    min-height: 32px;
    line-height: 14px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .sideBar_me_change_status_item_active {
    background-color: rgba(94, 94, 94, 0.315);
  }

  .sideBar_me_change_status_item:hover {
    background-color: rgba(128, 128, 128, 0.315);
  }

  .smci_1 {
    margin: 0px 8px;

  }

  .smci_3_active {
    background-color: rgba(128, 128, 128, 0.315);
  }

  .smci_2 {
    font-size: 14px;
    color: honeydew;
  }

  .smci_2_ex>h6 {
    font-size: 14px;
    color: honeydew;
  }

  .sideBar_select_h {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .sideBar_select_h div:nth-child(1) {
    margin-left: 12px;
    margin-right: 12px;
  }

  .sideBar_select_h div:nth-child(2) {
    flex: 1;
    margin-left: 4px;
  }

  .closeIcon-rycxaQ {
    display: block;
    width: 16px;
    height: 16px;
    color: rgb(212, 212, 212);
  }

  .sideBar_select_w {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }

  .sideBar_select_ic {
    flex: 1;
    font-size: 16px;
    padding-left: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }

  .sideBar_select_hover_active {
    color: rgb(212, 212, 212);
    background-color: rgba(255, 255, 255, 0.048);
  }

  .sideBar_select_select_active {
    color: rgb(250, 250, 250);
    background-color: rgba(255, 255, 255, 0.11);
  }

  .sideBar_select_head {
    height: 32px;
    width: 32px;

  }

  .el-popover {
    background-color: #36393f;
    border: unset;
    padding: unset;
  }

  .maspop_can {
    min-height: 350px;
    max-height: 500px;
    border: 1px solid #16181a;
    border-radius: 4px;
    /* background-color: #2754ad; */
    display: flex;
    flex-direction: column;
  }

  .maspop_can_head {
    height: 134px;
    padding: 20px;

  }

  .maspop_can_head>h5 {
    font-size: 16px;
    ;
    color: #eeeeee;
    font-weight: bold;
  }

  .maspop_can_head>p {
    font-size: 12px;
    ;
    line-height: 10px;
    color: #b9bbbe;
  }

  .maspop_can_head_input {
    width: 400px;
    height: 34px;
    background-color: #202225;
    border-radius: 4px;
    margin-top: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 1px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .maspop_can_head_input::-webkit-scrollbar {
    display: none;
  }

  .maspop_can_footer {
    flex-shrink: 0;
    display: flex;
    height: 78px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(99, 99, 99, 0.575);
  }

  .maspop_can_footer>button {
    height: 38px;
    width: 400px;
    outline: none;
    border: unset;
    border-radius: 4px;
    background-color: #6b84e0;
    color: white;
    cursor: pointer;
  }

  .maspop_can_footer>button:hover {
    background-color: #4f6fe4;
  }

  .maspop_can_head_input_item {
    display: block;
    margin: 1px;
    padding: 0px 8px;
    height: 30px;
    /* max-width: 100px; */
    background-color: #36393f;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    /* text-overflow: ellipsis; */


  }

  .maspop_can_head_input>input {
    width: 100%;
    min-width: 200px;
    outline: none;
    height: 30px;
    border: unset;
    background-color: inherit;
    padding: 1px 8px;
    color: #DCDDDE;
    font-weight: 600;

  }

  .maspop_can_head_input_item>div {
    color: #DCDDDE;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .maspop_can_head_input_item>span {
    margin-left: 4px;
    cursor: pointer;
  }

  .maspop_can_body {
    flex: 1;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    overflow-y: scroll;
    padding: 0px 16px;
    /* padding-top: 30px; */
  }

  .maspop_can_body::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
  }

  .maspop_can_body::-webkit-scrollbar-thumb {
    border-radius: 8px;
    width: 4px;
    box-shadow: 4px 0 0 #676768 inset;

  }

  .maspop_can_body_item {
    margin: 1px 0px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 8px;
  }

  .maspop_can_body_item:hover {
    background-color: #3e4148;
  }

  .maspop_can_body_item_name {
    flex: 1;
    font-size: 15px;
    color: white;
    margin: 0px 10px;
    /* font-weight: bold; */
  }

  .maspop_can_body_item_name>span {
    color: #b3b2b2;
    padding-left: 4px;
  }

  .el-xxx {
    width: 22px;
    height: 22px;
  }

  .el-checkbox__inner {
    width: 22px;
    height: 22px;
    background-color: #3e4148;
  }

  .el-checkbox__inner::after {
    height: 14px;
    left: 8px;
    border-width: 3px;
    /* border: 3px solid #FFF; */
  }

  .el-checkbox {
    margin: unset;
  }

  .master_can .el-dialog {
    width: 100%;
    height: 100%;
    max-width: unset;
    border-radius: unset;

  }

  .master_can .el-dialog__body {
    padding: unset;
    width: 100%;
    height: 100%;
  }

  .master_can .el-dialog__header {
    display: none;
  }

  .

  .status_dialog .el-dialog {
    width: 440px;
    height: unset;
    border-radius: 6px;
  }

  .me_s_d_c {
    position: relative;
    color: white;
    background-color: #36393f;
    border-radius: 4px;
  }

  .me_s_d_c_img>img {
    width: 160px;
    height: 160px;
  }

  .me_s_d_c_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -80px;
  }

  .me_s_d_c_head {
    height: 116px;
    padding: 20px;
    position: relative;
    text-align: right;
  }

  .me_s_d_c_head h5 {
    position: absolute;
    bottom: 0px;
    width: 400px;
    text-align: center;
  }

  .me_s_d_c_item {
    position: relative;
    height: 64px;
    margin: 0px 12px 20px 20px;
  }

  .me_s_d_c_item>div {
    height: 40px;
    width: 100%;
    border: 1px solid #040405c9;
    background-color: rgba(0, 0, 0, 0.199);
    border-radius: 3px;
  }

  .me_s_d_c_item>p {
    color: #8e9297;
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
  }

  .me_s_d_c_footer {
    height: 78px;
    background-color: #2f3136;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 20px;
    display: flex;
    flex-direction: row-reverse;
  }

  .me_s_d_c_footer>button {
    cursor: pointer;
    outline: none;
    border: unset;
    width: 96px;
    height: 38px;
    border-radius: 2px;
    background-color: inherit;
    color: rgb(224, 224, 224);
    font-size: 14px;
    /* margin-right: 5px; */
  }

  .me_s_d_c_footer>button:first-child {
    background-color: rgb(40, 112, 194);
  }

  .me_s_d_c_footer>button:first-child:hover {
    background-color: rgb(45, 127, 221);
  }

  .me_s_d_c_footer>button:last-child:hover {
    text-decoration: underline;
    background-color: rgba(221, 124, 45, 0.267);
  }

  .me_s_d_c_item_input_1 {
    display: flex;
    flex-direction: row;
    align-content: center;

  }

  .me_s_d_c_item_input_1>div:first-child {
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .me_s_d_c_item_input_1>input {
    flex: 1;
    outline: none;
    border: unset;
    background-color: rgba(0, 0, 0, 0);
    ;
    padding: 0px 2px;
    color: rgb(197, 197, 197);
  }

  .me_s_d_c_item_input_1>div:last-child {
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .me_s_d_c_item_input_1 h5 {
    margin-top: 4px;
    font-size: 22px;
  }

  .me_s_d_c_item_input_downlist {
    display: block;
    position: absolute;
    width: 100%;
    background-color: #2b2e32;
    height: 156px;
    overflow-y: scroll;
  }

  .me_s_d_c_item_input_downlist>div {
    height: 40px;
    margin: 2px;
    color: rgb(206, 206, 206);
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
    padding-left: 10px;
  }

  .me_s_d_c_item_input_downlist>div:hover {
    background-color: rgba(102, 102, 102, 0.24);
  }


  .me_s_d_c_item_input_downlist::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
  }

  .me_s_d_c_item_input_downlist::-webkit-scrollbar-thumb {
    border-radius: 8px;
    width: 4px;
    box-shadow: 4px 0 0 #676768 inset;

  }

  .me_s_d_c_item_input_downlist_active {
    background-color: rgba(102, 102, 102, 0.432);
  }

  .me_s_d_c_item_input_2 {
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
    padding-left: 10px;
  }

  .smci_3 {
    font-size: 13px;
    color: rgb(207, 207, 207);
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .smci_3:first-child {
    width: 80%;
  }

  .smci_3:last-child {
    width: 20%;
  }

  .contextMenu_container {
    cursor: pointer;
    width: 188px;
    background-color: #202225;
    border-radius: 5px;
    padding: 6px 8px;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.253);
  }
  .contextMenu_master_item{
    position: relative;
    height: 32px;
    line-height: 32px;
    margin: 2px 0px;
    color: #B9BBBE;
    font-size: 14px;
    padding: 0px 8px;
    border-radius: 4px;
    /* background: turquoise; */
  }
    .contextMenu_master_item svg{
      position: absolute;
      top: 8px;
      right: 10px;
    }
  .contextMenu_master_item_splash{
    width: 100%;
    height: 1px;
    background-color: rgba(160, 160, 160, 0.26);
  }
   .contextMenu_master_item_del{
     color:rgb(192, 30, 30);
   }
  .contextMenu_master_item:hover{
      background-color: #57575763;
  }

  .search_dialog .el-dialog {
    width: 570px;
    height: unset;
    border-radius: 6px;
    background-color: #2f3136

  }
  .search_dialog_container{
      width: 570px;
      padding: 20px 20px 0px 20px;
      background-color: #2f3136;
      border-radius: 6px;
  }
  .search_dialog_input{
    width: 100%;
    background-color:rgb(40, 112, 194);border-radius: 6px;

  }
  .search_dialog_input>input{
    width: 530px;
    height: 70px;
    background-color: #72767d;
    outline: none;
    border: none;
    font-size: 22px;
    border-radius: 5px;
    line-height: 70px;
    padding: 0px 12px;
    color: #dcddde;
    box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.336);
  }
  .search_dialog_list{
    min-height: 100px;
    max-height: 300px;
    margin-top: 10px;
    background-color: rgba(163, 163, 163, 0.205);
    border-bottom: 1px solid rgba(207, 207, 207, 0.24);
  }
  .search_dialog_bottom{
    line-height: 30px;
    height: 30px;
    font-size: 16px;
    text-align: center;
  }



  
</style>
