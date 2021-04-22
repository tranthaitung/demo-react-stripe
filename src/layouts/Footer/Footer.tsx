import React from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import {Footer, LocationStyle, LinkWrapper} from './Footer.styles';

const { Text } = Typography;

export default function FooterCommon({ isHomePage }) {
    return (
        <Footer>
            <LocationStyle>
                <EnvironmentOutlined />
                <Text>Ho Chi Minh, Vietnam</Text>
            </LocationStyle>

            <LinkWrapper size={24}>
                <Link to="/">Business</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Terms</Link>
                <Link to="/">Settings</Link>
                <Link to="/">Help</Link>
                <Link to="/">Feedback</Link>
            </LinkWrapper>
        </Footer>
    );
}
