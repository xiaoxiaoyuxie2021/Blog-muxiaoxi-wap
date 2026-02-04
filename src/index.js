// index.js - Cloudflare Workers 静态资源托管核心代码
export default {
  async fetch(request, env) {
    try {
      // 转发所有请求到静态资产绑定，自动匹配public目录下的文件
      const assetResponse = await env.MY_ASSETS.fetch(request);
      // 若资产不存在（404），返回自定义提示
      if (assetResponse.status === 404) {
        return new Response("📄 静态资源不存在", {
          status: 404,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      }
      return assetResponse;
    } catch (err) {
      // 捕获异常，返回服务端错误
      return new Response(`服务器错误：${err.message}`, {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
  },
};
