"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="bg-primary absolute top-1/2 right-1/3 h-96 w-96 rounded-full opacity-10 blur-3xl select-none"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-2xl"
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm uppercase">
            <span>✶</span>
            <span>Get in Touch</span>
          </div>
        </motion.div>

        <motion.h2
          className={cn(
            "mb-4 sm:mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-transparent",
            geist.className,
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground text-base sm:text-lg mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>
          </div>

          {/* Subject Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              placeholder="Project subject"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 sm:py-4 px-6 rounded-lg font-bold bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            viewport={{ once: true }}
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Success Message */}
        {submitted && (
          <motion.div
            className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
