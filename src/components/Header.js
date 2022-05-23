import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
            <div className='logo'>
                <a href='https://www.netflix.com.br'></a>
                <img src='https://gkpb.com.br/wp-content/uploads/2016/06/novo-icone-identidade-visual-logo-netflix-blog-gkpb.jpg' alt='logomarca da netflix' />
            </div>
            <div className='user'>
                <a href='https://www.netflix.com.br'></a>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='icone do usuário' />
            </div>
        </header>
    )
}

export default Header