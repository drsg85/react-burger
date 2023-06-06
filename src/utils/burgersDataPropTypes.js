import PropTypes from 'prop-types';

const burgersDataPropTypes = PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
});

export default burgersDataPropTypes;