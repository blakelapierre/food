import { h, render } from 'preact-cycle';

const ADD_TRACKER_ITEM = ({
  // jshint ignore:start
  tracker: {
    items,
    inputText,
    ...trackerProps
  }, ...props
}) => ({
  tracker: {
    items: items.concat({name: inputText, time: new Date().getTime()}),
    inputText: '',
    ...trackerProps
  }, ...props
  // jshint ignore:end
});

const SET_TRACKER_TEXT = ({
  // jshint ignore:start
  tracker: {
    inputText,
    ...trackerProps
  },
  ...props
}, event) => ({
  tracker: {
    inputText: event.target.value,
    ...trackerProps
  },
  ...props
  // jshint ignore:end
});

const fromEvent = (prev, event) => event.target.value;

const Tracker = ({tracker:{items, inputText}}, {mutation}) => (
  // jshint ignore:start
  <tracker>
  {items.map(item => <item>{item.name} <time>at least {((new Date().getTime() - item.time) / 1000 / 60).toFixed(2)} minutes ago</time></item>)}
    <TrackerInput inputText={inputText} />
  </tracker>
  // jshint ignore:end
);

const TrackerInput = ({inputText}, {mutation}) => (
  // jshint ignore:start
  <tracker-input>
    <form onSubmit={mutation(ADD_TRACKER_ITEM)} action="javascript:">
      <input placeholder="New item..." value={inputText} onInput={mutation(SET_TRACKER_TEXT)} autoFocus />
    </form>
  </tracker-input>
  // jshint ignore:end
);

const InfoTable = ({items}, {info: {nutrients}}) => (
  // jshint ignore:start
  <info-table>
    <table>
      {Object.keys(nutrients).map(nutrientName => <NutrientRow nutrientName={nutrientName} units={nutrients[nutrientName].units} items={items} />)}
    </table>
  </info-table>
  // jshint ignore:end
);

const NutrientRow = ({items, nutrientName, units}, {foods, info}) => (
  // jshint ignore:start
  <tr>
    <td>{nutrientName} ({units})</td>
    <td className="value"><Bar value={Array.prototype.reduce.call(items, (sum, item) => sum + foods[item.name].nutrients[nutrientName].per100g, 0) / (info.dri.male['31-50y'][nutrientName] || {value: 1}).value} title={`${Array.prototype.reduce.call(items, (sum, item) => sum + foods[item.name].nutrients[nutrientName].per100g, 0)} ${info.nutrients[nutrientName].units}`} /></td>
  </tr>
  // jshint ignore:end
);

const Bar = ({value, title}) => (
  // jshint ignore:start
  <bar style={{'width': `${value * 100}%`}} title={title}>&nbsp;</bar>
  // jshint ignore:end
);

const SideBySide = ({tracker, info}) => (
  // jshint ignore:start
  <side-by-side>
    <Tracker tracker={tracker} />
    {tracker.items.length > 0 ? <InfoTable items={tracker.items} info={info} /> : undefined}
  </side-by-side>
  // jshint ignore:end
);

render(
  // jshint ignore:start
  SideBySide, {
    tracker: {items: [], text: ''},
    foods: {
      'Acerola Juice': {
        nutrients: {
          'Water': { 'per100g': 94.30 },
          'Energy': { 'per100g': 23 },
          'Protein': { 'per100g': 0.4 },
          'Total Lipid (fat)': { 'per100g': 0.3 },
          'Carbohydrate, by difference': { 'per100g': 4.8 },
          'Fiber, total dietary': { 'per100g': 0.3 },
          'Sugars, total': { 'per100g': 4.5 },
          'Calcium, Ca': { 'per100g': 10 },
          'Iron, Fe': { 'per100g': 0.5 },
          'Magnesium, Mg': { 'per100g': 12 },
          'Phosphorus, P': { 'per100g': 9 },
          'Potassium, K': { 'per100g': 97 },
          'Sodium, Na': { 'per100g': 3 },
          'Zinc, Zn': { 'per100g': 0.1 },
          'Vitamin C, total ascorbic acid': { 'per100g': 1600 },
          'Thiamin': { 'per100g': 0.02 },
          'Riboflavin': { 'per100g': 0.06 },
          'Niacin': { 'per100g': 0.4 },
          'Vitamin B-6': { 'per100g': 0.004 },
          'Folate, DFE': { 'per100g': 14 },
          'Vitamin B-12': { 'per100g': 0 },
          'Vitamin A, RAE': { 'per100g': 25 },
          'Vitamin A, IU': {'per100g': 509},
          'Vitamin E (alpha-tocopherol)': { 'per100g': 0.18 },
          'Vitamin K (phylloquinone)': { 'per100g': 1.4 },
          'Fatty acids, total saturated': { 'per100g': 0.068 },
          'Fatty acids, total monounsaturated': { 'per100g': 0.082 },
          'Fatty acids, total polyunsaturated': { 'per100g': 0.09 },
          'Fatty acids, total trans': { 'per100g': 0 },
          'Cholesterol': { 'per100g': 0 },
          'Caffeine': { 'per100g': 0 }
        }
      }
    },
    info: {
      items: [],
      nutrients: {
        'Water': { 'units': ['g'] },
        'Energy': { 'units': ['kcal'] },
        'Protein': { 'units': ['g'] },
        'Total Lipid (fat)': { 'units': ['g'] },
        'Carbohydrate, by difference': { 'units': ['g'] },
        'Fiber, total dietary': { 'units': ['g'] },
        'Sugars, total': { 'units': ['g'] },
        'Calcium, Ca': { 'units': ['mg'] },
        'Iron, Fe': { 'units': ['mg'] },
        'Magnesium, Mg': { 'units': ['mg'] },
        'Phosphorus, P': { 'units': ['mg'] },
        'Potassium, K': { 'units': ['mg'] },
        'Sodium, Na': { 'units': ['mg'] },
        'Zinc, Zn': { 'units': ['mg'] },
        'Vitamin C, total ascorbic acid': { 'units': ['mg'] },
        'Thiamin': { 'units': ['mg'] },
        'Riboflavin': { 'units': ['mg'] },
        'Niacin': { 'units': ['mg'] },
        'Vitamin B-6': { 'units': ['mg'] },
        'Folate, DFE': { 'units': ['µg'] },
        'Vitamin B-12': { 'units': ['µg'] },
        'Vitamin A, RAE': { 'units': ['µg'] },
        'Vitamin A, IU': {'units': ['IU']},
        'Vitamin E (alpha-tocopherol)': { 'units': ['mg'] },
        'Vitamin K (phylloquinone)': { 'units': ['µg'] },
        'Fatty acids, total saturated': { 'units': ['g'] },
        'Fatty acids, total monounsaturated': { 'units': ['g'] },
        'Fatty acids, total polyunsaturated': { 'units': ['g'] },
        'Fatty acids, total trans': { 'units': ['g'] },
        'Cholesterol': { 'units': ['mg'] },
        'Caffeine': { 'units': ['mg'] }
      },
      dri: {
        'male': {
          '31-50y': {
            'Water': { value: 3700, unit: 'g/d' },
            'Energy': { value: 2000, unit: 'kcal/d' }, // ESTIMATED!
            'Protein': { value: 56, unit: 'g/d' },
            'Total Lipid (fat)': { value: 38, unit: 'g/d' },
            'Carbohydrate, by difference': { value: 130, unit: 'g/d' },
            'Fiber, total dietary': { value: 38, unit: 'g/d' },
            'Sugars, total': { value: 10, unit: 'g/d' }, // ESTIMATED!
            'Calcium, Ca': { value: 1000 , unit: 'mg/d' },
            'Iron, Fe': { value: 8, unit: 'mg/d' },
            'Magnesium, Mg': { value: 420, unit: 'mg/d' },
            'Phosphorus, P': { value: 700, unit: 'mg/d' },
            'Potassium, K': { value: 4700, unit: 'mg/d' },
            'Sodium, Na': { value: 1500, unit: 'mg/d' },
            'Zinc, Zn': { value: 11, unit: 'mg/d' },
            'Vitamin C, total ascorbic acid, Zn': { value: 90, unit: 'mg/d' },
            'Thiamin': { value: 1.2, unit: 'mg/d' },
            'Riboflavin': { value: 1.3, unit: 'mg/d' },
            'Niacin': { value: 16, unit: 'mg/d' },
            'Vitamin B-6': { value: 1.3, unit: 'mg/d' },
            'Folate, DFE': { value: 400, unit: 'µg/d' },
            'Vitamin B-12': { value: 2.4, unit: 'µg/d' },
            'Vitamin A, RAE': { value: 900, unit: 'µg/d' },
            // 'Vitamin A, IU': {value: , unit: 'IU/d'},
            'Vitamin E (alpha-tocopherol)': { value: 15, unit: 'mg/d' },
            'Vitamin K (phylloquinone)': { value: 120, unit: 'µg/d' },
            // 'Fatty acids, total saturated': { value: , unit: 'g/d' },
            // 'Fatty acids, total monounsaturated': { value: , unit: 'g/d' },
            // 'Fatty acids, total polyunsaturated': { value: , unit: 'g/d' },
            // 'Fatty acids, total trans': { value: , unit: 'g/d' },
            // 'Cholesterol': { value: , unit: 'mg/d' },
            // 'Caffeine': { value: , unit: 'mg/d' }
          }
        }
      }
    },
  }, document.body
  // jshint ignore:end
);