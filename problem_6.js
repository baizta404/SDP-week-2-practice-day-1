function karNamBoro(nams) {
  let boroNam = nams[0];

  for (let i = 0; i < nams.length; i++) {
    if (nams[i].length > boroNam.length) {
      boroNam = nams[i];
    }
  }

  return boroNam;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

console.log(karNamBoro(friends));
