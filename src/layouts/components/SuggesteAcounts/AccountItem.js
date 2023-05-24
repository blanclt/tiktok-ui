import classNames from 'classnames/bind';
import styles from './SuggesteAcounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as ProperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <ProperWrapper>
                    <AccountPreview />
                </ProperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-20, 0]} placement="bottom" delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-nam-cuc-ngau-438x600.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Kaito Kid</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Kaito Kid</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
export default AccountItem;
