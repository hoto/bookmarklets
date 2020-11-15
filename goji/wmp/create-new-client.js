javascript:(() => {

  const populateNewClientFields = () => {
    document.querySelector("[data-key='identity.firstName']").value = 'Humpty'
    document.querySelector("[data-key='identity.lastName']").value = 'Dumpty'
    document.querySelector("[data-key='identity.dateOfBirth']").value = '1970-01-30'
    document.querySelector("[data-key='contactDetails.email']").value = 'humpty.dumpy@example.com'
    document.querySelector("[data-key='address.lineOne']").value = 'Egg lane'
    document.querySelector("[data-key='address.lineTwo']").value = 'Two omelettes street'
    document.querySelector("[data-key='address.lineThree']").value = 'Jam court'
    document.querySelector("[data-key='address.townCity']").value = 'London'
    document.querySelector("[data-key='sourceOfFunds.accountName']").value = 'Dumpty account'
    document.querySelector("[data-key='sourceOfFunds.iban']").value = 'IBAN00000001'
    document.querySelector("[data-key='sourceOfFunds.bic']").value = 'BIC000000001'
  }

  (window.hacks = {populateNewClientFields})
})();
