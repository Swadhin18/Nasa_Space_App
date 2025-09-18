import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', textAlign: 'center' }}>
            <p>&copy; 2025 Front2Space. All rights reserved.</p>
            <p>
                <a href="/privacy" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a> | 
                <a href="/terms" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Terms of Service</a>
            </p>
        </footer>
    );
}

export default Footer;