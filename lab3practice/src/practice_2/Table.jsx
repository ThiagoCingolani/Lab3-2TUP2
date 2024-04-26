import PropTypes from 'prop-types';
import React from 'react';

const Table = ({brand, income}) => {
    return (
        <table>
            <tr>
                <td>{brand}</td>
                <td>{income}</td>
            </tr>
        </table>
    );
};

Table.propTypes = {
    brand: PropTypes.string,
    income: PropTypes.number,
};

export default Table;