import './index.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import { Container } from 'react-bootstrap';

const index = ({ logo }) => {
  return (
    <div className="About-background">
      
      
      <div className='profile-container'>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="profile-card">
              <h2>Freddy Perdomo</h2>
              Director
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-card">
              <h2>Yolanda Bastos</h2>
              Asistente de Dirección
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-card">
              <h2>Omar Fernández</h2>
              Script y Director de Casting
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-card">
              <h2>Cristina Betancourt</h2>
              Directora de Producción
            </div>
          </SwiperSlide>
          
          
          <SwiperSlide>
            <div className="profile-card">
              <h2>Dayana Arocha</h2>
              Jefe de Producción
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-card">
              <h2>Belén Rojas</h2>
              Asistente de Producción
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-card">
              <h2>Alessandro Varuzza</h2>
              Director de Fotografía
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-card">
              <h2>Fabiana Hernández</h2>
              Directora de Arte
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="profile-card">
              <h2>Luis Gentile</h2>
              Sonido
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <Container>
        <p className='for-cris'>Somos estudiantes del último semestre de Comunicación Social de la Universidad Católica Andrés Bello y, actualmente, estamos cursando la concentración de Producción Audiovisual. A lo largo de nuestra carrera, hemos obtenido los conocimientos necesarios para llevar a cabo un trabajo profesional en nuestra tesis de grado, que es el cortometraje In Temporal.</p>
      </Container>
      
    </div>
  )
}

export default index