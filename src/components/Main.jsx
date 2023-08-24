import React from 'react'
import BannerPromo from '../assets/img/banner_promo.jpg'
import Cat1 from '../assets/img/cat1.jpg'
import Cat2 from '../assets/img/cat2.jpg'
import Cat3 from '../assets/img/cat3.jpg'
import Cat4 from '../assets/img/cat4.jpg'
import Cat5 from '../assets/img/cat5.jpg'
import Cat6 from '../assets/img/cat6.jpg'
import Cat7 from '../assets/img/cat7.jpg'
import Cat8 from '../assets/img/cat8.jpg'
import Cat9 from '../assets/img/cat9.jpg'
import Livro1 from '../assets/img/livro1.jpg'
import Livro2 from '../assets/img/livro2.jpg'
import Livro3 from '../assets/img/livro3.jpg'
import Livro4 from '../assets/img/livro4.jpg'
import Livro5 from '../assets/img/livro5.jpg'
import Livro6 from '../assets/img/livro6.jpg'
import Livro7 from '../assets/img/livro7.jpg'
import Livro8 from '../assets/img/livro8.jpg'




const Main = () => {
  return (
    <div>
        <div className="grid grid-cols-6">
            {/* Left Nav Bar */}
            <div className="col-span-1 hidden md:block pl-2 my-2 border-r border-gray-300 text-xs">

                <h3 className="font-bold">Destaque em Livros</h3>
                <ul className="pl-2 mb-2">
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Indicações da Amazon</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Inglês e Outras Línguas</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Livros em Oferta</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Mais Vendidos do Mês</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Pré-venda e Lançamentos</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Livros Exclusivos Amazon</a>
                    </li>
                </ul>

                <h3 className="font-bold">Páginas Especiais</h3>
                <ul className="pl-2 mb-2">
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Livros Clássicos</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Livros que Viraram Filmes</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Livros Infantis</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Loja Geek</a>
                    </li>

                </ul>

                <h3 className="font-bold">Livros Educacionais</h3>
                <ul className="pl-2 mb-2">
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Didáticos e Escolares</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Estudo e Ensino de Idiomas</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Exames e Concursos</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Importados para Exames</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Universitários e Acadêmicos</a>
                    </li>

                </ul>

                <h3 className="font-bold">Kindle</h3>
                <ul className="pl-2 mb-2">
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Acessórios Kindle</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Comprar Kindle</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Ebooks em Inglês</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Ebooks em Oferta</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Kindle Unlimited</a>
                    </li>
                    <li className="text-gray-800 hover:text-orange-650">
                        <a href="#">Todos os Ebooks</a>
                    </li>
                </ul>


            </div>

            {/* Main Content */}
            <div className="col-span-6 md:col-span-5 p-2">
                <div className="flex flex-col">
                    {/* Categories and titles */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold md:text-3xl md:font-normal">Loja de Livros</h2>
                        <ul className="flex flex-wrap md:flex-nowrap justify-center md:text-sm px-4md: px-0 pb-2">
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                            </li>
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Importado</a>
                            </li>
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Lançamentos</a>
                            </li>
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Universitários</a>
                            </li>
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Didáticos e Escolares</a>
                            </li>
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">HQs e Mangás</a>
                            </li>
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Mais Vendidos</a>
                            </li>
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros Infantis</a>
                            </li>
                            <li>
                                <a href="" className="text-blue-600 underline hover:text-orange-650 px-1">Indicações</a>
                            </li>
                        </ul>
                        <div className="h-2 border shadow-md"></div>
                    </div>
                    {/* Promotion am categories */}
                    <div className="hidden md:block my-6">
                        <img src={BannerPromo} alt="banner" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center my-8 py-1">
                        <p className="font-bold md: w-3/4 text-center md:border-r-2 border-gray-300 leading-5 pr-2 mt-10 md:mt-0">
                            Assine o Amazon Prime para ter benefícios de leitura com o Prime Reading, frete gratis sem valor mínimo de compra e muito mais. Apenas R$ 9,90/mês
                        </p>
                        <a href="#" className="text-sm md:text-xs bg-yellow-350 border border-yellow-700 rounded px-3 py-3 md:py-0 md:ml-10 h-12 md:h-8 block md:flex items-center w-full md:w-auto text-center">Teste GRÁTIS por 30 dias</a>
                    </div>
                    {/* Categories */}
                    <div className="flex flex-col px-6 pb-8 border-b border-gray-300">
                        <h3 className="text-center md:text-left text-xl font-bold mb-4">Encontre ofertar por categoria</h3>
                        <ul className="flex flex-wrap md:flex-nowrap px-2 text-xs font-bold">
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat1} alt="cat1" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">Todas as ofertas</a>
                            </li>
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat2} alt="cat" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">Ofertas Relâmpago</a>
                            </li>
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat3} alt="cat" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">Literatura</a>
                            </li>
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat4} alt="cat" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">HQs e Mangás</a>
                            </li>
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat5} alt="cat" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">Ficção</a>
                            </li>
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat6} alt="cat" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">Inglês e outras línguas</a>
                            </li>
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat7} alt="cat" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">Infantil</a>
                            </li>
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat8} alt="cat" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">Negócios</a>
                            </li>
                            <li className="text-center mx-3 mb-4 md:mb-0">
                                <img src={Cat9} alt="cat" className="rounded w-full md:w-75px mb-2 mx-auto" />
                                <a href="#">Toda</a>
                            </li>
                        </ul>
                    </div>
                    {/* Products */}
                    <div className="flex flex-col">
                        <div className="flex justify-between py-2 px-4 text-sm">
                            <p>Mostrando de 1-32 de 122 resultados</p>
                            <div className="flex md: flex-none">
                                ]<span>Ordernar por</span>
                                <select name="" id="" className="bg-gray-300 pr-4 md:pr-12 ml-3 rounded-sm border border-gray-600 text-xs px-1">
                                    <option>Destaques</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap border border-gray-300 divide-x divide-gray-300">
                            <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                                <img src={Livro1} alt="livro" className="h-210px place-self-center p-2" />
                                <p className="text-red-700 mt-10">R$ xx,xx</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-650">Em Busca de Sentido</a>
                                <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                                <img src={Livro2} alt="livro" className="h-210px place-self-center p-2" />
                                <p className="text-red-700 mt-10">R$ xx,xx</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-650">Não se humilha não</a>
                                <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                                <img src={Livro3} alt="livro" className="h-210px place-self-center p-2" />
                                <p className="text-red-700 mt-10">R$ xx,xx</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-650">As seis lições</a>
                                <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                                <img src={Livro4} alt="livro" className="h-210px place-self-center p-2" />
                                <p className="text-red-700 mt-10">R$ xx,xx</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-650">Amme</a>
                                <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                                <img src={Livro5} alt="livro" className="h-210px place-self-center p-2" />
                                <p className="text-red-700 mt-10">R$ xx,xx</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-650">Propósito</a>
                                <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                                <img src={Livro6} alt="livro" className="h-210px place-self-center p-2" />
                                <p className="text-red-700 mt-10">R$ xx,xx</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-650">A morte de Ivan Ilitch</a>
                                <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                                <img src={Livro7} alt="livro" className="h-210px place-self-center p-2" />
                                <p className="text-red-700 mt-10">R$ xx,xx</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-650">Outros jeitos ded usar a boca</a>
                                <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                                <img src={Livro8} alt="livro" className="h-210px place-self-center p-2" />
                                <p className="text-red-700 mt-10">R$ xx,xx</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-650">Antifragil</a>
                                <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Main