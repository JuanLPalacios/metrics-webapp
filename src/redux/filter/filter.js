const SET_DATE = 'metrics-webapp/date/SET_DATE';
const SET_VALUE = 'metrics-webapp/date/SET_VALUE';

export const VALUE_LIST = [
  'SP.POP.TOTL',
  'SP.DYN.LE00.IN',
  'SE.SCH.LIFE',
  'NY.GNP.PCAP.CD',
];
export const VALUE_MAP = {
  'SP.POP.TOTL': 'Population, total',
  'SP.DYN.LE00.IN': 'Life expectancy at birth, total (years)',
  'SE.SCH.LIFE': 'School life expectancy, primary to tertiary, both sexes (years)',
  'NY.GNP.PCAP.CD': 'GNI per capita, Atlas method (current US$)',
};

const defaultCountries = { date: new Date(new Date().getFullYear() - 1, 1), value: VALUE_LIST[0] };
export default function reducer(state = defaultCountries, action = {}) {
  switch (action.type) {
    case SET_DATE: {
      return { ...state, date: action.date };
    }
    case SET_VALUE: {
      return { ...state, value: action.value };
    }
    default:
      return state;
  }
}

export const setDate = (date = new Date()) => ({
  type: SET_DATE,
  date,
});

export const setValue = (value = VALUE_LIST[0]) => ({
  type: SET_VALUE,
  value,
});
