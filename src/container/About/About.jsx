/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable keyword-spacing */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    let ignore = false;
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      if(!ignore) {
      setAbouts(data);
      }
    });

    return () => {
      ignore = true;
     };
  }, []);

  return (
    <>
      <h2 className="head-text">Elevating  into <span>Digital Ideas</span> <br /> into  <span> Elegant Code</span></h2>
      <div className="app__testimonial-item app__flex top">
            <div className="app__testimonial-content mar">
              <p className="p-text">My name is Chetan Awasthi, a computer science student at  DCRUST Murthal, a passionate programmer who is interested in creating innovative and user-centric web applications. I specialize in the MERN stack, bringing together the power of MongoDB, Express.js, React.js, and Node.js to craft robust and dynamic web solutions.  </p>
              <div>
                <a href="https:github.com/chetan386" className="bold-text pad">Github</a>
                <a href="https://www.linkedin.com/in/chetan-awasthi-749767203" className="bold-text">Linkedin</a>
              </div>
            </div>
          </div>
          <div className="app__testimonial-brands app__flex">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            {/* <img src={urlFor(brand.imgUrl)} alt={brand.name} /> */}
          </motion.div>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
