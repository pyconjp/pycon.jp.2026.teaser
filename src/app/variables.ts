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
  conferenceDateJa: '2026年08月21日-2026年08月22日 カンファレンス',
  sprintDateJa: '2026年08月23日 スプリント(仮)',
  conferenceDateEn: 'August 21-22, 2026 Conference Days',
  sprintDateEn: 'August 23, 2026 Sprint Day (tentative)',
  locationJa: '広島国際会議場',
  locationEn: 'International Conference Center Hiroshima',
}

export const Buttons: Button[] = [
  {
    labelEn: 'Tickets',
    labelJa: '参加チケット\n販売中です',
    status: 'available',
    links: [
      {
        url: 'https://pyconjp.connpass.com/event/391006/',
        label: 'Buy Tickets / チケットを購入する',
      }
    ],
  },
  {
    labelEn: 'Call for Proposals',
    labelJa: 'プロポーザル募集中です',
    status: 'available',
    links: [
      {
        url: 'https://pretalx.com/pyconjp2026/cfp',
        label: 'Apply Now / 応募する',
      }
    ],
  },
  {
    labelEn: 'We need volunteers',
    labelJa: '主催メンバー(スタッフ)募集中です',
    status: 'available',
    links: [
      {
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSdl0-Tx-zt5-jqvVAMMSU55WDD79gsmfLBtHW7W1BnwW4864Q/viewform',
        label: 'Apply Now / 応募する'
      }
    ],
  },
  {
    labelEn: 'Please be our sponsor!',
    labelJa: 'スポンサー募集中です',
    status: 'available',
    links: [
      {
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScpX8QCcCZBn6KC2ggU4JMFghBhpxtXIN3Wr-jPiFJXRxag0g/viewform',
        label: 'Apply Now / 応募する'
      }
    ],
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