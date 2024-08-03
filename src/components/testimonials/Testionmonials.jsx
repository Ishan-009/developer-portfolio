import Image1 from '../../assets/avatar-1.svg';
import Image3 from '../../assets/avatar-3.svg';
import './testimonials.css';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
const data = [
  {
    id: 1,
    image: Image1,
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment:
      'I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍',
  },
  {
    id: 2,
    image: Image3,
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment:
      'I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍',
  },
];
function Testionmonials() {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Client & Reviews</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}
        className="testimonials__container grid"
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="testimonials__subtitle">{subtitle}</span>
              <div className="testimonials__comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testionmonials;
