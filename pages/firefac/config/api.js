// 以下是业务服务器API地址
// 云平台测试时使用
var WxApiRoot = 'https://test-0j2wkomi3jpe.firefac.cn/openapi/'
// 云平台上线时使用
//var WxApiRoot = 'https://ell968bhpgj5.firefac.cn/openapi/';

module.exports = {

  AuthLoginByWeixin: WxApiRoot + 'user/auth/miniprogram/login', //微信登录

  LiveRoomList: WxApiRoot + 'live/list', //直播房间列表
  LiveRoomDetail: WxApiRoot + 'live/detail', //直播房间详情
  LiveRoomStatusUpdate: WxApiRoot + 'live/status/update', //直播房间列表
  StorageGeneralLivePoster: WxApiRoot + 'storage/general/live/poster', //生成海报,
};