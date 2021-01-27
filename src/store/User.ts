import BaseActions from "../utils/baseAction";
import { observable, action, runInAction } from "mobx";
import * as urls from "../constant/urls";

import { message } from "antd";
import token from "../utils/token.js";
import { createHashHistory } from "history";
const history = createHashHistory();
var ROLE = 2;

class User extends BaseActions {
  @observable
  usr = {};
  @action
  getUser() {
    return this.usr;
  }
  @action
  async login(params: { remember: boolean;uid:string;password:string }) {
    console.log("login params", params);
    const r = await this.post(urls.API_USR_LOGIN, params);

    if (r) {
      runInAction(() => {
        if (r.data && r.code === 200) {
          if (params.remember) token.saveUser(r.data);
          this.usr = r.data[0];
          console.log("userStore", this.usr);
          message.success(r.msg);
          console.log("身份是==========", r.data[0].role);
          //  const history = this.props.history;

          // if (r.data[0].role == 0) history.push("/");
          // if (r.data[0].role == 2) route("/m", true);
          // if (r.data[0].role == 1) route("/s", true);
          // if (r.data[0].role == 3) route("/admin", true);
        } else if (r.code === 301) {
          message.error(r.msg);
        }
      });
      console.log("判断成功");
      return r;
    } else {
      message.error("网络错误", 0.7);
    }
  }  
  
  @action
  logout() {
    token.removeUser();
    this.usr = {};
    
  }
}

export default new User();