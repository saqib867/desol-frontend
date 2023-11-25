'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {

  const navigate = useRouter()
  return (
 <>
<main className="flex flex-col items-center justify-center mt-32">
    <header className="container">
       
        <nav
            className="flex justify-between md:justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 px-8 md:px-3">
           


            <div className="items-center space-x-5 hidden md:flex">
               

                <button
                    className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold "
                    onClick={()=>navigate.push('/login')}
                    >
                    

                    Login
                </button>
            </div>

        </nav>
    </header>

    <section
        className="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
        
        <div className="px-3 w-full lg:w-2/5">
            <div
                className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                    Exclusive Agency For

                    <span className="text-5xl text-blue-500 leading-relaxeds"
                        >Technology
                    </span>

                    Provide Solution
                </h2>

                <p
                    className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                    Helping you maximize operations management with digitization
                </p>
            </div>

            <div className="text-center lg:text-left">
                <a
                    className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                    >Key Features</a
                >

                <a
                    className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                    >How We Work?</a
                >
            </div>
        </div>

        <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
            
            <div className="flex justify-center items-center">
                     Welcome to application
            </div>
        </div>
    </section>

    <section
        className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
        style={{ backgroundImage:'url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80)'}}
           
        >
        <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
            This is Parallax Effect
        </h1>

        <span className="text-center font-bold my-20 text-white/90">
            <a
                href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
                target="_blank"
                className="text-white/90 hover:text-white">
                Convetert to SASS
            </a>

            <hr className="my-4" />

            <a
                href="https://unsplash.com/photos/8Pm_A-OHJGg"
                target="_blank"
                className="text-white/90 hover:text-white">
                Image Source
            </a>

            <hr className="my-4" />

            <p>
                <a
                    href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
                    target="_blank"
                    className="text-white/90 hover:text-white">
                    Source Code
                </a>
                |
                <a
                    href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
                    target="_blank"
                    className="text-white/90 hover:text-white">
                    Full Preview
                </a>
            </p>
        </span>
    </section>

    <section className="p-20 space-y-8">
        <h1 className="text-4xl text-center my-20">Tempor sit labore nostrud</h1>

        <p>
            Exercitation non Lorem exercitation tempor amet ad esse velit. Anim
            deserunt id nulla quis ex magna culpa exercitation. Mollit consequat
            enim eiusmod cupidatat commodo eiusmod nulla. Id quis amet incididunt
            cillum dolore consectetur nulla incididunt laborum excepteur
            consectetur consectetur sunt tempor. Minim fugiat sint sunt ad elit
            laboris est sit est laboris labore do velit. Cillum aliquip pariatur
            deserunt eiusmod. Consequat irure nulla adipisicing deserunt culpa.
            Veniam enim deserunt sint consequat labore. Enim ullamco ea aute duis
            et nostrud voluptate fugiat consectetur et velit cillum anim dolore.
            In exercitation proident proident nostrud voluptate. Fugiat elit esse
            labore pariatur ex. Ex labore esse voluptate nisi in. Ad anim deserunt
            reprehenderit est. Aliquip pariatur nulla dolor amet quis aliqua sit
            nisi officia enim velit. Ad enim eu dolor quis ipsum. Nulla amet
            consectetur adipisicing ullamco qui tempor dolor excepteur dolore anim
            pariatur quis laboris consequat. Consectetur ullamco consectetur minim
            eiusmod quis veniam esse consectetur anim nostrud est pariatur
            laborum. Mollit tempor minim amet esse. Lorem officia consequat
            eiusmod sunt. Proident occaecat velit et consequat irure est cupidatat
            tempor ullamco. Aliquip est pariatur ea ut qui ad sit dolor laboris
            adipisicing officia eiusmod sit. Proident Lorem ex cillum sint
            cupidatat amet nulla veniam laborum velit pariatur. Fugiat excepteur
            culpa sunt est anim sunt. Ea voluptate non do proident sunt ad cillum
            enim esse.
        </p>

        <p>
            Incididunt eu pariatur laborum reprehenderit duis ex cillum fugiat.
            Occaecat tempor commodo officia esse reprehenderit commodo. Irure nisi
            culpa anim velit esse do esse veniam dolore fugiat. Non anim elit ad
            ad esse veniam dolore labore consectetur nulla dolor occaecat quis
            tempor. Ad do exercitation cillum duis consequat. Ea anim aute elit
            velit duis quis. Anim sint ut occaecat officia id exercitation ea
            incididunt exercitation sint ex. Reprehenderit ut qui eiusmod
            cupidatat incididunt ad reprehenderit culpa tempor quis. Elit eu dolor
            anim tempor eu fugiat voluptate dolor aliqua sint ex proident ullamco.
            Labore deserunt velit quis cupidatat aliquip elit do labore ut.
            Laborum dolore incididunt officia esse reprehenderit pariatur ullamco
            consectetur tempor officia. Dolor culpa irure enim aute ex non veniam
            eiusmod ipsum elit est sit mollit dolor. Est ad anim pariatur
            consequat ad sit nisi.
        </p>

        <p>
            Ipsum ea ad fugiat incididunt ea sit laborum cupidatat in ullamco
            ullamco fugiat et id. Sit commodo enim enim veniam do. Ad id ad tempor
            deserunt cupidatat reprehenderit ullamco officia excepteur culpa.
            Officia amet in do voluptate exercitation pariatur officia et sit.
            Adipisicing deserunt do aliquip ad id elit sint voluptate sit anim
            nulla pariatur dolore. Lorem do commodo aute veniam deserunt magna
            commodo cillum magna veniam. Ea amet nostrud commodo nisi adipisicing
            cillum commodo. Nostrud aliquip cupidatat veniam culpa aute officia
            commodo velit. Laborum quis aute nulla amet officia esse proident sunt
            irure dolor fugiat incididunt occaecat. Commodo esse eiusmod fugiat eu
            enim nisi sit id ut adipisicing. Enim nisi mollit ea aliqua nisi qui
            ullamco eu velit et ullamco. Magna eiusmod eiusmod culpa proident
            minim laboris fugiat enim laborum quis mollit minim do nisi. Elit
            irure incididunt duis ullamco exercitation nulla fugiat. Eu ullamco
            aliquip aute consectetur excepteur consequat. Non nostrud officia sint
            enim et ad sunt amet pariatur deserunt enim reprehenderit. Aute Lorem
            adipisicing laborum labore labore tempor officia officia reprehenderit
            incididunt enim officia laborum. Proident eu irure occaecat ipsum elit
            elit anim eu aute commodo ullamco reprehenderit incididunt elit.
            Mollit voluptate eiusmod ullamco fugiat ex enim in fugiat et
            consectetur duis do. Et aliqua ad labore labore ea ipsum nostrud
            veniam et reprehenderit. Sint ad sit voluptate consequat cillum do
            fugiat Lorem. Pariatur ad ad reprehenderit cupidatat nulla ipsum
            voluptate. Dolore pariatur ea laboris est excepteur.
        </p>
    </section>
</main>
</>

  )
}
