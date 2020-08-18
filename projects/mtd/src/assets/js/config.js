var config = {
  L1: {
    name: 'Hul\u2019q\u2019umi\u2019num\u20192',
    lettersInLanguage: [
      'ts',
      'ts\u2019',
      'ch',
      'ch\u2019',
      'h',
      'kw',
      'kw\u2019',
      'l',
      'lh',
      'tl\u2019',
      'm',
      'n',
      'p',
      'p\u2019',
      'q',
      'q\u2019',
      'qw',
      'qw\u2019',
      's',
      'sh',
      't',
      't\u2019',
      'tth',
      'tth\u2019',
      'th',
      'w',
      'hw',
      'x',
      'xw',
      'y\u2019'
    ],
    transducers: {
      'hulq-approx': [
        { 'ts\u2019': 'ts' },
        { 'ch\u2019': 'ch' },
        { 'kw\u2019': 'kw' },
        { 'p\u2019': 'p' },
        { 'q\u2019': 'q' },
        { 'qw\u2019': 'qw' },
        { 't\u2019': 't' },
        { 'tth\u2019': 'tth' },
        { x: 'h' },
        { h: 'x' },
        { q: 'k' },
        { k: 'q' }
      ]
    }
  },
  L2: { name: 'English' },
  build: '202008172129'
};
