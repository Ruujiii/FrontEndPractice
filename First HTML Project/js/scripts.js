function clearAll() {
  
    let click = new Audio("sounds/click.mp3"); 
    click.play();
    const container1 = document.querySelector('.container1');
    const container2 = document.querySelector('.container2');
    const container3 = document.querySelector('.container3');
    const container4 = document.querySelector('.container4');
    
    container1.innerHTML = '';
    container2.innerHTML = '';
    container3.innerHTML = '';
    container4.innerHTML = '';
  }
  
  function showMeme() {

    const randomMemeUrl = getRandomData('memes');
    const container1 = document.querySelector('.container1');
    const img = document.createElement('img');
    img.setAttribute('src', randomMemeUrl);
    
    const show = container1.querySelector('img');
    
    clearAll();
    container1.appendChild(img);
  }
  
  function showJoke() {

    const randomJokeText = getRandomData('jokes');
    const jokeP = document.createElement('p');
    jokeP.textContent = randomJokeText;
    
    clearAll();
    
    document.querySelector('.container2').appendChild(jokeP);
  }
  
  function showQuote() {

    const randomQuote = getRandomData('quotes');
    const container3 = document.querySelector('.container3');
    const quoteP = document.createElement('p');
    const authorP = document.createElement('p');
    quoteP.textContent = randomQuote.quote;
    authorP.textContent = "- " + randomQuote.author;
    
    clearAll();
    
    container3.appendChild(quoteP);
    container3.appendChild(authorP);
  }

  function showRiddle() {

    const randomRiddle = getRandomData('riddles');
    const container4 = document.querySelector('.container4');
    
    const riddle = randomRiddle.question;
    const riddleP = document.createElement('p');
    riddleP.textContent = riddle;
    
    const answer = randomRiddle.answer;
    const answerP = document.createElement('p');
    answerP.textContent = answer;
    answerP.setAttribute('id', 'answer');
    answerP.hidden = true;
    
    clearAll();
    
    container4.appendChild(riddleP);
    container4.appendChild(answerP);
  }

  function revealAnswers() {

    const container4 = document.querySelector('.container4');
    const isRiddle = container4.querySelector('p');
    const answer = document.querySelector('#answer');
  
    if (isRiddle && answer.hidden) {
      
      answer.hidden = false;
    }
    
    else if (isRiddle) {
      
      alert("You blind?");
    }
    
    else {
      
      alert("What are you on?");
    }
  }
  
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
  
  const memes = ['https://preview.redd.it/eykufc63s1z71.jpg?width=1080&crop=smart&auto=webp&v=enabled&s=7ed234307310e5747de05dcbb33400c794b774d9', 'https://preview.redd.it/6jywtw8u7k851.jpg?auto=webp&v=enabled&s=aeb77043683446eb5b772a86c6dad4e02f8c8b97', 'https://i.kym-cdn.com/photos/images/newsfeed/001/019/736/198.jpg', 'https://preview.redd.it/zn6ju5yhogy71.jpg?width=1080&crop=smart&auto=webp&v=enabled&s=d5de60e59a61b68c11fb3622710a57693d6871e0', 'https://preview.redd.it/surely-now-you-understand-v0-hob6pt7g5dpa1.gif?width=640&crop=smart&format=png8&s=4765c3edcddf6ee882d3cb325b763ffd962860c3', 'https://pbs.twimg.com/media/FToeGygXoAItRTV?format=jpg&name=small', 'https://preview.redd.it/looks-good-enough-v0-o86er9ctmepa1.jpg?auto=webp&v=enabled&s=5655b862917e70c5715f07c21c6812009c76991e', 'https://preview.redd.it/i-am-stronger-i-am-smarter-i-am-better-v0-m6w77q7ko9pa1.png?auto=webp&v=enabled&s=0dcf36b8d97eb4a86dd8e3c21462233d35cdb421', 'https://preview.redd.it/icy-roads-be-like-v0-wp60gq5jaapa1.jpg?auto=webp&v=enabled&s=e965984ecca08d8f1fc70896cc96b7a01cca7510', 'https://images7.memedroid.com/images/UPLOADED613/59a295b5da51a.jpeg', 'https://preview.redd.it/ivtlw7d06vn21.jpg?width=1080&crop=smart&auto=webp&v=enabled&s=6182042962a048fa17364ad9f7af6d608e23f01c', 'http://www.quickmeme.com/img/b7/b75b843d85b46bb2e0bae809669c82e35da7103b0c77e53b48686e890648ebde.jpg', 'https://preview.redd.it/thailand-v0-cskkxge2dapa1.jpg?auto=webp&v=enabled&s=f41ceaf8326ecd3f49d9d639428b6afd02750eb9'];

  const jokes = ['I have a stepladder because my real ladder left when I was just a kid.', 'I was playing chess with my friend and he said, “Let’s make this interesting.” So we stopped playing chess.', 'Patient: Oh doctor, I’m just so nervous. This is my first operation. Doctor: Don’t worry. Mine too.', 'I childproofed my house. Somehow they still got in!', 'The guy who stole my diary just died. My thoughts are with his family.', 'You’re not completely useless. You can always serve as a bad example.', 'My boss told me to have a good day. So I went home.', 'A child determined to burn his home down. His dad watched, tears in his eyes. He put his arm across the mother and stated, “That’s arson.”', 'Wife: “I want another baby.” Husband: “That’s a relief, I also really don’t like this one.”', 'Why are friends a lot like snow? If you pee on them, they disappear.'];

  const quotes = [
    { quote: 'If you want to shine like sun first you have to burn like it.', author: 'Adolf Hitler'},
    { quote: 'Anyone can deal with victory. Only the mighty can bear defeat.', author: 'Adolf Hitler' },
    { quote: 'Reading is not an end to itself, but a means to an end.', author: 'Adolf Hitler' },
    { quote: 'Haha you’re not circumcised nerd.', author: 'Sun Tzu' },
    { quote: 'Squirt in her then desert her.', author: 'Sun Tzu' },
    { quote: 'Shoot your seed and pick up speed.', author: 'Sun Tzu' },
    { quote: '"Every 60 seconds passes a minute." ', author: 'Sun Tzu' },
    { quote: 'A desert is half a beach.', author: 'Caluben' },
    { quote: 'Say what you will, but you have to admit. Slavery was efficient.', author: 'Geoff, ModestPelican' },
    { quote: 'The problem with quotes on the internet is that they are sometimes not real.', author: 'Sun Tzu' },
    { quote: 'People do what it do.', author: 'Zandril, Psychology Major' },
    { quote: 'What are sorcerers if not wizards without hats.', author: 'Sun Tzu' },
  ];
  
  const riddles = [
    { question: 'A man rode out of town on Sunday, he stayed a whole night at a hotel and rode back to town the next day on Sunday. How is this possible?', answer: 'His Horse was called Sunday!' },
    { question: 'It can’t be seen, can’t be felt, can’t be heard, and can’t be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, and kills laughter. What is it?', answer: 'The dark' },
    { question: 'I run in and out of town all day and night. What am I?', answer: 'A road' },
    { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
    { question: 'You’re certain to be wearing your best outfit or something special when you come to stay. What am I?', answer: 'A coffin' },
    { question: 'It doesn’t hurt when you carve my face. In fact, you bring me to life. What am I?', answer: 'A jack-o’-lantern' }
  ];
  
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
  const data = {
    memes,
    jokes,
    quotes,
    riddles
  };
  
  let snd = new Audio("sounds/music.mp3"); 
  snd.play();
  