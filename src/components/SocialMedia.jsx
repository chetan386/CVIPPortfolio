import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/xskull27">
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href="https://github.com/chetan386">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/chetan-awasthi-749767203/">
      <div>
        <BsLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
