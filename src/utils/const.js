// export const POSTAL_CODE = '郵便番号'; // n
// export const DELIVERY_ADDRESS = '届け先住所'; // a
// export const DELIVERY_COMPANY_NAME = 'お届け先会社名'; // b
// export const DELIVERY_ADDRESS_2 = 'お届け先部署名'; // c
// export const DELIVERY_TITLE = 'お届け先役職'; // d
// export const ADDRESS = '宛名'; // e
// export const DELIVERY_DATE = 'お届日'; // f
// export const DELIVERY_TIME = '配達時間'; // g
// export const ORDERER_COMPANY_NAME = '注文者会社名'; // h
// export const ORDERERS_NAME = '注文者 お名前'; // i
// export const ORDERER_DEPARTMENT = '注文者 部署名'; // j
// export const ORDERER_TITLE = '注文者役職'; // k
// export const CONTACT_INFORMATION = 'ご連絡先'; // l

export const TASKS4 = 'task4';
export const TASKS5 = 'task5';
export const TASKS6 = 'task6';

export const FIELDS = [
  {
    name: '郵便番号',
    identifier: 'POSTAL_CODE',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: '届け先住所',
    identifier: 'DELIVERY_ADDRESS',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: 'お届け先会社名',
    identifier: 'DELIVERY_COMPANY_NAME',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: 'お届け先部署名',
    identifier: 'DELIVERY_ADDRESS_2',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: 'お届け先役職',
    identifier: 'DELIVERY_TITLE',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: '宛名',
    identifier: 'ADDRESS',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: 'お届日',
    identifier: 'DELIVERY_DATE',
    contentType: 'date-picker',
    options: [],
    value: ''
  },
  {
    name: '配達時間',
    identifier: 'DELIVERY_TIME',
    contentType: 'selection',
    options: [
      '12:00 AM',
      '1:00 AM',
      '2:00 AM',
      '3:00 AM',
      '4:00 AM',
      '5:00 AM',
      '6:00 AM',
      '7:00 AM',
      '8:00 AM',
      '9:00 AM',
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '1:00 PM',
      '2:00 PM',
      '3:00 PM',
      '4:00 PM',
      '5:00 PM',
      '6:00 PM',
      '7:00 PM',
      '8:00 PM',
      '9:00 PM',
      '10:00 PM',
      '11:00 PM'
    ],
    value: '12:00 AM'
  },
  {
    name: '注文者会社名',
    identifier: 'ORDERER_COMPANY_NAME',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: '注文者 お名前',
    identifier: 'ORDERERS_NAME',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: '注文者 部署名',
    identifier: 'ORDERER_DEPARTMENT',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: '注文者役職',
    identifier: 'ORDERER_TITLE',
    contentType: 'input',
    options: [],
    value: ''
  },
  {
    name: 'ご連絡先',
    identifier: 'CONTACT_INFORMATION',
    contentType: 'input',
    options: [],
    value: ''
  }
];

export const TASK4_FIELDS = [
  {
    name: '予算の入力',
    identifier: 'BUDGET',
    contentType: 'selection',
    options: [
      '3,300円',
      '5,500円',
      '10,500円',
      '15,500円',
      '20,500円',
      '25,500円',
      '30,500円',
      '35,500円',
      '40,500円',
      '45,500円',
      '50,500円',
      '55,500円',
      '60,500円',
      '65,500円',
      '70,500円',
      '75,500円',
      '80,500円',
      '85,500円',
      '90,500円',
      '95,500円',
      '100,500円',
      '110,000円'
    ],
    value: ''
  },
  {
    name: 'ご要望欄(任意)',
    identifier: 'COMMENT',
    contentType: 'text-area',
    options: [],
    value: ''
  }
];

export const CONFIRM_BUTTON = '確定';
export const LIFF_APP_ID = '1656043326-pMq6BjwJ';
export const PAY_BUTTON = 'Pay';
