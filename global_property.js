const Property = (function() {
  /** @type {string} */
  const apiRoot = `${sessionStorage.apiProtocol}://${sessionStorage.apiURL}:${sessionStorage.apiPort}/api/v1`;

  /** @type {object} */
  const headers = {
    "Content-Type": "application/json",
    Authorization: sessionStorage.authorization
  };

  /** @type {object} */
  let property = {};

  /**
   * Function to initialize an Observation
   *
   * @param {object} data
   *
   * @return {undefined}
   */
  function init(data = {}) {
    property = data;
  }

  /**
   * Function to ask the EMR-API for a global property given a property name
   * @param {String} property 
   */
  function find(property) {
    return fetch(`${apiRoot}/global_properties?property=${property}`, {
      method: 'GET',
      headers: headers
    })
  }

  return { find };
})();