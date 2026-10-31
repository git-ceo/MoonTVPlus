/**
 * 资源站请求代理。
 *
 * Vercel 等海外部署访问国内资源站经常超时或被拒，可通过 SOURCE_PROXY
 * 指向一个国内反代。反代地址形如：
 *   https://example.com/proxy/?token=xxx&url=
 * 本函数会把原始 URL 编码后拼在末尾。
 */
export function withSourceProxy(url: string): string {
  const proxy = process.env.SOURCE_PROXY;
  if (!proxy) return url;
  return `${proxy}${encodeURIComponent(url)}`;
}
