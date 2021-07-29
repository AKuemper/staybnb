// constants
const SET_LISTINGS = 'listings/SET_LISTINGS';

const setListings = (listings) => ({
  type: SET_LISTINGS,
  listings,
});

export const getListings = (id) => async (dispatch) => {
  const response = await fetch(`/api/listings/users/${Number(id)}`);

  if (response.ok) {
    const listings = await response.json();
    dispatch(setListings(listings));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.'];
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_LISTINGS:
      const { listings } = action.listings;
      const newListings = {};
      listings.forEach((listing) => {
        newListings[listing.id] = listing;
      });
      newState = { ...state, ...newListings };
      return newState;
    default:
      return state;
  }
}
