import {
  login
} from '@/api/login'
import {
  getToken,
  setToken,
} from '@/utils/auth'

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
      const phone = userInfo.phone.trim();
      const password = userInfo.password;
      return new Promise((resolve, reject) => {
        login(phone, password)
          .then((res) => {
            setToken(res.token);
            commit("SET_TOKEN", res.token);
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
    // 获取用户信息
    // GetInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token)
    //       .then((res) => {
    //         const user = res.user;
    //         // if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
    //         //     commit('SET_ROLES', res.roles)
    //         //     commit('SET_PERMISSIONS', res.permissions)
    //         // } else {
    //         //     commit('SET_ROLES', ['ROLE_DEFAULT'])
    //         // }
    //         commit("SET_NAME", user.userName);
    //         resolve(res);
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });
    // },

    // 退出系统
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token)
    //       .then(() => {
    //         commit("SET_TOKEN", "");
    //         commit("SET_ROLES", []);
    //         commit("SET_PERMISSIONS", []);
    //         sessionStorage.clear();
    //         removeToken();
    //         resolve();
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });
    // },

    // 前端 登出
    // FedLogOut({ commit }) {
    //   return new Promise((resolve) => {
    //     commit("SET_TOKEN", "");
    //     commit("SET_NAME", "");
    //     commit("CHANGE_Management", false);
    //     sessionStorage.clear();
    //     removeToken();
    //     resolve();
    //   });
    // },
  },
};

export default user
