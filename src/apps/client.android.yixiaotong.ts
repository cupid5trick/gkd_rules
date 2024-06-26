import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'client.android.yixiaotong',
  name: '乐校通',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13055837',
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id="client.android.yixiaotong:id/ksad_tk_view"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13060116',
        },
        {
          key: 2,
          name: '快手广告-2',
          activityIds: [],
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13625511',
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
          activityIds: [
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathControlActivity',
          ],
          matches:
            'ImageView + * + FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13451010',
            'https://i.gkd.li/i/14469739',
          ],
        },
        {
          key: 1,
          name: '快手广告',

          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id="client.android.yixiaotong:id/ksad_container"] >n @TextView + View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13450887',
        },
      ],
    },
  ],
});
