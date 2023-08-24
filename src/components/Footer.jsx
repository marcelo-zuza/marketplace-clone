import React from 'react'
import AmazonLogo from '../assets/img/amazon_logo.png'

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col text-white">
            {/* Upper Footer */}
            <div className="py-4 text-center bg-darkblue-600 hover:bg-darkblue-500 text-sm">
                <p>Voltar ao início</p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap md:justify-around py-10 px-10 md:px-20 bg-darkblue-700">
                <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                    <h4 className="font-bold mb-2">Conheça-nos</h4>
                    <ul className="text-xs w-3/4">
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Informações corporativas</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Carreiras</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Comunicados à imprensa</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Comunidade</a>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                    <h4 className="font-bold mb-2">Ganhe dinheiro conosco</h4>
                    <ul className="text-xs w-3/4">
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Publique seus livros</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Seja um associado</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Venda na Amazon</a>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                    <h4 className="font-bold mb-2">Conheça-nos</h4>
                    <ul className="text-xs w-3/4">
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Sua conta</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Frete e prazo de entrega</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Devoluções e reembolsos</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Gerencie seu conteúdo e dispositivos</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Ajuda</a>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                    <h4 className="font-bold mb-2">Pagamentos</h4>
                    <ul className="text-xs w-3/4">
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Amazon e COVID-19</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Cartôes de crédito e Boleto</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Med Footer */}
            <div className="hidden md:flex flex-col items-center bg-darkblue-700 border-t border-gray-700 pt-6 pb-4">
                <img src={AmazonLogo} alt="AmazonLogo" className="w-20" />
                <ul className="flex flex-wrap justify-center text-xs pt-4 w-3/4 text-gray-400">
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Austrália</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Austrália</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Alemanha</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Canadá</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">China</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Cingapura</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Espanha</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Estados Unidos</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">França</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Holanda</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Índia</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Japão</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">México</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Emirados Árabes Unidos</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Reino Unido</a>
                    </li>
                    <li className="px-2 border-r border-gray-600 hover:underline">
                        <a href="#">Turquia</a>
                    </li>
                </ul>
                <div className="flex text-xs">
                    <span className="text-gray-600 mr-2">E não se esqueça:</span>
                    <a href="#" className="text-gray-400 hover:underline">Amazon Web Services</a>
                </div>
            </div>
            {/* Down Footer */}
            <div className="flex flex-col items-center bg-darkblue-950 text-xs pt-8 md:pt-2">
                <div className="flex flex-col md:flex-row mb-10">
                    <ul className="flex">
                        <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                            Condições de Uso
                        </li>
                    </ul>
                    <ul className="flex">
                        <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                            Notificação de Privacidade
                        </li>
                    </ul>
                    <ul className="flex">
                        <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                            Cookies
                        </li>
                    </ul>
                    <ul className="flex">
                        <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                            Anúncios Baseados em Interesses
                        </li>
                    </ul>

                    
                </div>    
            </div>           
        </footer>
    </div>
  )
}

export default Footer