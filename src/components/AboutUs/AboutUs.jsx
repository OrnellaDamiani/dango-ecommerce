import { Link } from "react-router-dom";

const AboutUs = () => {


    return (
    <body>
        <div className="aboutus-box">
            <h2 className="aboutus">Sobre nosotros</h2>
            <p className="aboutus-text">
                Somos un ecommerce llamado Dango. 
                <br></br>
                En esta página vas a poder encontrar todo tipo de artículos sobre anime y manga principalmente.
                <br></br>
                Todos los productos nuestros son importados, podes consultarnos y seguirnos en nuestras redes sociales, las vas a encontrar  al final de la página. 
                <br></br>
                Espero que disfrutes de este emprendimiento y que te tientes con alguna de nuestras cositas. </p>
                <br></br>
                <p className="aboutus-endtext">Gracias por visitarnos y te esparamos de vuelta :3</p>
        
        
            

        </div>


            <footer className="footer">
                <img src="https://i.postimg.cc/ryR11V28/facebook.jpg" className="img-socialmedia"></img>
                <img src="https://i.postimg.cc/wTKhFC9D/instagram.jpg"className="img-socialmedia"></img>
                <img src="https://i.postimg.cc/MKy1L9GN/twitter.jpg "className="img-socialmedia"></img>
            </footer>

     </body>
    );
};

export default AboutUs;  