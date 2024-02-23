import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chunqiu.ah',
  name: 'AH视频',
  deprecatedKeys: [5],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13264387',
            'https://i.gkd.li/i/13264381',
          ],
        },
        {
          matches: '@ImageView - [text="|"]',
          snapshotUrls: 'https://i.gkd.li/i/13264377',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-首页-弹窗广告',
      quickFind: true,
      activityIds: 'com.androlua.LuaActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView < * <2 FrameLayout[childCount=5] <<n [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13264383',
            'https://i.gkd.li/i/14122595',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.androlua.LuaActivity',
          matches:
            'ImageView < FrameLayout -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13635499',
        },
      ],
    },
    {
      key: 3,
      quickFind: true,
      name: '全屏广告-首页推广',
      desc: '点击我已知晓',
      rules: [
        {
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '[id="com.chunqiu.ah:id/buttonPanel"] [text="我已知晓"][id="android:id/button2"]',
          snapshotUrls: 'https://i.gkd.li/i/13852430',
        },
      ],
    },
    {
      key: 4,
      quickFind: true,
      name: '全屏广告-公告',
      desc: '点击不再提示',
      rules: [
        {
          activityIds: 'com.androlua.LuaActivity',
          matches: '[id="com.chunqiu.ah:id/buttonPanel"] [text="不再提示"]',
          snapshotUrls: 'https://i.gkd.li/i/13852447',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-播放界面广告',
      desc: '点击X',
      rules: [
        {
          key: 0,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '[id="com.chunqiu.ah:id/ksad_container"] >n View[id="logoBox"] > TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13852535',
        },
        {
          key: 1,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '[id="android:id/content"] FrameLayout[childCount<=5] > FrameLayout[childCount=1] > ImageView[visibleToUser=true][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13852695',
            'https://i.gkd.li/i/13852670',
            'https://i.gkd.li/i/13852669',
          ],
        },
      ],
    },
  ],
});
