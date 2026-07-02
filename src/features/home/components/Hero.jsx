import { motion } from 'framer-motion'
import logoMark from '../../../assets/logo/namka-mark.png'
import { appConfig } from '../../../config/appConfig'
import { cn } from '../../../utils/cn'

function Hero({ compact }) {
  return (
    <motion.section
      animate={{
        paddingTop: compact ? 20 : 56,
        paddingBottom: compact ? 8 : 24,
      }}
      className="mx-auto w-full max-w-4xl text-center"
      transition={{ duration: 0.4 }}
    >
      <motion.img
  src={logoMark}
  alt="Namka"
  animate={{
    width: compact ? 75 : 160,
  }}
  transition={{ duration: 0.35 }}
  className="mx-auto block object-contain"
/>

      {!compact && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-5 inline-flex items-center rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 px-4 py-1.5 text-sm font-medium text-[#22C55E]"
        >
          AI Shopping Assistant
        </motion.div>
      )}

      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.35 }}
        className={cn(
          'mx-auto mt-6 max-w-4xl font-bold text-[#FAFAFA]',
          compact
            ? 'text-3xl sm:text-4xl'
            : 'text-5xl sm:text-6xl lg:text-7xl'
        )}
      >
        {appConfig.productTitle}
      </motion.h1>

      {!compact && (
        <>
          <motion.p
            animate={{ opacity: 1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#A1A1AA]"
          >
            Find the right product faster with AI-powered search, comparisons,
            recommendations and smart shopping guidance.
          </motion.p>

          <motion.p
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-[#71717A]"
          >
            Powered by AI • Semantic Search • Smart Comparisons
          </motion.p>
        </>
      )}
    </motion.section>
  )
}

export default Hero