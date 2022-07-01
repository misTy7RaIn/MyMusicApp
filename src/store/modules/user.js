import {
  login,
} from "@/api/login";
import router from "../../router";

const user = {
  state: {
    token: getToken(),
    name: "",
    roles: [],
    permissions: [],
    IsInside: true,
    NoReadingNumber: 0,
    IsLogin: false,
    IsAdministrators: false,
    EntryPermissions: [],
  },

  mutations: {
    initWebSockets(state, data) {
      state.NoReadingNumber = data;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_EntryPermissions: (state, data) => {
      state.EntryPermissions = data;
      sessionStorage.setItem("EntryPermissions", JSON.stringify(data));
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
    IsInsideState: (state, permissions) => {
      state.IsInside = permissions;
    },
    SET_Administrators: (state, IsAdministrators) => {
      state.IsAdministrators = IsAdministrators;
    },
    SET_Login: (state, Login) => {
      state.IsLogin = Login;
    },
  },

  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      return new Promise((resolve, reject) => {
        login(username, password)
          .then((res) => {
            setToken(res.token);
            commit("SET_TOKEN", res.token);
            // if (res.permission_info[0] != 0) {
            //   // 判断是超级管理员
            //   if (res.permission_info[0] == 99) {
            //     commit("SET_Login", true);
            //     commit("SET_Administrators", true);
            //     commit("SET_EntryPermissions", [1, 2, 3, 4, 5, 6]); //超级管理员附有所有入口权限
            //   } else {
            //     commit("SET_Login", true);
            //     commit("SET_Administrators", true);
            //     var EntryPermissions = [];
            //     // if (res.permission_info.includes("查看用户")) {
            //     //   EntryPermissions.push(2)
            //     // }
            //     // if (res.permission_info.includes("查看模板")) {
            //     //   EntryPermissions.push(3)
            //     // }
            //     // if (res.permission_info.includes("查看表单")) {
            //     //   EntryPermissions.push(6)
            //     // }
            //     // if (res.permission_info.includes("审核推荐信")) {
            //     //   EntryPermissions.push(5)
            //     // }
            //     // if (
            //     //   res.permission_info.includes("生成推荐信") ||
            //     //   res.permission_info.includes("查看推荐信")
            //     // ) {
            //     //   EntryPermissions.push(4)
            //     // }
            //     commit("SET_EntryPermissions", EntryPermissions);
            //   }
            // } else {
            //   commit("SET_Login", true);
            //   commit("SET_Administrators", false);
            // }
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    IsInsideFunction({
      commit
    }, State) {
      commit("IsInsideState", State);
    },

    // 退出系统
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            commit("SET_ROLES", []);
            commit("SET_PERMISSIONS", []);
            commit("SET_EntryPermissions", []);
            sessionStorage.clear();
            removeToken();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "");
        sessionStorage.clear();
        commit("SET_Login", false);
        commit("SET_Administrators", false);
        commit("SET_EntryPermissions", []);
        removeToken();
        resolve();
      });
    },
  },
};

export default user;
