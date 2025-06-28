'use client';
import { useState, useEffect } from 'react';
import { FaPython, FaChild, FaDatabase, FaFemale, FaGraduationCap, FaMicrophone, FaPlus, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const PythonCommunityLauncher = () => {
  const [launchStage, setLaunchStage] = useState<'prelaunch' | 'launching' | 'launched'>('prelaunch');
  const [celebrate, setCelebrate] = useState(false);
  const controls = useAnimation();

  const launchProgram = async () => {
    setLaunchStage('launching');
    await controls.start({
      scale: 1.5,
      transition: { duration: 0.3 }
    });
    setCelebrate(true);
    await controls.start({
      scale: 0.1,
      opacity: 0,
      transition: { duration: 0.5 }
    });
    setLaunchStage('launched');
    setTimeout(() => setCelebrate(false), 2500);
  };

  // Particle effects configuration
  const particles = Array(100).fill(0);
  const particleVariants = {
    initial: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0
    },
    animate: (i: number) => ({
      opacity: 0,
      y: -Math.random() * 800 - 200,
      x: Math.random() * 1000 - 500,
      rotate: Math.random() * 720,
      transition: {
        duration: 2 + Math.random(),
        ease: [0.3, 0.7, 0.4, 1],
        delay: i * 0.01
      }
    })
  };

  const programs = [
    {
      id: 'pykids',
      name: 'Pykids',
      icon: <FaChild className="text-2xl" />,
      description: 'Python for young learners',
      gradient: 'from-blue-600 via-cyan-500 to-blue-400'
    },
    {
      id: 'pydata',
      name: 'Pydata',
      icon: <FaDatabase className="text-2xl" />,
      description: 'Data science programs',
      gradient: 'from-green-600 via-emerald-500 to-green-400'
    },
    {
      id: 'pyladies',
      name: 'PyLadies',
      icon: <FaFemale className="text-2xl" />,
      description: 'Women in Python',
      gradient: 'from-purple-600 via-fuchsia-500 to-purple-400'
    },
    {
      id: 'bootcamps',
      name: 'Bootcamps',
      icon: <FaGraduationCap className="text-2xl" />,
      description: 'Career accelerators',
      gradient: 'from-yellow-600 via-amber-500 to-yellow-400'
    },
    {
      id: 'pypodium',
      name: 'PyPodium',
      icon: <FaMicrophone className="text-2xl" />,
      description: 'Speaker platform',
      gradient: 'from-red-600 via-pink-500 to-red-400'
    },
    {
      id: 'more',
      name: 'More',
      icon: <FaPlus className="text-2xl" />,
      description: 'Additional initiatives',
      gradient: 'from-gray-600 via-slate-500 to-gray-400'
    }
  ];

  // Close by clicking anywhere outside cards
  useEffect(() => {
    if (launchStage === 'launched') {
      const handler = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.program-card')) {
          setLaunchStage('prelaunch');
        }
      };
      window.addEventListener('click', handler);
      return () => window.removeEventListener('click', handler);
    }
  }, [launchStage]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {launchStage === 'prelaunch' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.5 } }}
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex flex-col items-center justify-center p-8 text-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.3, type: 'spring' } }}
              className="max-w-4xl mb-16"
            >
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Python Community, Katsina
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                className="text-xl text-slate-300 mb-8 leading-relaxed"
              >
                ───────────────────────────────────────────────
                With great honour, I declare the Python Community Katsina officially launched today.
                May this community inspire learning, innovation, and collaboration among all who join.
                Thank you.
                ───────────────────────────────────────────────
              </motion.p>
              
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { delay: 1.2, type: 'spring' } }}
              >
                <motion.button
                  onClick={launchProgram}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(251, 146, 60, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg text-xl font-bold shadow-lg shadow-orange-500/30 flex items-center gap-3 mx-auto"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 20, -20, 0],
                      transition: { 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }
                    }}
                  >
                    <FaPython className="text-3xl" />
                  </motion.div>
                  EXPLORE PROGRAMS
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6, transition: { delay: 1.5 } }}
              className="text-slate-500 text-sm"
            >
              <p>Click anywhere outside programs to return</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launch sequence */}
      <AnimatePresence>
        {launchStage === 'launching' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-orange-900 via-amber-800 to-orange-700 flex items-center justify-center"
          >
            <motion.div
              animate={controls}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: 360,
                  transition: { 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <FaPython className="text-[120px] text-white/90" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1.2, 0],
                  opacity: [0, 0.8, 0],
                  transition: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }
                }}
                className="absolute inset-0 rounded-full border-4 border-white/30"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particle explosion */}
      <AnimatePresence>
        {celebrate && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="initial"
                animate="animate"
                className={`absolute w-3 h-3 rounded-full ${
                  ['bg-orange-500', 'bg-blue-500', 'bg-green-500', 
                   'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'][i % 6]
                }`}
                style={{
                  left: `${50 + (Math.random() * 20 - 10)}%`,
                  bottom: `${50 + (Math.random() * 20 - 10)}%`,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Programs showcase - compact view */}
      <AnimatePresence>
        {launchStage === 'launched' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { duration: 0.8 }
            }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-b from-slate-900 to-gray-900 overflow-y-auto p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ y: -30, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { delay: 0.3 }
                }}
                className="text-3xl md:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300"
              >
                Python Community Katsina Programs
              </motion.h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.id}
                    className="program-card"
                    initial={{ 
                      opacity: 0,
                      y: 30,
                      x: index % 2 ? 30 : -30
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      x: 0,
                      transition: { 
                        delay: 0.3 + index * 0.1,
                        type: 'spring',
                        stiffness: 100
                      }
                    }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`h-full rounded-xl p-5 text-white bg-gradient-to-br ${program.gradient} shadow-md overflow-hidden relative`}>
                      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                      
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            {program.icon}
                          </div>
                          <h3 className="text-xl font-bold">{program.name}</h3>
                        </div>
                        
                        <p className="text-sm text-white/90 mb-4 flex-grow">
                          {program.description}
                        </p>
                        
                        <motion.div
                          whileHover={{ 
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                          className="flex items-center text-sm font-medium"
                        >
                          <span>View</span>
                          <FaRocket className="ml-2 text-xs animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 0.7,
                  transition: { delay: 1.5 }
                }}
                className="text-center text-slate-500 mt-8 text-sm"
              >
                <p>Click anywhere outside the cards to return</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PythonCommunityLauncher;