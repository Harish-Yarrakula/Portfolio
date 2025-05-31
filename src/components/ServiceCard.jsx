import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="glass-card-hover p-6 rounded-2xl flex flex-col cards"
    >
      <div className="bg-gradient-to-br from-blue-light to-purple w-12 h-12 rounded-xl flex items-center justify-center mb-3">
        <Icon className="text-white" size={24} />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white flex-grow mb-1">{description}</p>
      
      <div className="flex flex-wrap gap-2 ">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="text-xs bg-white/10 text-white/90 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;