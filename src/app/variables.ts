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
  name: 'PyCon JP 2026',
  conferenceDateJa: '2026年08月21日-2026年08月22日 (カンファレンス)',
  sprintDateJa: '2026年08月23日 (スプリント)',
  conferenceDateEn: 'August 21-22, 2026 (Conference Days)',
  sprintDateEn: 'August 23, 2026 (Sprint Day)',
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
    labelJa: 'プロポーザル募集\n準備中です',
    status: 'comingSoon',
    links: null,
  },
  {
    labelEn: 'We need volunteers',
    labelJa: '主催メンバー(スタッフ)募集\n準備中です',
    status: 'comingSoon',
    links: null,
  },
  {
    labelEn: 'Please be our sponsor!',
    labelJa: 'スポンサー募集\n準備中です',
    status: 'comingSoon',
    links: null,
  },
]

export const MenuItems: MenuItem[] = [
  {
    name: 'NEWS',
    url: 'https://pyconjp.blogspot.com/search/label/pyconjp2026',
  },
  {
    name: 'VOLUNTEER',
    url: null,
  },
  {
    name: 'PROPOSAL',
    url: null,
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