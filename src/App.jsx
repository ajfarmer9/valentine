import { useState } from "react";
import { motion } from "framer-motion";
import './App.css';

function App() {
  const messages = [
    "My love, every day with you is a gift. You make my world brighter, my heart lighter, and my life so much more beautiful. I’m so lucky to have you. ❤️",
    "You are my greatest adventure, my happiest place, and my most cherished love. Thank you for being you. 💕",
    "No words can fully express how much you mean to me. You are my heart, my soul, my everything. 💖",
    "Just thinking about you brings a smile to my face. You are my joy, my love, my forever. 😊",
    "Every moment with you is special. I am endlessly grateful for your love, your kindness, and your beautiful heart. 🌹",
    "You light up my life in ways I never thought possible. Thank you for being my love, my partner, my best friend. 💞",
    "Being with you is the best decision I've ever made. You complete my world in the most perfect way. ❤️",
    "You are the dream I never want to wake up from. I love you more than words can say. 💫",
    "Forever isn’t long enough when I’m with you. Thank you for filling my days with love and happiness. 💖",
    "Every day with you is a page in our love story, and I can't wait to write more chapters together. 📖",
    "You make my heart race and my soul feel at peace all at the same time. You're my perfect balance. 💓",
    "Your booty stank. 💕",
    "You are the melody to my heart’s favorite song, and I never want the music to stop. 🎶",
    "With you, love feels easy, natural, and endless. I am so blessed to have you in my life. 🌟",
    "No matter where we go or what we do, as long as I’m with you, I’m home. 🏡",
    "You make the ordinary feel extraordinary just by being in my life. 🌈",
    "You are my person, my heart, my everything. I love you beyond words. 💞",
    "💖You are a great mother💖",
    "You have a permanent place in my heart"
  ];

  const [revealed, setRevealed] = useState(false);
  const [message, setMessage] = useState("");

  const revealMessage = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    setRevealed(true);
  };

  const newMessage = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  };

  return (
    <div className="container">
      <motion.h1 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        A Special Message for You ❤️
      </motion.h1>

      {!revealed ? (
        <motion.button 
          className="reveal-button"
          onClick={revealMessage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tap to Reveal
        </motion.button>
      ) : (
        <>
          <motion.p
            className="message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {message}
          </motion.p>
          <motion.button
            className="new-message-button"
            onClick={newMessage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show Another Message
          </motion.button>
        </>
      )}
    </div>
  );
}

export default App;
