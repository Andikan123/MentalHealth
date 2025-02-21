import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
          As a passionate Frontend Developer, I specialize in building dynamic, user-friendly websites and applications. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Vue, I focus on creating seamless, responsive experiences that delight users across all devices.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
