const quiz = [
    {
      question: 'ドラクエ10で、イオ系最強呪文は？',
      answers: [ 'イオラ', 'イオナズン', 'イオグランデ', 'アリアナグランデ'],
      correct: 'イオグランデ'
    }, {
      question: 'ドラクエ10の魔法の迷宮で、エルフの飲み薬を売ってくれる導かれし人の名前は？',
      answers: [ 'トルネコ', 'エルおじ', 'ミネア', 'ミヤネ屋'],
      correct: 'トルネコ'
    }, {
      question: 'ドラクエ10で、見た目装備や髪型などでおしゃれすることを通称何と呼ぶ？',
      answers: [ 'おめかし', 'メイクアップ', 'ドレア', 'ドレアム'],
      correct: 'ドレア'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
  
    const buttonLen = $buttons.length;
    let btnIndex = 0;
  
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      // $window.alert('クイズ終了！');
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解!');
      score++;
    } else {
      $window.alert('不正解!');
    }
    goToNext();
  };
  
  const showEnd = () => {
    $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  } 