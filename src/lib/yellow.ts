export const yellowWords = [
  '伦理片',
  '福利',
  '里番动漫',
  '门事件',
  '萝莉少女',
  '制服诱惑',
  '国产传媒',
  'cosplay',
  '黑丝诱惑',
  '无码',
  '日本无码',
  '有码',
  '日本有码',
  'SWAG',
  '网红主播',
  '色情片',
  '色情',
  '同性片',
  '福利视频',
  '福利片',
  '写真热舞',
  '倫理片',
  '理论片',
  '韩国伦理',
  '港台三级',
  '电影解说',
  '伦理',
  '日本伦理',
  // 暴力 / 血腥 / 恐怖 / 成人
  '血腥',
  '血浆',
  '暴力',
  '恐怖',
  '恐怖片',
  '惊悚片',
  '虐杀',
  '重口味',
  '成人',
  '成人片',
  '成人电影',
  '成人视频',
  'R18',
  '18禁',
  '限制级',
  '三级',
  '三级片',
  '情色',
  // 露骨性行为 / 成人内容
  '射精',
  '做爱',
  '性爱',
  '性交',
  '口交',
  '肛交',
  '自慰',
  '淫乱',
  '淫荡',
  '迷奸',
  '强奸',
  '轮奸',
  '乱伦',
  '援交',
  '约炮',
  '一夜情',
  '性奴',
  '调教',
  '巨乳',
  '爆乳',
  '裸体',
  '全裸',
  '露点',
  '走光',
  '偷拍',
  '春宫',
  '艳情',
  '情欲',
];

// 明确的成人 / 血腥恐怖片名：只匹配 title，避免误伤正常分类
export const yellowTitles = [
  '金瓶梅',
  '肉蒲团',
  '玉蒲团',
  '蜜桃成熟时',
  '一路向西',
  '喜爱夜蒲',
  '鸭王',
  '电锯惊魂',
  '人皮客栈',
  '死神来了',
  '致命弯道',
  '德州电锯',
  '月光光心慌慌',
  '13号星期五',
  '鬼玩人',
  '食人族',
];

const blockedWords = [...yellowWords];

/**
 * 分类名 / 标签等元信息命中词表即视为需要过滤。
 */
export function isBlockedContent(
  ...values: Array<string | undefined | null>
): boolean {
  const text = values.filter(Boolean).join(' ').toLowerCase();
  if (!text) return false;
  return blockedWords.some((word) => text.includes(word.toLowerCase()));
}

/**
 * 片名只匹配明确的黑名单，避免「成人礼」「暴力街区」这类正常片名被误杀。
 */
export function isBlockedTitle(title?: string | null): boolean {
  const text = (title || '').toLowerCase();
  if (!text) return false;
  return yellowTitles.some((word) => text.includes(word.toLowerCase()));
}
