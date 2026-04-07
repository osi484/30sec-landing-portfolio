import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      {/* Background Pulse Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.span 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[40rem] font-black text-urgent select-none"
        >
          30
        </motion.span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Timer size={48} className="text-urgent" />
          </motion.div>
          <span className="text-xl tracking-[0.5em] text-urgent font-bold">TIC-TOCK</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter italic">
          30 <span className="text-urgent">SEC</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          숨막히는 30초의 사투. <br />
          당신의 선택이 생존 혹은 죽음을 결정합니다.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 0, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-urgent text-white text-xl font-bold rounded-none skew-x-[-12deg] transition-all hover:bg-red-700"
        >
          <span className="inline-block skew-x-[12deg]">사전 예약 신청하기</span>
        </motion.button>
      </motion.div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-urgent to-transparent opacity-30 shadow-[0_0_20px_rgba(255,0,0,1)]" />
    </section>
  );
}
