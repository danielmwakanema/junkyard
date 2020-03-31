class DHIS2QueryBuilder {
    constructor () {
      this.params = {
        indicatorId: 'dimension=dx:',
        orgUnit: 'dimension=ou:',
        startDate: 'dimension=pe:',
        endDate: 'dimension=pe:'
      }
    }
  
    build (args = {}) {
      return Object.entries(args).reduce((acc, [key, val], index) => {
        return index ? `${acc}&${this.params[key]}${val}` : `${acc}${this.params[key]}${val}`
      }, '?')
    }
  }
  
  function queryBuilder () {
    params = {
      indicatorId: 'dimension=dx:',
      orgUnit: 'dimension=ou:',
      startDate: 'dimension=pe:',
      endDate: 'dimension=pe:'
    }
  
    return (args = {}) => {
      return Object.entries(args).reduce((acc, [key, val], index) => {
        return index ? `${acc}&${this.params[key]}${val}` : `${acc}${this.params[key]}${val}`
      }, '')
    }
  }
  
  const query = queryBuilder()({ orgUnit: 'XXASASA', indicatorId: 'ASAKSJASJI' })
  console.log(query)