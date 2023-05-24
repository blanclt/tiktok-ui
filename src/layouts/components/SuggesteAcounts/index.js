import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import classNames from 'classnames/bind';
import styles from './SuggesteAcounts.module.scss';
const cx = classNames.bind(styles);
function SuggesteAcounts({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}
SuggesteAcounts.propTypes = {
    lable: PropTypes.string.isRequired,
};
export default SuggesteAcounts;
