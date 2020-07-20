import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.svg';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
            <header>
            <img src={logo} alt="Ecoleta"/>
            </header>

            <main>
                <h1>Seu marketplace para a coleta de resíduos</h1>
                <p>Ajudamos as pessoas a encontrar pontos de coleta</p>

                <Link to="/create-point">
                    <span>
                        <FiLogIn/>
                    </span>
                    <strong>Cadastre um ponto de coleta</strong>
                </Link>
            </main>
            </div>
        </div>
    )
}

export default Home;