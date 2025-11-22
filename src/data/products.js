const products = [
    {
        id: 1,
        nombre: "RG 1/144 Wing Gundam Zero (TV Version)",
        descripcion: "Modelo a escala 1/144 Real Grade del Wing Gundam Zero en su versión TV del anime Gundam Wing",
        stock: 3,
        image: "/images/wingzerotv.avif",
        precio: 150000,
        categoria: "realgrade"
    },
    {
        id: 2,
        nombre: "MG 1/100 Ex-S Gundam",
        descripcion: "Modelo a escala 1/100 Master Grade del Ex-S Gundam, de la fotonovela Gundam Sentinel",
        stock: 1,
        image: "/images/exsgundam.avif",
        precio: 300000,
        categoria: "mastergrade"
    },
    {
        id: 3,
        nombre: "HG 1/144 Hi-Nu Gundam",
        descripcion: "Modelo a escala 1/144 High Grade del Hi-Nu Gundam, utilizado por Amuro Ray en la novela Char's Counterattack: Beltorchika's Children",
        stock: 4,
        image: "/images/hinugundam.avif",
        precio: 78000,
        categoria: "highgrade"
    },
    {
        id: 4,
        nombre: "MG MSZ-006 Zeta Gundam (Ver. Ka)",
        descripcion: "Modelo a escala 1/100 Master Grade del Zeta Gundam de su serie homónima, esta es una versión diseñada por el afamado Hajime Katoki, lo que lo vuelve una pieza de colección a la que muchos aspiran",
        stock: 2,
        image: "/images/zetaverka.avif",
        precio: 235000,
        categoria: "mastergrade"
    },
    {
        id: 5,
        nombre: "Nipper God Hand",
        descripcion: "Nippers hechos de una aleación de hierro-carbón para realizar cortes altamente precisos y limpios. Son el estandar al que se apunta en el plastimodelismo y una herramienta muy buscada por quienes se dedican seriamente al hobby",
        stock: 7,
        image: "/images/godhand.avif",
        precio: 110000,
        categoria: "herramienta"
    },
]

const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export default getProducts