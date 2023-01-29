const prompt = require('prompt-sync')();
var predictionsData = require('./data/data.json');

function getParagraphInfo(num) {
  const paragraphs = [];
  for (let i = 0; i < num; i++) {
    const paragraph_content = prompt('* Content =: ');
    const paragraph_budget = prompt('* Budget coef =: ');
    const paragraph_prediction = prompt('* Prediction =: ');

    const result_paragraph = {
      content: paragraph_content,
      budget_coefficient: paragraph_budget,
      prognosis: paragraph_prediction
    };

    paragraphs.push(result_paragraph);
  }

  return paragraphs;
}

function getTitleById(arr, id) {
  for (let obj of arr) {
    if (obj.id === id) return obj.title
  }
  return 'Default title'
}

const spheres = [
  {
    title: 'автомобили',
    id: 1
  },
  {
    title: 'бытовая техника',
    id: 2
  },
  {
    title: 'образование',
    id: 3
  },
  {
    title: 'медицина',
    id: 4
  },
  {
    title: 'косметика',
    id: 5
  },
  {
    title: 'электроника',
    id: 6
  }
];

const promotion_goals = [
  {
    title: 'повышение узнаваемости',
    id: 1
  },
  {
    title: 'увеличение спроса на товары и услуги',
    id: 2
  },
  {
    title: 'увеличение продаж товаров и услуг',
    id: 3
  }
];

console.log('Доступные сферы : ');
for (let sphere of spheres) {
  console.log(`${sphere.id}. ${sphere.title}`);
}

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

const sphere_id = prompt('@ Введите номер сферы : ');

console.log('Доступные цели продвижения : ');
for (let goal of promotion_goals) {
  console.log(`${goal.id}. ${goal.title}`);
}

const promotion_goal_id = prompt('@ Введите номер цели : ');

const awareness_1 = '1. Осведомленность: ';
console.log(awareness_1 + "\n");
const num_1 = prompt('1. Введите кол-во абзацев: ');
const paragraphs_1 = getParagraphInfo(num_1);

const interest_2 = '2. Интерес: ';
console.log(interest_2 + "\n");
const num_2 = prompt('2. Введите кол-во абзацев: ');
const paragraphs_2 = getParagraphInfo(num_2);

const desire_3 = '3. Желание: ';
console.log(desire_3 + "\n");
const num_3 = prompt('3. Введите кол-во абзацев: ');
const paragraphs_3 = getParagraphInfo(num_3);

const action_4 = '4. Действие: ';
console.log(action_4 + "\n");
const num_4 = prompt('4. Введите кол-во абзацев: ');
const paragraphs_4 = getParagraphInfo(num_4);

const result_obj = {
  awareness: paragraphs_1,
  interest: paragraphs_2,
  desire: paragraphs_3,
  action: paragraphs_4,
  branching: {
    promotion_goal: getTitleById(promotion_goals, promotion_goal_id),
    sphere: getTitleById(spheres, sphere_id)
  }
}

predictionsData.predictions.push(result_obj);

// Write new JSON to file
const FileSystem = require("fs");
 FileSystem.writeFile('data.json', JSON.stringify(predictionsData), (error) => {
    if (error) throw error;
});

//console.log(predictionsData);