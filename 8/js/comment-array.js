import { createRandomIdFromRangeGenerator, getRandomInteger } from './util.js';


const avatarCount = {
  MIN: 1,
  MAX: 6,
};
const commentsCount = {
  MIN: 0,
  MAX: 30,
};
const idCommentCount = {
  MIN: 1,
  MAX: 1000,
};
const messageCount = {
  MIN: 1,
  MAX: 2,
};

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
  const messageLength = getRandomInteger(messageCount.MIN, messageCount.MAX);
  let message = MESSAGES[getRandomInteger(0, MESSAGES.length - 1)];
  for (let i = messageCount.MIN; i < messageLength; i++) {
    message += ` ${MESSAGES[getRandomInteger(0, MESSAGES.length - 1)]}`;
  }
  return message;
};

const generateCommentId = createRandomIdFromRangeGenerator(idCommentCount.MIN, idCommentCount.MAX);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `/img/avatar-${getRandomInteger(avatarCount.MIN, avatarCount.MAX)}.svg`,
  message: createMessage(),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const getComments = () => Array.from({ length: getRandomInteger(commentsCount.MIN, commentsCount.MAX) }, createComment);

export { getComments };
