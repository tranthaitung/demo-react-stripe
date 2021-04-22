import React from 'react';
import { HeaderCommonLayoutStyles, ExtraStyle } from './Header.styles';
import UserDropdown from '../UserDropdown/UserDropdown';

function HeaderLayout() {
  const history = '';
  const user = true;
  const userRoles = '';
  const subscriptionState = '';

  // const showSubscriptionButton = useMemo(
  //     () =>
  //         isAuthorized({ userRoles, permissions: [ROLES.BUSINESS_ADMIN] }) &&
  //         subscriptionState === VERIFICATION_STATUS.NOT_VERIFY,
  //     [userRoles, subscriptionState]
  // );

  // if (!user)
  //     return (
  //         <>
  //             <HeaderCommonLayoutStyles extra={<UserDropdown />} subTitle={null} isHomePage />
  //         </>
  //     );

  return (
    <>
      <HeaderCommonLayoutStyles
        isHomePage
        extra={
          <ExtraStyle>
            {/* {showSubscriptionButton && (
                            <Button
                                icon={<DollarOutlined className="btn-golden__icon" />}
                                className="btn-golden"
                                onClick={() => history.push('/subscription/package')}
                            >
                                Become Golden Sponsor
                            </Button>
                        )} */}
            <UserDropdown/>
          </ExtraStyle>
        }
        subTitle={null}
        className={null}
      />
    </>
  );
}

export default HeaderLayout;
