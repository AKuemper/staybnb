import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import SmallImageSlider from '../ImageSlider/SmallImageSlider';

import './SearchResults.css';

const SearchResults = () => {
  const { cityName, stateName } = useParams();

  const bookings = useSelector((state) => state.bookings);
  const searchResultListings = useSelector((state) =>
    Object.values(state.searchResults)
  );

  const getNumberOfDays = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  };

  const getTotal = (days, ppn) => {
    return days * ppn;
  };

  console.log(getNumberOfDays(bookings.start_date, bookings.end_date));

  const city = bookings.city;
  const state = bookings.state;

  const options = { month: 'short', day: 'numeric' };

  return (
    <div className='search_results__container'>
      <div className='search-results__listings_container'>
        <div className='search-results__heading-container'>
          <div className='search-results__heading-details'>
            {searchResultListings.length > 1
              ? `${searchResultListings.length} stays `
              : `${searchResultListings.length} stay `}

            {!bookings.start_date
              ? ''
              : `· ${bookings.start_date.toLocaleDateString(
                  'en-us',
                  options
                )} - ${bookings.end_date.toLocaleDateString(
                  'en-us',
                  options
                )} `}
            {!bookings.guestCount
              ? ''
              : bookings.guestCount > 1
              ? `· ${bookings.guestCount} guests `
              : `· ${bookings.guestCount} guest `}
          </div>
          <div className='search-results__heading-city'>{`Stays in ${cityName}`}</div>
        </div>
        <div className='search-results__bottom-divider'></div>

        <div className='search-results__listings-container'>
          {searchResultListings &&
            searchResultListings.map((listing) => (
              <>
                <div
                  to={`/listings/view/${listing.title}/${listing.id}`}
                  className='search-results__listings'
                >
                  <div className='search-results__listing-photo-container'>
                    <div className='search-results__listing-photo'>
                      {listing?.listing_images.length &&
                      listing?.listing_images.length >= 1 ? (
                        <SmallImageSlider
                          className='small-listing-image'
                          images={listing?.listing_images}
                          listing={listing}
                        />
                      ) : (
                        <img
                          src='https://lahousing.lacity.org/AAHR/Images/No_Image_Available.jpg'
                          alt=''
                          className='small-listing-image'
                        />
                      )}
                    </div>
                  </div>
                  <Link
                    to={`/listings/view/${listing.title}/${listing.id}`}
                    className='search-results__listing-details'
                  >
                    <div className='search-results__listing-header'>
                      <div className='search-results__listing-type-city'>
                        {listing.space} in {listing.city}
                      </div>
                      <div className='search-results__listing-title'>
                        {listing.title}
                      </div>
                    </div>
                    <div className='search-results__listing-small-divider'></div>
                    <div className='search-results_listing-guest-bed-bath'>
                      <div className='search-results__listing-info-text'>
                        {listing.sleeps > 1
                          ? `${listing.sleeps} guests`
                          : `${listing.sleeps} guest`}
                      </div>
                      <div className='search-results__listing-info-text'>·</div>
                      <div className='search-results__listing-info-text'>
                        {listing.bedrooms > 1
                          ? `${listing.bedrooms} bedrooms`
                          : `${listing.bedrooms} bedroom`}
                      </div>
                      <div className='search-results__listing-info-text'>·</div>
                      <div className='search-results__listing-info-text'>
                        {listing.beds > 1
                          ? `${listing.beds} beds`
                          : `${listing.beds} bed`}
                      </div>
                      <div className='search-results__listing-info-text'>·</div>
                      <div className='search-results__listing-info-text'>
                        {listing.bathrooms > 1
                          ? `${listing.bathrooms} baths`
                          : `${listing.bathrooms} bath`}
                      </div>
                    </div>
                    <div className='search-results_listing-amenities'>
                      <div className='search-results__listing-info-text'>
                        {listing.parking}
                      </div>
                      <div className='search-results__listing-info-text'>·</div>
                      <div className='search-results__listing-info-text'>
                        {listing.wifi && 'Wifi'}
                      </div>
                      <div className='search-results__listing-info-text'>·</div>
                      <div className='search-results__listing-info-text'>
                        {listing.air_conditioning && 'Air Conditioning'}
                      </div>
                      <div className='search-results__listing-info-text'>·</div>
                      <div className='search-results__listing-info-text'>
                        {listing.heat && 'Heat'}
                      </div>
                    </div>
                    <div className='search-results_listing-dates-container'>
                      <div className='search-results__listing-next-available-dates'>
                        {!bookings.start_date && !bookings.end_date
                          ? 'No dates selected'
                          : `${new Date(bookings.start_date).toLocaleDateString(
                              'en-us',
                              options
                            )} - ${new Date(
                              bookings.end_date
                            ).toLocaleDateString('en-us', options)}`}
                      </div>
                    </div>
                    <div className='search-results__listing-price-container'>
                      <div className='amount-text'>$</div>
                      <div className='search-results__listing-nightly-price amount-text'>
                        {listing.price_per_night}
                      </div>
                      <div className='price-text price-divider'>/</div>
                      <div className='price-text night-text'>night</div>
                    </div>
                    <div className='search-results__listing-rating-total-container'>
                      <div className='search-results__listing-ratings-container'>
                        <div className='search-results__listing-star-icon  search-results__listing-ratings-text'>
                          (star)
                        </div>
                        <div className='search-results__listing-rating search-results__listing-ratings-text'>
                          (rating)
                        </div>
                        <div className='search-results__listing-total-reviews search-results__listing-ratings-text'>
                          (# reviews)
                        </div>
                      </div>
                      <div className='search-results__listing-total-container'>
                        <div className='search-results__listing-total-text'>
                          {isNaN(
                            getNumberOfDays(
                              bookings.start_date,
                              bookings.end_date
                            )
                          ) === false
                            ? `$${getTotal(
                                getNumberOfDays(
                                  bookings.start_date,
                                  bookings.end_date
                                ),
                                listing.price_per_night
                              )} total`
                            : '0'}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='search-results__bottom-divider'></div>
              </>
            ))}
        </div>
      </div>
      <div className='search-results__map-container'></div>
    </div>
  );
};

export default SearchResults;
