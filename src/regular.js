/**
 * @module Reg
 * @author chenbiao
 * 正则表达式工具集
 */

 /**
  * @desc 统一社会信用代码
  */
export const unifiedSocialCreditCodeRegExp = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;

/**
 * @desc 子网掩码
 */
export const subnetMaskRegExp = /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;

/**
 * @desc Linux下的文件夹路径
 */
export const linuxFolderRegExp = /^\/(\w+\/?)+$/;

/**
 * @desc linux下的文件路径
 */
export const linuxFileRegExp = /^\/(\w+\/)+\w+\.\w+$/;

/**
 * @desc windows下的文件夹路径
 */
export const windowsFolderRegExp = /^[a-zA-Z]:\\(?:\w+\\?)*$/;

/**
 * @desc windows下的文件路径
 */
export const windowsFileRegExp = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/;

/**
 * @desc md5格式(32位)
 */
export const md5RegExp = /^[a-f0-9]{32}$/;

/**
 * @desc 版本号
 */
export const versionNumberRegExp = /^\d+(?:\.\d+){2}$/;

/**
 * @desc 视频链接地址
 */
export const videoLinkAddrRegExp = /^https?:\/\/.*?(?:swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i;

/**
 * @desc 图片链接地址
 */
export const imageLinkAddrRegExp = /^https?:\/\/.*?(?:gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i;

/**
 * @desc 24小时制时间
 */
export const twentyFourHoursRegExp = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

/**
 * @desc 12小时制时间
 */
export const twelveHoursRegExp = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/;

/**
 * @desc base64格式
 */
export const base64RegExp = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;

/**
 * @desc 数字/货币金额（支持负数和千位分隔符）
 */
export const numberRegExp = /(?:^[-]?[1-9]\d{0,2}(?:$|(?:,\d{3})*(?:$|(\.\d{1,2}$))))|(?:(?:^[0](\.\d{1,2})?)|(?:^[-][0]\.\d{1,2}))$/;

/**
 * @desc 银行卡号
 */
export const bankCardNumberRegExp = /^[1-9]\d{9,29}$/;

/**
 * @desc 中文姓名
 */
export const chineseNameRegExp = /^(?:[\u4e00-\u9fa5·]{2,16})$/;

/**
 * @desc 英文姓名
 */
export const englishNameRegExp = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;

/**
 * @desc 车牌号
 */
export const licensePlateNumberRegExp = /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/;

/**
 * @desc 手机号
 */
export const phoneNumberRegExp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;

/**
 * @desc 日期
 */
export const dateRegExp = /^\d{4}(-)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/;

/**
 * @desc email
 */
export const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * @desc 座机电话
 */
export const landlineTelephoneRegExp = /\d{3}-\d{8}|\d{4}-\d{7}/;

/**
 * @desc 身份证号（支持1代/2代）
 */
export const idCardRegExp = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;

/**
 * @desc 护照（包括香港、澳门）
 */
export const passportRegExp = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;

/**
 * @desc 账号是否合法（字母开头，5-16字节）
 */
export const accountNumberRegExp = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;

/**
 * @desc 纯中文
 */
export const chineseRegExp = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/;

/**
 * @desc 是否为小数
 */
export const decimalRegExp = /^\d+\.\d+$/;

/**
 * @desc 纯数字
 */
export const numberRegExp = /^\d{1,}$/;

/**
 * @desc qq号格式
 */
export const qqNumberRegExp = /^[1-9][0-9]{4,10}$/;

/**
 * @desc 数字和字母组成
 */
export const numberAndLetterRegExp = /^[A-Za-z0-9]+$/;

/**
 * @desc 纯英文
 */
export const englishRegExp = /^[a-zA-Z]+$/;

/**
 * @desc 密码强度
 */
export const passwordRegExp = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

/**
 * @desc ip-v4
 */
export const ipV4RegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * @desc ip-v6
 */
export const ipV6RegExp = /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i;

/**
 * @desc 16进制颜色
 */
export const colorRegExp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

/**
 * @desc 微信号
 */
export const wechatRegExp = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;

/**
 * @desc 邮政编码
 */
export const postalCodeRegExp = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;
