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
    title: 'Aadil Rayees',
    subtitle: 'Software Developer @ByteWeb',
    comment:
      'Demonstrates exceptional ability to grasp complex software development tasks and consistently delivers high-quality results with remarkable efficiency. A quick learner who translates intricate requirements into practical solutions, driving projects forward with skill and precision.',
  },
  {
    id: 2,
    image: Image3,
    title: 'Developer @ByteWeb IT Solutions',
    subtitle: 'Yogesh Patel',
    comment:
      'A standout Laravel developer who swiftly modernized our legacy system while managing multiple projects. Demonstrates software development expertise, rapid learning, and innovative problem-solving. Consistently delivers high-quality solutions that exceed expectations, making them an invaluable asset to any development team.',
  },
];
function Testionmonials() {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Professional Endorsements</h2>
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
