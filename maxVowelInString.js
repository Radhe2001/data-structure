var maxVowels = function (s, k) {
  function checkVowel(a) {
    if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u")
      return true;
    return false;
  }

  let max = 0,
    count = 0,
    j = 0;

  for (let i = 0; i < s.length; i++) {
    let isVowel = checkVowel(s[i]);
    if (isVowel) count++;
    if (i > j + k - 1) {
      let tempVowel = checkVowel(s[i - k + 1]);
      if (tempVowel) count--;
      j++;
    }
    console.log(s[i], s[j]);
  }
};

console.log(maxVowels("abciiidef", 3));
