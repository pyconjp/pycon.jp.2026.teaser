export type Button = ({
  labelEn: string,
  labelJa: string,
} & ({
  status: 'comingSoon',
  links: null,
} | {
  status: 'available' | 'closed',
  links: {
    url: string,
    label: string,
  }[],
}));

export type MenuItem = {
  name: string,
  url: string | null,
}

// ここから下を編集する

export const Conference = {
  name: 'PyCon JP 2025',
  conferenceDateJa: '2025年09月26日-2025年09月27日 (カンファレンス)',
  sprintDateJa: '2025年09月28日 (スプリント)',
  conferenceDateEn: 'September 26-27, 2025 (Conference Days)',
  sprintDateEn: 'September 28, 2025 (Sprint Day)',
  locationJa: '広島国際会議場',
  locationEn: 'International Conference Center Hiroshima',
}

export const Buttons: Button[] = [
  {
    labelEn: 'Tickets',
    labelJa: '参加チケット\n準備中です',
    status: 'comingSoon',
    links: null,
  },
  {
    labelEn: 'Call for Proposals',
    labelJa: 'プロポーザル募集\n詳しくは下のボタンから',
    status: 'available',
    links: [
      {label: 'See More', url: 'https://pretalx.com/pycon-jp-2025/cfp'}
    ],
  },
  {
    labelEn: 'We need volunteers',
    labelJa: '主催メンバー(スタッフ)募集\n詳しくは下のボタンから',
    status: 'available',
    links: [
      {label: 'See More', url: 'https://pyconjp.blogspot.com/2024/12/call-for-organizing-members-ja.html'}
    ],
  },
  {
    labelEn: 'Please be our sponsor!',
    labelJa: 'スポンサー募集\n詳しくは下のボタンから',
    status: 'available',
    links: [
      {label: 'See More', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfCVLHY3zMR1z7YGy8aRyJiSa64pnVpById6UjNDiwD5K0VmQ/viewform'}
    ],
  },
]

export const MenuItems: MenuItem[] = [
  {
    name: 'NEWS',
    url: 'https://pyconjp.blogspot.com/search/label/pyconjp2025',
  },
  {
    name: 'VOLUNTEER',
    url: 'https://pyconjp.blogspot.com/2024/12/call-for-organizing-members-ja.html',
  },
  {
    name: 'PROPOSAL',
    url: 'https://pretalx.com/pycon-jp-2025/cfp',
  },
  {
    name: 'SPONSOR',
    url: null,
  },
  {
    name: 'TICKET',
    url: null,
  },
  {
    name: 'REVIEWER',
    url: null,
  },
  {
    name: 'CODE OF CONDUCT',
    url: 'https://www.pycon.jp/policies/code-of-conduct.html',
  },
]