const MAIN_ARRAY_LENGTH = 25;

const AVATAR_URL = 6;

const DESCRIPTIONS = [
  'Красивый отель на берегу',
  'Указатель к пляжу',
  'Лазурный прибой',
  'Модель в бикини',
  'Рисовый суп',
  'Суперкар',
  'Клубничный завтрак',
  'Морс',
  'Посадка самолета через пляж',
  'Лайфхак для обуви',
  'Песчаные тропы',
  'Властелин колец',
  'Почти греческий салат',
  'Которолл',
  'Робоботы',
  'Инверсионный след',
  'Хор',
  'Импала',
  'Ночные тапочки',
  'Пальмы среди хайтэка',
  'Салат на завтрак',
  'Яркий закат',
  'Мистер Крабс',
  'Громкий концерт',
  'Трофи в джунглях',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'DrZhuker',
  'XXXantonXXX',
  'Keks',
  'Yard',
  'Serg42',
  'Bulgakov',
  'SuperRazru$hitel2004',
  'Dina',
  'Gaika11',
  'chepelev.official',
  'love_ezhik',
  'ninchpop',
  'shevtsovdany',
  'borovskihmargo',
  'ma___nik',
  'zigzag_88',
  'rockwavefm',
  'shornevd',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateCommentId = createRandomIdFromRangeGenerator(1, 1000);

const createMessage = () => {
  const messageLength = getRandomInteger(0, 1);
  let message = MESSAGES[getRandomInteger(0, MESSAGES.length - 1)];
  for (let i = 0; i < messageLength; i++) {
    message += MESSAGES[getRandomInteger(0, MESSAGES.length - 1)];
  }
  return message;
};

function createComment() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar${getRandomInteger(1, AVATAR_URL)}.svg`,
    message: createMessage(),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
}

const comments = Array.from({ length: getRandomInteger(0, 30) }, createComment);

const generatePhotoId = createRandomIdFromRangeGenerator(1, MAIN_ARRAY_LENGTH);

function createDescriptionPhoto() {
  const numberPhoto = generatePhotoId();
  return {
    id: numberPhoto,
    url: `photos/${numberPhoto}.jpg`,
    description: DESCRIPTIONS[numberPhoto - 1],
    likes: getRandomInteger(15, 200),
    comments: comments,
  };
}


const photoMain = Array.from({ length: MAIN_ARRAY_LENGTH }, createDescriptionPhoto);

// eslint-disable-next-line no-console
console.log(photoMain);
