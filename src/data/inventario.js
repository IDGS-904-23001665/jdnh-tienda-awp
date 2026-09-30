export const obtenerProductosLocales = async () => {
    return new Promise((resolve) => {
        const productos = [
            { id: 1, nombre: "Nutrileche 1L", precio: "$13", img: "https://w7.pngwing.com/pngs/600/735/png-transparent-coffee-milk-milk-bottle-milk-thumbnail.png" },
            { id: 2, nombre: "Frijol Pinto", precio: "$35", img: "https://w7.pngwing.com/pngs/873/885/png-transparent-kidney-beans-platter-baked-beans-pinto-bean-refried-beans-cooking-bean-food-recipe-peanut-thumbnail.png" },
            { id: 3, nombre: "Huevo San Juan", precio: "$40", img: "https://w7.pngwing.com/pngs/658/596/png-transparent-chicken-egg-carton-free-range-eggs-salted-duck-egg-chicken-food-animals-chicken-thumbnail.png" },
            { id: 4, nombre: "Aceite Nutrioli 1L", precio: "$48", img: "https://w7.pngwing.com/pngs/1/591/png-transparent-cooking-oil-soybean-oil-vegetable-oil-the-oil-bottle-of-vegetable-oil-kitchen-food-cooking-thumbnail.png" },
            { id: 5, nombre: "Azucar del Bienestar 1kg", precio: "$2,500", img: "https://w7.pngwing.com/pngs/346/341/png-transparent-sugar-sugar-desktop-wallpaper-brown-sugar-sugar-substitute-thumbnail.png" },
            { id: 6, nombre: "Jabon Zote", precio: "$20", img: "https://w7.pngwing.com/pngs/193/161/png-transparent-pink-soap-soap-cartoon-vermicelli-soap-love-miscellaneous-text-thumbnail.png" }
        ];
        resolve(productos);
    });
};