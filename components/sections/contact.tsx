'use client'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { contact } from '@/data/girls'

export function Contact() {
  return (
    <section id="contact" className="space-y-8 scroll-mt-24 max-w-2xl mx-auto text-center">
      <SectionHeading
        title="Break a barrier with us"
        subtitle="Are you a student, teacher, parent or team who wants to join the movement? We would love to hear from you."
      />

      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-2.5 text-sm"
      >
        <li>
          <strong className="text-highlight">Email:</strong>{' '}
          <a
            className="text-primary hover:underline underline-offset-4"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </li>
        <li>
          <strong className="text-highlight">Instagram:</strong>{' '}
          <a
            className="text-primary hover:underline underline-offset-4"
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            @ealrobotik_8828
          </a>
        </li>
        <li>
          <strong className="text-highlight">School:</strong>{' '}
          <span className="text-highlight">{contact.school}</span>
        </li>
        <li>
          <strong className="text-highlight">Main site:</strong>{' '}
          <a
            className="text-primary hover:underline underline-offset-4"
            href={contact.mainSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            ealrobotik.com
          </a>
        </li>
      </motion.ul>
    </section>
  )
}