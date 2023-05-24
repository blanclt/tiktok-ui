import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-nam-cuc-ngau-438x600.jpg"
                    alt=""
                />
                <Button className={cx('follow-btn')} small>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Kaito Kid</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Kaito Kid</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2k </strong>
                    <span className={cx('lable')}>Follower</span>
                    <strong className={cx('value')}>8.2k </strong>
                    <span className={cx('lable')}>Follower</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
