import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const containerVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const PrivacyPolicy = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 7000);
  });

  const close = () => {
    const privacy = document.getElementById('privacy');
    privacy.style.opacity = 0;
  };
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="privacy"
            id="privacy"
          >
            <span className="privacy__text">
              We use cookies to offer you a better browsing experience, analyze
              site traffic, personalize content, and serve targeted
              advertisements. Read about how we use cookies and how you can
              control them on our Privacy Policy. If you continue to use this
              site, you consent to our use of cookies.
            </span>
            <span className="privacy__close" onClick={close}>
              X
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PrivacyPolicy;
