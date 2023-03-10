//import data from './data/data.json' assert {type: 'json'};

function main() {

  //console.log('Test scripts executions on github pages page');
  //var btn = document.getElementsByClassName('button-strategy');
  //console.log('Our btn : ', JSON.stringify(btn, null, 2));

  // Modal window logic 

  // // Get the modal
  // var modal = document.getElementById("myModal");

  // // Get the button that opens the modal
  // var btn = document.getElementById("button-strategy");

  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // // When the user clicks on the button, open the modal
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

  // document.querySelector('#submitform').addEventListener('click', function(e) {
  //   e.preventDefault();
  //   console.log('Submitted.');
  //   prompt('kke');
  //   alert('er');
  // });
}

function form() {

  document.querySelector('#submitform').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Submitted.');

    const aim_select = document.getElementById('aim-select');
    const aim_text = aim_select.options[aim_select.selectedIndex].text;

    localStorage.setItem('aim', aim_text);

    const sphere_select = document.getElementById('sphere-select');
    const sphere_text = sphere_select.options[sphere_select.selectedIndex].text;

    localStorage.setItem('sphere', sphere_text);

    const budget_num = document.querySelector('#budget-input').value;

    localStorage.setItem('budget', budget_num);

    // console.log(`El : ${}`)
    console.log(`Budget : ${budget_num}`)

    window.location.href = 'index2.html';
  });

}

function predictions() {
  console.log('Here.');
  console.log(`${localStorage.getItem('aim')}`);
  console.log(`${localStorage.getItem('budget')}`);
  console.log(`Kek : ${localStorage.getItem('sphere')}`);

  const promotion_goal = localStorage.getItem('aim');
  const sphere = localStorage.getItem('sphere');
  const budget = parseInt(localStorage.getItem('budget'));

  // search
  const result = findByGoalAndSphere(data, promotion_goal, sphere);
  // console.log(`Result : ${JSON.stringify(result, null, 2)}`);
  // console.log(`Title : ${JSON.stringify(result.awareness[0].title)}`);

  const osvedEl = document.getElementById('osved-container-answer');
  // osvedEl.innerHTML = result.awareness[0].title;
  // console.log(`Awareness arr : ${JSON.stringify(result.awareness, null, 2)}`);
  const res123 = concatParagraphs(result.awareness, budget);
  console.log(`Res 123 ${res123}`);
  osvedEl.innerHTML = res123;

  const interes = document.getElementById('interes-container-answer');
  interes.innerHTML = concatParagraphs(result.interest, budget);

  const jelanieEl = document.getElementById('jelanie-container-answer');
  jelanieEl.innerHTML = concatParagraphs(result.desire, budget);

  const doEl = document.getElementById('do-container-answer');
  doEl.innerHTML = concatParagraphs(result.action, budget);
}

function concatParagraphs(arr, budget) {
  var result_str = "";
  for (el of arr) {
    // console.log(`Arr inside : ${JSON.stringify(arr, null, 2)}`);

    console.log(`El : ${JSON.stringify(el, null, 2)}`);
    result_str += el.title + '????????????: ' + (parseFloat(el.budget) * parseFloat(budget)) + '.' + "\n" + "<br>" + "<br>";

    console.log(`result str : ${result_str}`)

    // const kek = parseFloat(el.budget);
    // console.log(`El budget : ${kek}`);

    if (el.prediction.length !== 0) {
      result_str += '????????????????: ' + el.prediction + "<br>" + "<br>";
    }
  }

  console.log(`result str : ${result_str}`)
  return result_str;
}

function findByGoalAndSphere(arr, goal, sphere) {
  for (let el of arr.predictions) {
    if (el.branching.promotion_goal == goal && el.branching.sphere == sphere) {
      return el
    }
  }
}

const data = {
  predictions: [
    {
      awareness: [
        {
          title: "?????????????? ?? ???????????????????? ??????????: ?????????? ??????????????????, ?????? Facebook ?? Instagram, ?????????? ???????????????????????????? ?????? ???????????? ?????????????????????????? ???????????????? ?? ?????????????????? ??????????????????????????????. ?????????????????? ???????????????????????????? ???? ?????????????????? ?????????????????????????? ?? ?????????????????????????????? ????????????.123",
          budget: '0.1',
          prediction: 'CTR - 1,3%, CPC - 0,34 ??????., CR - 2%'
        },
        {
          title: '?????????????? ?? Tik-Tok: ???????????? ???????????????? ???????????????? ?????????????????? ?? ???????????????????? ???? ???????? ???????????????????????? ?? ???????????? ????????????. ?????????????????? ?????????????????????????????? ??????????????.',
          budget: '0.09',
          prediction: 'CTR - 0,35%, CPC - 0,70 ??????., CR - 1,2%.'
        },
        {
          title: '????????????????????????????: ???????????? ???????????????????? ???????????????? ???????????????? ???????????????????????? ???????????? ?????????? ?????????????????????????? ???????????????????????????? ?????????????? ????????????????????.',
          budget: '0.06',
          prediction: ''
        },
        {
          title: '????????????????-?????????????? (?????????????? Google ads): ?????? ?????????????????? ???????????????????????? ?????????????? ???????????????????????? ?????????????????? ???????? ??????????????: ?????????????? ?? ????????????????????-???????????????? ???????? Google ?? ???????????????? Performance Max (???????????????????? CTR - 0,40%, CPC - 0,27 ??????., CR - 2,1%). ?????????????????? ???????????????????????????? ???? ???????????????? ???????????? ?? ?????????????????? ??????????????????????????, ???? ??????????.',
          budget: '0.15',
          prediction: ''
        }
      ],
      interest: [
        {
          title: "?????????????????? ??????????????: ?????????????????????? ?? ?????????????????????? ?????????????????????? ??????????-?????????????????????????? ?? ???????????????? ?????????? ???????????? ???????????????? ???????????????????? ?????????????????????? ?? ???????????? ?? ?????????????? ?????????????? ?? ??????????????????????.",
          budget: '0.15',
          prediction: ''
        },
        {
          title: '?????????????????????? ??????????????????: ???????????????? ?????????????? ???????????????? ?? ?????????????? ?????????????? ???? ???????? ???????????????????? ???????????? ???? ?????? ???????? ?? ?????????????????? ????????????????????. ?????????????????? ???????????????? ?????????? ?????????????????? ?????????????????????? ???????? belita.by.',
          budget: '0.08',
          prediction: ''
        },
        {
          title: '?????????????????? ?? ???????????????????? ??????????: ???????????????? ?????????????? ?????????????????? ?????????????????? ?? ???????????????????? ?????????? ???????????????????????? ???? ???????????? ???????????????????? ?????????????? ?????????????????? ?? ?????????????????????? ????????????, ???? ?? ?????????????????? ???????????????? ?? ?????????????????? ????????????????.',
          budget: '0.07',
          prediction: ''
        }
      ],
      desire: [
        {
          title: "????????????????-?????????????? (?????????????? Google ads): ?????? ???????????? ?? ?????????????? ???????????????????? ?????????????? ???????????????????????? ?????????????????? ???????? ??????????????: ???????????????? Performance Max ?? Discovery. ?????????????????? ???????????????????????????? ???? ??????????.",
          budget: '0.05',
          prediction: 'CTR - 1,0%, CPC - 0,95 ??????., CR - 31%'
        },
        {
          title: '???????????????? ?? ????????????????????????: ?????????????????? ?????????????????????????????????? ?? ???????????????? ????????????????????, ???????????????????? ?????????????????????????????????????? ????????????.',
          budget: '0.05',
          prediction: ''
        }
      ],
      action: [
        {
          title: "??????????????????????: ?????????????????????????? ?????????????????????????? ???????????????????? ?????? ???????????? ??????????????????????, ?????????????? ?????????? ?????????????????????????? ???????????????? ??????????, ?????????? ???????????? ?????????????????????????? ???? ?? ????????????????.",
          budget: '0.2',
          prediction: 'CTR - 2,5%, CPC - 0,85 ??????., CR - 40%'
        }
      ],
      branching: {
        promotion_goal: "?????????????????? ????????????????????????",
        sphere: "????????????????"
      }
    },
    {
      awareness: [
        {
          title: "?????????????? ?? ???????????????????? ??????????: ?????????? ??????????????????, ?????? Facebook ?? Instagram, ?????????? ???????????????????????????? ?????? ???????????? ?????????????????????????? ???????????????? ?? ?????????????????? ??????????????????????????????. ?????????????????? ???????????????????????????? ???? ?????????????????? ?????????????????????????? ?? ?????????????????????????????? ????????????.",
          budget: '0.15',
          prediction: ' CTR - 1,5%, CPC - 0,35 ??????., CR - 2,1%'
        },
        {
          title: '?????????????? ?? Tik-Tok: ???????????? ???????????????? ???????????????? ?????????????????? ?? ???????????????????? ???? ???????? ???????????????????????? ?? ???????????? ????????????. ?????????????????? ?????????????????????????????? ??????????????',
          budget: '0.15',
          prediction: 'CTR - 0,35%, CPC - 0,70 ??????., CR - 1,1%.'
        },
        {
          title: '????????????????-?????????????? (?????????????? Google ads): ?????? ?????????????????? ???????????????????????? ?????????????? ???????????????????????? ?????????????????? ???????? ??????????????: ?????????????? ?? ????????????????????-???????????????? ???????? Google ?? ???????????????? Performance Max (???????????????????? CTR - 0,40%, CPC - 0,27 ??????., CR - 2,1%). ?????????????????? ???????????????????????????? ???? ???????????????? ???????????? ?? ?????????????????? ??????????????????????????, ???? ??????????.',
          budget: '0.1',
          prediction: ''
        }
      ],
      interest: [
        {
          title: "?????????????????? ??????????????: ?????????????????????? ?? ?????????????????????? ?????????????????????? ??????????-?????????????????????????? ?? ???????????????? ?????????? ???????????? ???????????????? ???????????????????? ?????????????????????? ?? ???????????? ?? ?????????????? ?????????????? ?? ??????????????????????.",
          budget: '0.15',
          prediction: ''
        },
        {
          title: '?????????????????????? ??????????????????: ???????????????? ?????????????? ???????????????? ?? ?????????????? ?????????????? ???? ???????? ???????????????????? ???????????? ???? ?????? ???????? ?? ?????????????????? ????????????????????. ?????????????????? ???????????????? ?????????? ?????????????????? ?????????????????????? ???????? edme.by.',
          budget: '0.1',
          prediction: ''
        },
        {
          title: '?????????????????? ?? ???????????????????? ??????????: ???????????????? ?????????????? ?????????????????? ?????????????????? ?? ???????????????????? ?????????? ???????????????????????? ???? ???????????? ???????????????????? ?????????????? ?????????????????? ?? ?????????????????????? ????????????, ???? ?? ?????????????????? ???????????????? ?? ?????????????????? ????????????????.',
          budget: '0.05',
          prediction: ''
        }
      ],
      desire: [
        {
          title: "????????????????-?????????????? (?????????????? Google ads): ?????? ???????????? ?? ?????????????? ???????????????????? ?????????????? ???????????????????????? ?????????????????? ???????? ??????????????: ???????????????? Performance Max ?? Discovery. ?????????????????? ???????????????????????????? ???? ??????????.",
          budget: '0.05',
          prediction: 'CTR - 1,2%, CPC - 0,95 ??????., CR - 30%'
        },
        {
          title: '???????????????? ?? ????????????????????????: ?????????????????? ?????????????????????????????????? ?? ???????????????? ????????????????????, ???????????????????? ?????????????????????????????????????? ????????????.',
          budget: '0.05',
          prediction: ''
        }
      ],
      action: [
        {
          title: "??????????????????????: ?????????????????????????? ?????????????????????????? ???????????????????? ?????? ???????????? ??????????????????????, ?????????????? ?????????? ?????????????????????????? ???????????????? ??????????, ?????????? ???????????? ?????????????????????????? ???? ?? ????????????????.",
          budget: '0.2',
          prediction: 'CTR - 2,5%, CPC - 0,85 ??????., CR - 40%'
        }
      ],
      branching: {
        promotion_goal: "?????????????????? ????????????????????????",
        sphere: "??????????????????????"
      }
    },
    {
      awareness: [
        {
          title: "????????????????-?????????????? (?????????????? Google ads): ?????? ?????????????????? ???????????????????????? ?????????????? ???????????????????????? ?????????????????? ???????? ??????????????: ?????????????? ?? ????????????????????-???????????????? ???????? Google, ???????????????? Discovery ?? Performance Max. ?????????????????? ???????????????????????????? ???? ???????????????? ???????????? ?? ?????????????????? ??????????????????????????, ???? ??????????.",
          budget: '0.25',
          prediction: 'CTR - 0,8%, CPC - 0,15 ??????., CR - 2%'
        },
        {
          title: '?????????????? ?? ???????????????????? ??????????: ?????????? ??????????????????, ?????? Facebook ?? Instagram, ?????????? ???????????????????????????? ?????? ???????????? ?????????????????????????? ???????????????? ?? ?????????????????? ??????????????????????????????. ?????????????????? ???????????????????????????? ???? ?????????????????? ?????????????????????????? ?? ?????????????????????????????? ????????????.',
          budget: '0.15',
          prediction: 'CTR - 1,1%, CPC - 0,45 ??????., CR - 3%'
        }
      ],
      interest: [
        {
          title: "?????????????????? ??????????????: ?????????????????????? ?? ?????????????????????? ?????????????????????? ??????????-?????????????????????????? ?? ???????????????? ?????????? ???????????? ???????????????? ???????????????????? ?????????????????????? ?? ???????????? ?? ?????????????? ?????????????? ?? ??????????????????????.",
          budget: '0.15',
          prediction: ''
        },
        {
          title: '?????????????????? ?? ???????????????????? ??????????: ???????????????? ?????????????? ?????????????????? ?????????????????? ?? ???????????????????? ?????????? ???????????????????????? ???? ???????????? ???????????????????? ?????????????? ?????????????????? ?? ?????????????????????? ????????????, ???? ?? ?????????????????? ???????????????? ?? ?????????????????? ????????????????.',
          budget: '0.2',
          prediction: ''
        }
      ],
      desire: [
        {
          title: "?????????????? ?? ???????????????????? ?????????? (?????????????? Facebook ads): ?????? ???????????? ?? ?????????????? ???????????????????? ?????????????? ???????????????????????? ?????????????????? ???????? ??????????????: ????????????????, ???????????????????????? ???? ??????????????????. ?????????????????? ???????????????????????????? ???? ???????????????????? ?? ?????????????????????????????? ????????????.",
          budget: '0.07',
          prediction: ' CTR - 2,9%, CPC - 0,65 ??????., CR - 16%'
        },
        {
          title: '???????????????? ?? ????????????????????????: ?????????????????? ?????????????????????????????????? ?? ???????????????? ????????????????????, ???????????????????? ?????????????????????????????????????? ????????????. ?????????? ?????????? ???????????????????????? ?????????????????????? ???????????????????? viber ?????? ????????????????.',
          budget: '0.03',
          prediction: ''
        }
      ],
      action: [
        {
          title: "??????????????????????: ?????????????????????????? ?????????????????????????? ???????????????????? ?????? ???????????? ??????????????????????, ?????????????? ?????????? ?????????????????????????? ???????????????? ??????????, ?????????? ???????????? ?????????????????????????? ???? ?? ????????????????.",
          budget: '0.2',
          prediction: 'CTR - 2,9%, CPC - 0,75 ??????., CR - 29%'
        }
      ],
      branching: {
        promotion_goal: "???????????????????? ???????????? ???? ???????????? ?? ????????????",
        sphere: "??????????????????????"
      }
    }
  ]
}

// const data = require('./data.json');

// console.log('data.title : ', data.predictions[0].awareness.content)