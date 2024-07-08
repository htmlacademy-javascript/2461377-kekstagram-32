
import { createRandomIdFromRangeGenerator, getRandomInteger } from './random-integer';
import { getComments } from './comment-array.js';

const PHOTO_ARRAY_LENGTH = 25;
const likesCount = {
  MIN: 15,
  MAX: 200,
};

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

const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTO_ARRAY_LENGTH);

function createDescriptionPhoto() {
  const numberPhoto = generatePhotoId();
  return {
    id: numberPhoto,
    url: `photos/${numberPhoto}.jpg`,
    description: DESCRIPTIONS[numberPhoto - 1],
    likes: getRandomInteger(likesCount.MIN, likesCount.MAX),
    comments: getComments(),
  };
}

const getArrayPhoto = () => Array.from({ length: PHOTO_ARRAY_LENGTH }, createDescriptionPhoto);

export { getArrayPhoto };
