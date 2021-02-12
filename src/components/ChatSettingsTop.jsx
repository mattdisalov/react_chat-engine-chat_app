import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';

const handleLogout = () => {
    window.localStorage.clear();

    window.location.reload();
    return false;
};

const ChatSettingsTop = () => {
    return (
        <button type="button" className="logout-button" onClick={handleLogout}>
            <LogoutOutlined className="logout-icon" /> Log Out
        </button>
    );
};

export default ChatSettingsTop; 