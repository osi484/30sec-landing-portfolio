import { motion } from 'framer-motion';
import { Shield, Zap, Skull } from 'lucide-react';

const features = [
  {
    icon: <Skull size={40} />,
    title: "압도적인 적의 물결",
    desc: "30초 동안 쏟아지는 수만 마리의 적. 당신은 버틸 수 있습니까?"
  },
  {
    icon: <Zap size={40} />,
    title: "초고속 무기 진화",
    desc: "숨 쉴 틈 없는 무작위 파워업 선택. 최적의 빌드를 찾아내세요."
  },
  {
    icon: <Shield size={40} />,
    title: "치명적인 타임 리밋",
    desc: "모든 스테이지는 단 30초. 극한의 속도로 모든 것을 파괴하십시오."
  }
];

export default function Features() {
  return (
    <section className="py-32 px-4 bg-void relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">Game Features</h2>
          <div className="h-1 w-24 bg-urgent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-[#0A0A0A] border border-gray-900 group hover:border-urgent/50 transition-all cursor-default"
            >
              <div className="text-urgent mb-8 group-hover:animate-pulse-fast">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
