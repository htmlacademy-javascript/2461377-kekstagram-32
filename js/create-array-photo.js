
import { getRandomInteger } from './get-random-integer';
import { createRandomIdFromRangeGenerator } from './create-random-id';

const PHOTO_ARRAY_LENGTH = 25;
const AVATAR_COUNT = 6;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const ID_COMMENT_MIN_COUNT = 1;
const ID_COMMENT_MAX_COUNT = 10000;

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


const createMessage = () => {
  const messageLength = getRandomInteger(0, 1);
  let message = MESSAGES[getRandomInteger(0, MESSAGES.length - 1)];
  for (let i = 0; i < messageLength; i++) {
    message += MESSAGES[getRandomInteger(0, MESSAGES.length - 1)];
  }
  return message;
};


const generateCommentId = createRandomIdFromRangeGenerator(ID_COMMENT_MIN_COUNT, ID_COMMENT_MAX_COUNT);

function createComment() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: createMessage(),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
}

function getComments() {
  return Array.from({ length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT) }, createComment);
}
const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTO_ARRAY_LENGTH);

function createDescriptionPhoto() {
  const numberPhoto = generatePhotoId();
  return {
    id: numberPhoto,
    url: `photos/${numberPhoto}.jpg`,
    description: DESCRIPTIONS[numberPhoto - 1],
    likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments: getComments(),
  };
}


const createArrayPhoto = Array.from({ length: PHOTO_ARRAY_LENGTH }, createDescriptionPhoto);

export { createArrayPhoto };
