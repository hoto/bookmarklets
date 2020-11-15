javascript:(() => {
  const fillIn = (fieldName, fieldValue) => {
    document.querySelector(`[data-key='${fieldName}']`).value = fieldValue;
  };
  fillIn("identity.firstName", "Andy");
  fillIn("identity.lastName", "Rehmann");
})();
