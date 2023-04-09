import './Footer.scss'

export const Footer = () => {

 
    return(
    <footer className='footer'>
        <div className= "footerBox">
            <div className='footerContent'>
                <div className='footerSloganYLogo'>
                <img className='footerLogo' src='../../images/bot64.png' alt='bot logo' />
                <p className='footerSlogan'>Hey, tu creatividad comienza aquí</p>
                </div>
                <div className='containerMap'>
                    <p className='Horarios'> Te esperamos de Lunes a viernes de 9:00 a 20:00</p>
                    <div className='Mapa'>
                    <p>Encuentra nuestra tienda aqui:</p>
                    <iframe title="Mapa local Hey" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0932410709033!2d-56.18623711569084!3d-34.90410952757207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81144d75bca7%3A0x5bf1223c5dd3b7ae!2sCasa!5e0!3m2!1ses-419!2suy!4v1680984236734!5m2!1ses-419!2suy" width="200" height="150"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )


}