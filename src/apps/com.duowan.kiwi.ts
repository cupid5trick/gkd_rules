import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '直播间悬浮广告',
      activityIds: 'com.duowan.kiwi.liveroom.ChannelPage',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[id="com.duowan.kiwi:id/ad_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12901045',
            'https://i.gkd.li/i/12901044',
          ],
        },
        {
          key: 1,
          quickFind: true,
          matches: '[id="com.duowan.kiwi:id/game_header_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13395604',
            'https://i.gkd.li/i/13395606',
          ],
        },
        {
          key: 2,
          matches:
            '[id="com.duowan.kiwi:id/popup_banner"] >2 [id="com.duowan.kiwi:id/ui_count_down"]',
          snapshotUrls: ['https://i.gkd.li/i/13417245'],
        },
        {
          key: 3,
          matches:
            '[id="com.duowan.kiwi:id/miniapp_content_container"] FrameLayout > ViewGroup[childCount=2] > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13401266',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      enable: false,
      activityIds: 'com.duowan.kiwi.homepage.Homepage',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@ImageView[id="com.duowan.kiwi:id/upgrade_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13440833',
        },
      ],
    },
    {
      key: 4,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.duowan.kiwi.homepage.Homepage',
          matches:
            '[id="com.duowan.kiwi:id/animation_view"] + [id="com.duowan.kiwi:id/v_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13625453',
        },
      ],
    },
    {
      enable: false,
      key: 5,
      name: 'root提示',
      desc: '您的设备已经被ROOT',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="您的设备已经被ROOT"] + LinearLayout [text="确认"]',
      snapshotUrls: 'https://i.gkd.li/i/13536744',
    },
  ],
});
