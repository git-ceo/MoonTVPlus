/**
 * 按访问域名决定是否强制过滤内容。
 *
 * moonplus.1212331.xyz 是家庭/儿童入口，无论后台
 * DisableYellowFilter 怎么设置都强制过滤；
 * 其他域名（如 moonplusx.1212331.xyz）沿用后台配置。
 */
const ALWAYS_FILTER_HOSTS = new Set(['moonplus.1212331.xyz']);

export function shouldFilterContent(
  host: string | null | undefined,
  disableYellowFilter: boolean
): boolean {
  if (host) {
    const hostname = host.split(':')[0].toLowerCase();
    if (ALWAYS_FILTER_HOSTS.has(hostname)) {
      return true;
    }
  }
  return !disableYellowFilter;
}
