import axios from 'axios';

export const FETCH_PHOTO_START = 'FETCH_PHOTO_START';
export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const FETCH_PHOTO_FAILURE = 'FETCH_PHOTO_FAILURE';

// the returned function is a thunk
export const getPhoto = () => dispatch => {
  dispatch({ type: FETCH_PHOTO_START });
  axios
    .get(
      'https://api.nasa.gov/planetary/apod?api_key=Cvb4YpR38HIb85rJofCrCZuvofN5coBIpdSBaFOe&date=2019-07-15'
    )
    .then(res => dispatch({ type: FETCH_PHOTO_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_PHOTO_FAILURE, payload: err }));
};

// export const getPhoto = () => {
//   // the returned function is a thunk
//   return function(dispatch) {
//     dispatch({ type: FETCH_PHOTO })
//   }
// }
