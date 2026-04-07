import { motion } from 'framer-motion';

export default function PreRegistration() {
  return (
    <section className="py-32 px-4 border-t border-gray-900 bg-black relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
       
       <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-8 italic uppercase"
        >
          JOIN THE <span className="text-urgent">SURVIVORS</span>
        </motion.h2>
        
        <p className="text-gray-400 mb-12 text-lg">
          지금 바로 등록하고 독점 코스튬과 한정판 무기를 받으세요. <br />
          생존자들의 목록에 당신의 이름을 전송하십시오.
        </p>

        <form 
          className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("이메일 정보는 어디에도 저장되지 않습니다. (데모 페이지)");
          }}
        >
          <input 
            type="email" 
            placeholder="이메일을 입력하세요" 
            className="flex-1 px-8 py-5 bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-urgent focus:ring-1 focus:ring-urgent transition-all backdrop-blur-sm"
            required
          />
          <button type="submit" className="px-12 py-5 bg-white text-black text-xl font-black hover:bg-urgent hover:text-white transition-all">
            SUBMIT
          </button>
        </form>
        
        <div className="mt-12 text-gray-600 text-sm font-mono tracking-widest">
          PROTOCOL INITIATED // VERSION 1.0.3 // STANDBY FOR DEPLOYMENT
        </div>
       </div>
    </section>
  );
}
