export const loading = (appLoading = true, action) => {
  switch (action.type) {
    case 'DATA_AVAILABLE': 
      return action.payload;
    default: 
      return appLoading;
  }
}

export const nearbyBusinesses = (nearbyBusinesses = [], action) => {
  switch (action.type) {
    case 'FETCH_NEARBY':
      return action.payload;
    default: 
      return nearbyBusinesses;
  }
}

export const idBusiness = (id = null, action) => {
  switch (action.type) {
    case 'ID_BUSINESS': 
      return action.payload;
    default: 
      return id;
  }
}