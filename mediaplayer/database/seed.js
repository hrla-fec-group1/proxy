const db  = require('./index.js');
const Songs = require('./Songs.js');
const faker = require('faker');

const Data = [];
const Durations = [181, 76, 140, 170, 184, 146, 152, 173, 152, 145, 168, 148, 157, 139, 180, 180, 116, 109, 117, 171, 167, 156, 137, 153, 140, 106, 147, 121, 275, 106, 166, 81, 227, 122, 151, 98, 152, 138, 142, 126, 126, 167, 129, 141, 184, 148, 125, 151, 181, 135, 142, 143, 159, 144, 202, 133, 140, 159, 148, 158, 148, 128, 161, 226, 150, 204, 152, 126, 122, 140, 142, 163, 101, 128, 138, 115, 129, 205, 131, 136, 131, 221, 186, 156, 122, 131, 123, 204, 126, 202, 182, 201, 128, 148, 146, 230, 154, 118, 130];
const izoneWave = [0,0,2,3,6,6,13,16,23,25,19,27,25,40,36,35,42,40,53,52,84,92,60,47,63,44,29,44,68,65,40,26,31,30,65,36,16,35,64,58,39,35,51,56,68,40,37,57,73,57,28,29,43,51,72,32,30,65,72,72,103,52,47,51,56,24,23,64,64,52,22,23,24,45,54,17,16,58,68,58,38,45,59,72,57,42,55,77,74,44,13,21,54,47,60,47,24,35,34,84,85,56,44,55,59,41,37,41,30,18,14,64,87,69,54,41,42,42,50,84,75,42,35,44,53,54,52,33,17,15,30,92,91,71,43,25,52,42,73,93,73,35,41,49,24,28,43,33,31,24,36,80,68,54,38,22,40,31,87,84,51,36,41,43,27,34,51,46,35,25,72,94,73,53,37,65,51,51,93,77,61,64,68,53,52,62,57,44,34,36,98,97,74,59,45,51,44,72,96,68,47,41,57,49,50,56,48,42,44,59,93,71,80,44,41,60,35,86,90,64,47,54,50,34,42,48,44,39,39,64,99,63,62,47,46,53,45,96,92,50,47,62,45,29,58,62,52,49,44,83,93,75,74,63,65,65,76,100,86,41,79,101,97,75,92,74,81,98,82,61,80,100,86,63,95,68,88,101,82,79,101,103,84,78,78,69,98,100,48,48,86,98,91,76,86,77,99,100,64,44,93,103,86,66,80,57,104,93,56,64,93,93,70,64,87,85,93,93,81,91,96,92,74,71,61,72,93,80,55,74,89,105,88,74,75,83,98,74,25,56,94,96,69,72,59,83,90,53,44,71,90,93,70,70,76,88,90,62,35,68,106,86,75,79,66,94,73,46,60,82,96,85,76,86,89,102,91,60,62,79,100,80,72,73,81,93,82,65,67,84,89,79,87,82,91,89,67,61,89,102,91,74,96,82,90,91,73,86,95,100,101,78,86,79,113,105,66,76,79,43,32,60,106,85,66,61,53,61,49,82,64,47,92,90,114,97,66,58,61,67,57,95,104,89,66,54,58,58,73,75,60,61,52,53,115,97,79,63,69,58,58,94,96,71,65,50,52,51,83,69,58,52,42,95,89,89,65,53,62,76,87,117,98,80,90,83,88,70,99,85,93,93,95,115,112,106,105,108,112,105,111,97,94,92,87,93,80,92,92,76,83,76,74,89,64,68,83,91,63,40,93,85,81,90,75,84,85,81,46,37,82,85,94,69,69,61,83,95,85,92,95,77,90,87,88,71,88,95,70,70,95,67,106,106,95,94,89,106,95,98,111,92,104,103,106,110,103,109,112,105,105,96,36,29,54,58,52,53,62,54,59,57,55,50,52,49,42,49,37,37,37,87,98,72,49,52,72,54,52,107,98,61,56,70,102,99,82,59,56,66,57,86,78,61,70,64,72,47,68,103,81,47,44,71,88,85,80,57,78,105,86,116,111,82,86,88,90,94,107,121,84,67,80,97,107,96,74,67,86,78,79,99,81,91,85,84,84,73,106,95,91,86,71,101,105,90,84,71,100,83,93,99,68,49,64,79,57,69,106,88,54,59,78,105,94,79,57,57,64,55,92,72,62,69,63,64,49,83,97,79,46,49,90,95,85,85,59,94,107,97,114,109,94,92,100,103,98,106,110,77,85,65,100,107,95,70,65,91,82,95,101,92,94,88,91,86,82,114,99,87,77,75,102,103,97,74,67,86,82,107,94,68,70,56,66,53,58,65,58,32,22,48,47,48,44,40,38,35,33,51,37,34,54,55,29,21,53,47,34,41,25,35,45,44,24,47,57,31,28,60,43,45,49,54,50,47,51,60,50,25,34,36,36,54,50,38,42,39,23,12,11,14,13,48,41,40,40,41,41,35,39,53,51,61,53,58,59,30,98,93,66,56,54,67,55,54,73,44,51,55,90,108,75,53,59,51,65,67,104,70,63,55,61,68,61,72,75,67,60,47,96,76,95,51,45,69,79,98,101,60,53,66,65,47,45,83,49,47,54,83,101,98,77,29,48,75,49,102,96,47,68,79,51,58,64,60,38,70,49,74,88,71,81,81,72,76,69,101,97,45,65,105,103,83,98,84,79,104,96,51,80,99,89,70,93,71,85,105,99,89,95,103,92,71,68,79,92,104,61,49,92,105,99,73,91,86,103,100,67,38,93,108,96,72,92,62,105,105,77,51,92,99,81,70,87,85,98,97,91,97,100,96,81,72,66,68,98,88,62,76,80,96,80,75,76,82,93,81,33,56,80,96,79,80,64,85,96,70,60,83,94,93,76,83,77,92,93,71,33,66,103,90,79,91,72,96,87,45,55,80,98,85,73,90,96,106,98,74,50,88,99,98,86,74,77,97,91,67,77,86,94,81,81,84,77,40,40,79,90,91,60,56,90,85,68,59,53,84,96,83,76,67,101,100,120,111,76,82,81,63,45,45,107,93,68,71,56,66,56,91,76,56,88,82,113,106,70,67,63,69,63,88,112,92,70,61,58,53,67,82,63,54,45,47,110,102,91,69,78,64,56,96,103,78,80,54,50,48,86,73,64,53,44,76,99,90,71,58,65,75,85,115,98,82,105,95,97,82,99,88,86,90,89,114,115,104,104,106,106,106,109,98,90,98,95,86,77,79,102,88,84,76,53,83,59,70,74,85,76,51,74,68,57,78,83,85,81,75,65,46,66,74,79,92,73,68,78,89,112,106,89,60,90,104,84,62,69,99,101,83,75,48,90,107,90,100,81,105,101,100,100,92,105,109,113,106,94,113,106,111,107,99,45,60,65,71,63,73,65,62,65,58,62,56,49,52,45,45,51,45,39,55,99,79,53,50,66,58,51,106,102,64,56,59,104,109,82,63,58,65,57,81,80,64,69,64,69,48,60,107,85,50,43,68,91,86,89,60,72,105,101,113,99,96,92,96,101,120,114,112,96,89,69,85,109,98,79,64,84,93,92,103,89,96,91,89,110,76,107,101,95,90,90,96,109,94,99,107,112,95,93,101,79,57,63,76,55,62,104,93,56,56,62,107,94,79,57,53,62,55,90,75,63,67,67,67,48,73,101,78,48,42,80,95,85,89,60,82,104,96,115,117,81,91,97,98,88,110,108,80,75,82,96,109,94,72,68,83,100,105,96,78,88,82,84,83,89,84,88,91,92,82,103,99,75,66,52,45,47,88,92,81,75,75,82,81,80,79,77,78,73,65,66,61,71,70,60,56,51,56,52,38,33,30,43,47,45,37,33,35,22,33,40,28,53,59,59,54,74,107,58,49,57,43,60,52,55,56,54,63,51,43,36,56,48,50,36,32,38,59,60,58,59,34,35,44,88,58,55,85,81,55,56,91,100,75,96,93,113,111,90,68,70,96,91,95,105,98,102,92,73,68,81,98,93,84,109,86,116,105,96,93,96,100,79,79,86,90,87,73,59,53,81,97,88,92,99,85,111,94,51,38,67,83,73,110,102,92,93,77,46,58,94,107,78,105,99,104,112,100,81,102,102,72,83,105,103,104,83,81,90,85,97,79,99,104,102,119,108,94,91,87,64,41,85,104,93,87,53,72,57,71,85,74,104,108,104,115,84,72,82,81,91,74,109,110,91,80,55,68,54,87,114,71,65,52,88,103,82,65,90,81,62,76,103,79,99,72,57,53,59,85,80,76,102,76,111,106,101,87,88,111,93,110,118,95,97,90,105,108,79,98,97,99,112,104,118,110,103,101,102,109,105,106,90,95,96,89,79,73,92,88,85,81,54,73,72,70,75,84,86,57,51,77,73,85,92,79,72,77,72,42,46,70,62,101,85,72,67,72,104,111,100,72,61,109,103,78,59,77,106,98,81,71,51,104,97,96,89,81,105,95,95,98,89,111,109,112,99,92,114,108,99,100,70,23,34,64,57,54,74,57,65,46,71,86,45,58,50,64,74,69,73,45,95,99,86,67,74,89,68,81,111,90,73,66,86,110,98,83,65,69,84,72,104,76,62,73,73,70,46,88,91,73,45,43,91,91,82,75,61,100,109,90,100,95,90,86,87,74,110,105,109,80,81,85,100,110,94,69,72,102,87,100,91,91,95,79,92,81,83,112,94,93,91,81,104,98,99,75,83,101,79,102,97,72,66,72,77,62,90,106,78,65,68,98,107,86,72,54,64,67,69,96,74,72,80,80,77,63,106,92,65,44,50,95,79,93,83,76,98,72,89,100,81,58,74,93,68,66,108,98,76,70,65,108,105,87,67,55,81,78,106,88,89,104,94,94,106,95,93,85,94,96,84,90,94,96,94,107,104,86,85,82,89,95,103,103,108,91,92,82,98,70,88,95,91,97,72,102,99,98,94,76,73,77,93,79,67,74,73,86,87,77,73,79,99,101,77,96,89,103,106,96,93,97,112,100,90,86,66,90,77,73,92,94,95,86,77,98,88,99,83,73,85,78,107,87,84,88,82,108,98,80,78,80,103,91,83,84,84,105,101,83,78,81,84,70,66,55,79,102,74,82,91,104,99,57,84,94,109,78,61,76,78,95,81,64,71,70,96,89,90,94,88,101,98,81,98,85,116,116,81,84,91,105,106,87,97,80,110,107,58,67,84,103,92,88,93,87,99,79,72,86,90,99,86,81,76,72,107,79,65,70,81,104,89,95,80,60,43,29,20,15,11,7,4,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function makeSin () {
  let array = [];
  let freqOne = Math.random()*30 + 10;
  let freqTwo = Math.random()*30 + 10;
  for ( let n = 0; n < 1000; n++ ) {
    array.push( Math.floor(30*Math.sin(n/freqOne) + 30*Math.sin(n/freqTwo) + 70) );
  }
  return array;
}

let izone = {
  songId: 1,
  title: 'La Vie en Rose',
  artist: 'IZ*ONE',
  created: new Date('October 29, 2018'),
  category: 'K-Pop',
  waveData: izoneWave,
  audio: `https://s3-us-west-1.amazonaws.com/yongsoobucket/rose.mp3`,
  duration: 221,
  albumArt: 'https://s3-us-west-1.amazonaws.com/yongsoobucket/rose.jpg',
  comments: []
};

let seen = {};  //filter duplicates

for ( let i = 0; i < 200; i++ ) {
  let time = Math.floor(Math.random() * .95 * 221);
  if ( seen[time] === undefined ) {
    seen[time] = 1;
    izone.comments.push({
      time: time,
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      comment: faker.company.catchPhrase()
    })
  }
}

Data.push(izone);

for ( let n = 2; n <= 100; n++ ) {
  let obj = {
    songId: n,
    title: faker.commerce.productName(),
    artist: 'Twice',
    created: faker.date.past(),
    category: faker.commerce.department(),
    waveData: makeSin(),
    audio: `https://s3-us-west-1.amazonaws.com/yongsoobucket/${n}.mp3`,
    duration: Durations[n-2],
    albumArt: `https://s3-us-west-1.amazonaws.com/yongsoobucket/twice${Math.floor(Math.random()*10)%10}.jpg`,
    comments: []
  };

  let seen = {}; // filter duplicates

  for ( let i = 0; i < 20 + Math.floor(Math.random()*100); i++ ) {
    let time = Math.floor(Math.random() * .95 * Durations[n-2]);
    if ( seen[time] === undefined ) {
      seen[time] = 1;
      obj.comments.push({
        time: time,
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        comment: faker.company.catchPhrase()
      })
    }
  }

  Data.push(obj);
}

const insertSampleSongs = function() {
  Songs.create(Data)
    .then(() => db.close())
    .catch(error => console.error(error));
};

insertSampleSongs();