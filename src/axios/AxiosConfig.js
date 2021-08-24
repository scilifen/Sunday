import axios from "axios";
// import qs from "qs";

axios.defaults.baseURL = "api/"; //正式
// axios.defaults.baseURL =
//   "http://activitytest.hpl001.cn/crm_api/app/sinceOrder/"; //测试

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  (config) => {
    // const token = sessionStorage.getItem("access_token");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg0NTI1MDMsImRhdGEiOnsicmlkIjoiMzE5MDQyMTE2MyIsInJvbGUiOiJhZG1pbiIsImFpZCI6Mn0sImlhdCI6MTYyOTgxMjUwM30.JMFNQs4G368ry75XjorOxSdV4YaP3YYo4JXQUzhoJEE";
    config.headers.authorization = "bearer " + token;
    // if (config.type) {
    //   switch (config.type) {
    //     case "FORM-DATA":
    //       config.transformRequest = [
    //         (data) => {
    //           return "args=" + JSON.stringify(data);
    //         },
    //       ];
    //       break;
    //     case "FORM":
    //       config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    //       config.data = qs.stringify(config.data);
    //       break;
    //     default:
    //       break;
    //   }
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const defaultNotify = {
//       message: "未知错误",
//       icon: "warning",
//       color: "warning",
//       position: "top",
//       timeout: 1500,
//     };
//     if (
//       error.code === "ECONNABORTED" ||
//       error.message.indexOf("timeout") !== -1 ||
//       error.message === "Network Error"
//     ) {
//       defaultNotify.message = "网络异常";
//       Notify.create(defaultNotify);
//       return Promise.reject(error);
//     }
//     switch (error.response.status) {
//       case 403:
//         defaultNotify.message = "拒绝访问(403)";
//         Notify.create(defaultNotify);
//         break;
//       case 404:
//         defaultNotify.message = "资源不存在(404)";
//         Notify.create(defaultNotify);
//         break;
//       case 408:
//         defaultNotify.message = "请求超时(404)";
//         Notify.create(defaultNotify);
//         break;
//       case 500:
//         defaultNotify.message = "服务器错误(500)";
//         Notify.create(defaultNotify);
//         break;
//       case 501:
//         defaultNotify.message = "服务未实现(501)";
//         Notify.create(defaultNotify);
//         break;
//       case 502:
//         defaultNotify.message = "网络错误(502)";
//         Notify.create(defaultNotify);
//         break;
//       case 503:
//         defaultNotify.message = "服务不可用(503)";
//         Notify.create(defaultNotify);
//         break;
//       case 504:
//         defaultNotify.message = "网络超时(504)";
//         Notify.create(defaultNotify);
//         break;
//       case 505:
//         defaultNotify.message = "HTTP版本不受支持(505)";
//         Notify.create(defaultNotify);
//         break;
//       default:
//         break;
//     }
//     return Promise.reject(error);
//   }
// );

export default function axiosApi(url, data, method) {
  return new Promise((resolve, reject) => {
    if (method === "get") {
      axios({
        method,
        url,
        params: data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      axios({
        method,
        url,
        data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

// {
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: "post",
//         url,
//         data: qs.stringify(data),
//       })
//         .then((res) => {
//           resolve(res.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   },

//   get(url, data) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: "get",
//         url,
//         params: data,
//       })
//         .then((res) => {
//           resolve(res.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   },
// };