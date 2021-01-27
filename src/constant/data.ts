//色彩管理
export var colorIndex = [
  '#2ae0c8',
  '#a2e1d4',
  '#acf6ef',
  '#cbf5fb',
  '#bdf3d4',
  '#e6e2c3',
  '#e3c887',
  '#fad8be',
  '#fbb8ac',
  '#fe6673',
  '#666666',
  '#666699',
  '#6666CC',
  '#6666FF',
  '#669966',
  '#669999',
  '#6699CC',
  '#6699FF',
  '#66CC66',
  '#66CC99',
  '#66CCCC',
  '#66CCFF',
  '#66FF66',
  '#66FF99',
  '#66FFCC',
  '#66FFFF',
  '#996666',
  '#996699',
  '#9966CC',
  '#9966FF',
  '#999966',
  '#999999',
  '#9999CC',
  '#9999FF',
  '#99CC66',
  '#99CC99',
  '#99CCCC',
  '#99CCFF',
  '#99FF66',
  '#99FF99',
  '#99FFCC',
  '#99FFFF',
];

export var docTypeOption = [
  {
    value:'11000000',
    valueMin: '11000000',
    valueMax: '11999999',
    label: 'JavaScript',
    children: [
      {
        value:'11010000',
        valueMin: '11010000',
        valueMax: '11019999',
        label: 'js-1',
        children: [
          {
              value:'11010100',
            valueMin: '11010100',
            valueMax: '11010199',
            label: 'js-1-1',
          },
        ],
      },
      {
          value:'11020000',
        valueMin: '11020000',
        valueMax: '11029999',
        label: 'js-2',
        children: [
          {
              value:'11020100',
            valueMin: '11020100',
            valueMax: '11020199',
            label: 'js-2-1',
          },
        ],
      }
    ],
  },
  {
      value:'12000000',
    valueMin: '12000000',
    valueMax: '12999999',
    label: '计算机网络',
    children: [
      {
          value:'12010000',
        valueMin: '12010000',
        valueMax: '12019999',
        label: 'jw-1',
        children: [
          {
              value:'12010100',
            valueMin: '12010100',
            valueMax: '12010199',
            label: 'jw-1-1',
          },
        ],
      },
    ],
  }
];
