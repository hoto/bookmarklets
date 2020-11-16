javascript:(() => {
  const randomNumber = (upTo) => Math.floor(Math.random() * upTo);
  const randomLetter = (letters) => letters.charAt(randomNumber(letters.length));
  const firstTwoLetters = () => {
    const firstLetter = () => randomLetter('ABCEGHJKLMNOPRSTWZ');
    const secondLetter = () => randomLetter('ABCEGHJKLMNPRSTWZ');
    const combination = firstLetter() + secondLetter();
    const invalidCombinations = ['BG', 'GB', 'NK', 'KN', 'TN', 'NT', 'ZZ'];
    return invalidCombinations.includes(combination) ? firstTwoLetters() : combination;
  };

  const randomUkPostCode = () => {
    const lastLetter = () => randomLetter('ABCDEFGHIJKLMNOPRSTUWXYZ');
    const num = () => randomNumber(10);
    return firstTwoLetters() + num() + ' ' + num() + lastLetter() + lastLetter();
  };

  const randomNINO = () => {
    const lastLetter = () => randomLetter('ABCD');
    const num = () => randomNumber(10);
    return firstTwoLetters() + num() + num() + num() + num() + num() + num() + lastLetter();
  };

  const randomAlphanumeric = (n) => {
    const letter = () => randomLetter('ABCDEFGHIJKLMNOPRSTUWXYZ');
    const num = () => randomNumber(10);
    let random = '';
    while (n > 0) {
      random = random.concat(Math.random() > 0.5 ? num() : letter());
      n--;
    }
    return random;
  };

  document.querySelector("[data-key='identity.firstName']").value = 'Humpty';
  document.querySelector("[data-key='identity.lastName']").value = 'Dumpty';
  document.querySelector("[data-key='identity.dateOfBirth']").value = '1970-01-30';
  document.querySelector("[data-key='contactDetails.email']").value = `humpty.dumpy+${randomAlphanumeric(8)}@example.com`;
  document.querySelector("[data-key='address.lineOne']").value = 'Egg lane';
  document.querySelector("[data-key='address.lineTwo']").value = 'Two omelettes street';
  document.querySelector("[data-key='address.lineThree']").value = 'Jam court';
  document.querySelector("[data-key='address.postcode']").value = randomUkPostCode();
  document.querySelector("[data-key='address.townCity']").value = 'London';
  document.querySelector("[data-key='sourceOfFunds.accountName']").value = 'Dumpty account';
  document.querySelector("[data-key='sourceOfFunds.iban']").value = 'IBAN00000001';
  document.querySelector("[data-key='sourceOfFunds.bic']").value = 'BIC000000001';

})();
